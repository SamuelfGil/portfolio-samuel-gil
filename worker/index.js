function json(dados, status = 200) {
  return Response.json(dados, { status });
}

function validar({ nome, email, mensagem }) {
  const erros = [];
  if (typeof nome !== 'string' || nome.trim().length < 2) erros.push('nome');
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.push('email');
  if (typeof mensagem !== 'string' || mensagem.trim().length < 10) erros.push('mensagem');
  if (nome?.length > 100 || email?.length > 200 || mensagem?.length > 5000) erros.push('tamanho');
  return erros;
}

async function receberContato(request, env) {
  let dados;
  try {
    dados = await request.json();
  } catch {
    return json({ ok: false, erros: ['json'] }, 400);
  }

  const erros = validar(dados ?? {});
  if (erros.length > 0) {
    return json({ ok: false, erros }, 400);
  }

  const nome = dados.nome.trim();
  try {
    await env.EMAIL.send({
      from: { email: env.EMAIL_REMETENTE, name: 'Portfólio Samuel Gil' },
      to: env.EMAIL_DESTINO,
      replyTo: dados.email,
      subject: `Contato pelo portfólio: ${nome}`,
      text: `Nome: ${nome}\nE-mail: ${dados.email}\n\n${dados.mensagem.trim()}`,
    });
    return json({ ok: true });
  } catch (erro) {
    console.error('Erro ao enviar e-mail:', erro.code, erro.message);
    return json({ ok: false, erros: ['envio'] }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contato') {
      if (request.method !== 'POST') {
        return json({ ok: false, erros: ['metodo'] }, 405);
      }
      return receberContato(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

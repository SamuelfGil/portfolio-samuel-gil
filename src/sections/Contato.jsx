import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { pessoa } from '../data/conteudo';
import Aparecer from '../components/Aparecer';
import { Cone } from '../components/obra/Obra';

const API_URL = '';

const contatos = [
  { nome: 'E-mail', href: `mailto:${pessoa.email}`, icone: <FiMail />, texto: pessoa.email },
  { nome: 'WhatsApp', href: `https://wa.me/${pessoa.whatsapp}`, icone: <FaWhatsapp />, texto: '(31) 99765-9993' },
  { nome: 'LinkedIn', href: pessoa.linkedin, icone: <FiLinkedin />, texto: 'samuelgil-eng' },
  { nome: 'GitHub', href: pessoa.github, icone: <FiGithub />, texto: 'SamuelfGil' },
  { nome: 'GilForge', href: pessoa.site, icone: <FiGlobe />, texto: 'gilforge.com' },
];

export default function Contato() {
  const [status, setStatus] = useState('parado');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function enviar(dados) {
    setStatus('enviando');
    try {
      const resposta = await fetch(`${API_URL}/api/contato`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });
      if (!resposta.ok) throw new Error('Falha no envio');
      setStatus('enviado');
      reset();
    } catch {
      setStatus('erro');
    }
  }

  return (
    <section id="contato" className="secao">
      <div className="container">
        <div className="secao-titulo">
          <Cone className="icone-titulo" />
          <h2>Contato</h2>
        </div>
        <p className="secao-subtitulo">Tem um projeto, uma vaga ou uma ideia de automação? Me chama.</p>

        <div className="contato-grade">
          <Aparecer>
            <ul className="lista-contatos">
              {contatos.map((c) => (
                <li key={c.nome}>
                  <a href={c.href} target="_blank" rel="noreferrer" aria-label={c.nome}>
                    <span className="contato-icone" aria-hidden="true">{c.icone}</span>
                    <span>
                      <strong>{c.nome}</strong>
                      <small>{c.texto}</small>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Aparecer>

          <Aparecer atraso={0.15} className="cartao">
            <form className="formulario" onSubmit={handleSubmit(enviar)} noValidate>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                autoComplete="name"
                aria-invalid={errors.nome ? 'true' : 'false'}
                {...register('nome', {
                  required: 'Digite seu nome.',
                  minLength: { value: 2, message: 'O nome precisa ter pelo menos 2 letras.' },
                })}
              />
              {errors.nome && <p className="erro">{errors.nome.message}</p>}

              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', {
                  required: 'Digite seu e-mail.',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Este e-mail não parece válido.' },
                })}
              />
              {errors.email && <p className="erro">{errors.email.message}</p>}

              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                rows="5"
                aria-invalid={errors.mensagem ? 'true' : 'false'}
                {...register('mensagem', {
                  required: 'Escreva sua mensagem.',
                  minLength: { value: 10, message: 'A mensagem precisa ter pelo menos 10 caracteres.' },
                })}
              />
              {errors.mensagem && <p className="erro">{errors.mensagem.message}</p>}

              <button className="botao botao-principal" type="submit" disabled={status === 'enviando'}>
                {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
              </button>

              <div aria-live="polite">
                {status === 'enviado' && <p className="aviso sucesso">Mensagem enviada! Respondo em breve.</p>}
                {status === 'erro' && (
                  <p className="aviso falha">
                    Não consegui enviar agora. Tente de novo ou escreva direto para{' '}
                    <a href={`mailto:${pessoa.email}`}>{pessoa.email}</a>.
                  </p>
                )}
              </div>
            </form>
          </Aparecer>
        </div>
      </div>
    </section>
  );
}

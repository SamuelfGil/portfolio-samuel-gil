import { useState } from 'react';
import { FiAward, FiCopy, FiCheck, FiExternalLink } from 'react-icons/fi';
import { destaqueAcademico, palestraEraBim, ferramentasGilForge, pessoa } from '../data/conteudo';
import Aparecer from '../components/Aparecer';

export default function Destaques() {
  const [copiado, setCopiado] = useState(false);

  async function copiarCodigo() {
    try {
      await navigator.clipboard.writeText(destaqueAcademico.codigo);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <section id="destaques" className="secao secao-alternada">
      <div className="container">
        <div className="secao-titulo">
          <h2>Destaques</h2>
        </div>

        <div className="grade-destaques">
          <Aparecer className="cartao destaque-faixa">
            <img
              className="destaque-imagem"
              src={import.meta.env.BASE_URL + palestraEraBim.imagem}
              alt="Cartaz do 9º Congresso Internacional A Era BIM com a foto do Samuel Gil"
              loading="lazy"
            />
            <div>
              <p className="sobretitulo">Palestra</p>
              <h3>{palestraEraBim.titulo}</h3>
              <p className="palestra-tema">“{palestraEraBim.tema}”</p>
              <p>{palestraEraBim.texto}</p>
              <p className="palestra-coautores">{palestraEraBim.coautores}</p>
              <a className="botao botao-secundario" href={palestraEraBim.link} target="_blank" rel="noreferrer">
                Ver na programação do evento <FiExternalLink />
              </a>
            </div>
          </Aparecer>

          <Aparecer className="cartao destaque-faixa invertida">
            <img
              className="destaque-imagem certificado"
              src={import.meta.env.BASE_URL + destaqueAcademico.imagem}
              alt="Certificado de Destaque Acadêmico da PUC Minas em nome de Samuel Ferreira Gil"
              loading="lazy"
            />
            <div>
              <p className="sobretitulo">Prêmio</p>
              <h3>
                <FiAward className="premio-icone" aria-hidden="true" /> {destaqueAcademico.titulo}
              </h3>
              <p>{destaqueAcademico.texto}</p>
              <p className="verificar-rotulo">Para conferir o certificado, use este código no verificador da PUC Minas:</p>
              <div className="codigo-caixa">
                <code>{destaqueAcademico.codigo}</code>
                <button className="botao-icone" onClick={copiarCodigo} aria-label="Copiar código">
                  {copiado ? <FiCheck /> : <FiCopy />}
                </button>
              </div>
              <span className="sr-only" aria-live="polite">{copiado ? 'Código copiado' : ''}</span>
              <a className="botao botao-secundario" href={destaqueAcademico.verificador} target="_blank" rel="noreferrer">
                Abrir o verificador <FiExternalLink />
              </a>
            </div>
          </Aparecer>
        </div>

        <Aparecer className="cartao gilforge">
          <div className="gilforge-cabecalho">
            <div>
              <p className="sobretitulo">Projeto próprio</p>
              <h3>GilForge: ferramentas gratuitas para a comunidade AECO</h3>
            </div>
            <a className="botao botao-principal" href={`${pessoa.site}/ferramentas`} target="_blank" rel="noreferrer">
              Conhecer as ferramentas <FiExternalLink />
            </a>
          </div>
          <p>
            A GilForge reúne plugins para Civil 3D e AutoCAD feitos para o jeito brasileiro de projetar: normas do DNIT,
            do INCRA e da ABNT, estacas de 20 m, planilhas que o cliente pede. As ferramentas são gratuitas para
            projetistas, topógrafos e escritórios da arquitetura, engenharia, construção e operação (AECO). A lista
            cresce a cada mês.
          </p>
          <ul className="etiquetas ferramentas">
            {ferramentasGilForge.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Aparecer>
      </div>
    </section>
  );
}

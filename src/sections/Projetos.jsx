import { FiExternalLink } from 'react-icons/fi';
import { projetos } from '../data/conteudo';
import Aparecer from '../components/Aparecer';
import { Cone } from '../components/obra/Obra';

export default function Projetos() {
  return (
    <section id="projetos" className="secao secao-alternada">
      <div className="container">
        <div className="secao-titulo">
          <Cone className="icone-titulo" />
          <h2>Projetos</h2>
        </div>
        <p className="secao-subtitulo">Do mais antigo ao mais recente. Cada estaca é um projeto.</p>

        <ol className="linha-tempo">
          {projetos.map((projeto, indice) => (
            <li key={projeto.nome} className="item">
              <span className="estaca" aria-hidden="true">
                {indice}+000
              </span>
              <Aparecer className="cartao projeto">
                <img
                  src={`${import.meta.env.BASE_URL}projetos/${projeto.imagem}`}
                  alt={`Tela do projeto ${projeto.nome} em funcionamento`}
                  loading="lazy"
                />
                <div className="projeto-corpo">
                  <span className="projeto-data">{projeto.data}</span>
                  <h3>{projeto.nome}</h3>
                  <p>{projeto.descricao}</p>
                  <ul className="etiquetas pequenas">
                    {projeto.tecnologias.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {projeto.link && (
                    <div className="projeto-links">
                      <a href={projeto.link} target="_blank" rel="noreferrer">
                        <FiExternalLink /> Ver publicado
                      </a>
                    </div>
                  )}
                </div>
              </Aparecer>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

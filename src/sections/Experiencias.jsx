import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { experiencias } from '../data/conteudo';
import Aparecer from '../components/Aparecer';
import { Escavadeira } from '../components/obra/Obra';

function CartaoExperiencia({ exp }) {
  const [aberto, setAberto] = useState(false);
  const idDetalhes = `detalhes-${exp.lugar.replace(/\s+/g, '-').toLowerCase()}`;

  const iniciais = exp.lugar
    .split(' ')
    .map((palavra) => palavra[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="cartao experiencia">
      <div className="experiencia-topo">
        <div className="experiencia-logo" style={exp.fundoLogo ? { background: exp.fundoLogo, borderColor: exp.fundoLogo } : undefined}>
          {exp.logo ? (
            <img src={`${import.meta.env.BASE_URL}logos/${exp.logo}`} alt={`Logo da ${exp.lugar}`} loading="lazy" />
          ) : (
            <span aria-hidden="true">{iniciais}</span>
          )}
        </div>
        <div>
          <h3>{exp.lugar}</h3>
          <p className="experiencia-cargo">{exp.cargo}</p>
          <p className="experiencia-periodo">{exp.periodo}</p>
        </div>
      </div>

      <p className="experiencia-resumo">{exp.resumo}</p>

      <AnimatePresence initial={false}>
        {aberto && (
          <motion.ul
            id={idDetalhes}
            className="experiencia-detalhes"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {exp.detalhes.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="etiquetas pequenas">
        {exp.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <button
        className="botao-leia-mais"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        aria-controls={idDetalhes}
      >
        {aberto ? 'Mostrar menos' : 'Leia mais'}
        <FiChevronDown className={aberto ? 'seta girada' : 'seta'} aria-hidden="true" />
      </button>
    </article>
  );
}

export default function Experiencias() {
  return (
    <section id="experiencias" className="secao">
      <div className="container">
        <div className="secao-titulo">
          <h2>Experiências</h2>
        </div>
        <p className="secao-subtitulo">Do escritório de projeto ao canteiro, e do canteiro ao código.</p>

        <Escavadeira className="experiencias-escavadeira" />

        <div className="grade-experiencias">
          {experiencias.map((exp, indice) => (
            <Aparecer key={exp.lugar} atraso={indice * 0.08}>
              <CartaoExperiencia exp={exp} />
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  );
}

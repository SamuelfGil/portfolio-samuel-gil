import { useState } from 'react';
import { sobre, formacao, habilidades } from '../data/conteudo';
import Aparecer from '../components/Aparecer';
import { Capacete, Tijolos } from '../components/obra/Obra';

export default function Sobre() {
  const [idioma, setIdioma] = useState('pt');
  const texto = sobre[idioma];

  return (
    <section id="sobre" className="secao">
      <div className="container">
        <div className="secao-titulo">
          <Capacete className="icone-titulo" />
          <h2>{texto.titulo}</h2>
          <div className="seletor-idioma" role="group" aria-label="Idioma do texto">
            <button className={idioma === 'pt' ? 'ativo' : ''} onClick={() => setIdioma('pt')} aria-pressed={idioma === 'pt'}>
              PT
            </button>
            <button className={idioma === 'en' ? 'ativo' : ''} onClick={() => setIdioma('en')} aria-pressed={idioma === 'en'}>
              EN
            </button>
          </div>
        </div>

        <div className="sobre-grade">
          <Aparecer>
            <div lang={idioma === 'pt' ? 'pt-BR' : 'en'}>
              {texto.paragrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="etiquetas">
              {habilidades.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Aparecer>

          <Aparecer atraso={0.15} className="cartao">
            <h3>{texto.formacaoTitulo}</h3>
            <ul className="lista-formacao">
              {formacao.map((f) => (
                <li key={f.curso}>
                  <strong>{idioma === 'pt' ? f.curso : f.cursoEn}</strong>
                  <span>{f.lugar} · {idioma === 'pt' ? f.periodo : f.periodoEn}</span>
                </li>
              ))}
            </ul>
            <Tijolos className="sobre-tijolos" />
          </Aparecer>
        </div>
      </div>
    </section>
  );
}

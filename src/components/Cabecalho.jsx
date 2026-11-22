import { useState } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const links = [
  { href: '#sobre', texto: 'Sobre mim' },
  { href: '#projetos', texto: 'Projetos' },
  { href: '#experiencias', texto: 'Experiências' },
  { href: '#destaques', texto: 'Destaques' },
  { href: '#contato', texto: 'Contato' },
];

export default function Cabecalho({ tema, trocarTema }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <a href="#inicio" className="logo" onClick={() => setMenuAberto(false)}>
          <span className="logo-marca">SG</span> Samuel Gil
        </a>

        <nav className={menuAberto ? 'menu aberto' : 'menu'} aria-label="Seções do site">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuAberto(false)}>
              {link.texto}
            </a>
          ))}
        </nav>

        <div className="cabecalho-acoes">
          <button
            className="botao-icone"
            onClick={trocarTema}
            aria-label={tema === 'claro' ? 'Usar tema escuro' : 'Usar tema claro'}
          >
            {tema === 'claro' ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="botao-icone botao-menu"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-expanded={menuAberto}
            aria-label="Abrir menu"
          >
            {menuAberto ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Inicio from './sections/Inicio';
import Sobre from './sections/Sobre';
import Projetos from './sections/Projetos';
import Experiencias from './sections/Experiencias';
import Destaques from './sections/Destaques';
import Contato from './sections/Contato';
import Rodape from './components/Rodape';
import ProgressoObra from './components/obra/ProgressoObra';
import { FitaZebrada } from './components/obra/Obra';

function temaInicial() {
  try {
    const salvo = localStorage.getItem('tema');
    if (salvo === 'claro' || salvo === 'escuro') return salvo;
  } catch {
    // sem localStorage
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
}

export default function App() {
  const [tema, setTema] = useState(temaInicial);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    try {
      localStorage.setItem('tema', tema);
    } catch {
      // sem localStorage
    }
  }, [tema]);

  function trocarTema() {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  }

  return (
    <>
      <a className="pular-conteudo" href="#sobre">Pular para o conteúdo</a>
      <ProgressoObra />
      <Cabecalho tema={tema} trocarTema={trocarTema} />
      <main>
        <Inicio />
        <FitaZebrada />
        <Sobre />
        <Projetos />
        <FitaZebrada />
        <Experiencias />
        <Destaques />
        <FitaZebrada />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}

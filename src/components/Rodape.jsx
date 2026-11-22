import { pessoa } from '../data/conteudo';

const ANO = new Date().getFullYear();

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container">
        <p>
          © {ANO} {pessoa.nomeCompleto} · {pessoa.cidade}
        </p>
      </div>
    </footer>
  );
}

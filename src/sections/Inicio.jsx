import { motion } from 'framer-motion';
import { pessoa } from '../data/conteudo';
import { Guindaste, Cone } from '../components/obra/Obra';

export default function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="container inicio-grade">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="sobretitulo">Engenharia civil + software</p>
          <h1>
            Olá, eu sou o <span className="destaque">{pessoa.nome}</span>
          </h1>
          <p className="inicio-texto">
            Desenvolvo plugins em C# e .NET para Civil 3D, Revit, Navisworks e AutoCAD. Antes do
            código, passei pelo projeto e pela obra, e é para quem está lá que eu programo.
          </p>
          <div className="inicio-botoes">
            <a className="botao botao-principal" href="#projetos">Ver projetos</a>
            <a className="botao botao-secundario" href="#contato">Fale comigo</a>
          </div>
        </motion.div>

        <div className="inicio-ilustracao">
          <motion.img
            className="foto"
            src={`${import.meta.env.BASE_URL}img/samuel.jpg`}
            alt="Foto do Samuel Gil sorrindo"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <Guindaste className="inicio-guindaste" />
          <Cone className="inicio-cone" atraso={0.6} />
        </div>
      </div>
      <a href="#sobre" className="rolar-dica">role para acompanhar a obra ↓</a>
    </section>
  );
}

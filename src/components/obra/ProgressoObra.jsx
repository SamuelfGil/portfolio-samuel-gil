import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const TOTAL_ANDARES = 8;

export default function ProgressoObra() {
  const { scrollYProgress } = useScroll();
  const [porcentagem, setPorcentagem] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (valor) => {
    setPorcentagem(Math.round(valor * 100));
  });

  const andaresProntos = Math.round((porcentagem / 100) * TOTAL_ANDARES);

  return (
    <>
      <div className="progresso-barra" aria-hidden="true">
        <motion.div className="progresso-preenchido" style={{ scaleX: scrollYProgress }} />
      </div>

      <div className="predio" aria-hidden="true">
        <span className="predio-legenda">Obra {porcentagem}%</span>
        <div className="predio-andares">
          {Array.from({ length: TOTAL_ANDARES }, (_, i) => TOTAL_ANDARES - 1 - i).map((andar) => (
            <motion.div
              key={andar}
              className="predio-andar"
              initial={false}
              animate={{
                opacity: andar < andaresProntos ? 1 : 0.12,
                scaleY: andar < andaresProntos ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            >
              <span />
              <span />
              <span />
            </motion.div>
          ))}
        </div>
        <div className="predio-chao" />
      </div>
    </>
  );
}

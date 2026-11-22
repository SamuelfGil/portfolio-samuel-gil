import { motion } from 'framer-motion';

const surgir = { once: true, amount: 0.4 };

export function Guindaste({ className }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 220 240"
      aria-hidden="true"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={surgir}
    >
      <g stroke="var(--amarelo-escuro)" strokeWidth="3" fill="none">
        <rect x="40" y="40" width="22" height="190" fill="var(--amarelo)" />
        {[60, 90, 120, 150, 180, 210].map((y) => (
          <path key={y} d={`M40 ${y} L62 ${y - 25} M62 ${y} L40 ${y - 25}`} />
        ))}
        <rect x="10" y="30" width="200" height="12" fill="var(--amarelo)" />
        <path d="M51 30 L51 8 L10 30 M51 8 L210 30" />
      </g>
      <rect x="12" y="42" width="24" height="16" fill="var(--cinza)" />
      <rect x="62" y="44" width="18" height="16" rx="2" fill="var(--azul)" />
      <motion.g
        style={{ originX: '170px', originY: '42px' }}
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="170" y1="42" x2="170" y2="130" stroke="var(--cinza)" strokeWidth="2" />
        <path d="M164 130 h12 v6 a6 6 0 0 1 -12 0" fill="none" stroke="var(--cinza)" strokeWidth="3" />
        <rect x="145" y="142" width="50" height="22" fill="var(--laranja)" />
        <rect x="145" y="164" width="50" height="22" fill="var(--laranja-escuro)" />
      </motion.g>
      <rect x="20" y="228" width="80" height="8" fill="var(--cinza)" />
    </motion.svg>
  );
}

export function Cone({ className, atraso = 0 }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 60 70"
      aria-hidden="true"
      initial={{ y: -80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.55, duration: 0.9, delay: atraso }}
      viewport={surgir}
    >
      <path d="M30 4 L48 60 H12 Z" fill="var(--laranja)" />
      <path d="M24 22 H36 L39 32 H21 Z M19 40 H41 L44 50 H16 Z" fill="#fff" />
      <rect x="4" y="60" width="52" height="8" rx="2" fill="var(--laranja-escuro)" />
    </motion.svg>
  );
}

export function Capacete({ className }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 80 50"
      aria-hidden="true"
      initial={{ rotate: -90, scale: 0 }}
      whileInView={{ rotate: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 1 }}
      viewport={surgir}
    >
      <path d="M10 40 A30 30 0 0 1 70 40 Z" fill="var(--amarelo)" />
      <rect x="36" y="10" width="8" height="30" fill="var(--amarelo-escuro)" />
      <rect x="2" y="38" width="76" height="8" rx="4" fill="var(--amarelo-escuro)" />
    </motion.svg>
  );
}

export function Tijolos({ className }) {
  const fiadas = [0, 1, 2, 3];
  return (
    <svg className={className} viewBox="0 0 120 64" aria-hidden="true">
      {fiadas.map((fiada) => (
        <motion.g
          key={fiada}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (3 - fiada) * 0.25 + 0.1, duration: 0.4 }}
          viewport={surgir}
        >
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={i * 30 + (fiada % 2 === 0 ? 0 : -15)}
              y={fiada * 16}
              width="28"
              height="14"
              rx="1"
              fill="var(--tijolo)"
            />
          ))}
        </motion.g>
      ))}
    </svg>
  );
}

export function Escavadeira({ className }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 160 90"
      aria-hidden="true"
      initial={{ x: -220, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      viewport={surgir}
    >
      <rect x="20" y="64" width="80" height="18" rx="9" fill="var(--cinza)" />
      {[32, 52, 72, 90].map((cx) => (
        <circle key={cx} cx={cx} cy="73" r="5" fill="var(--fundo)" />
      ))}
      <rect x="24" y="36" width="70" height="26" rx="3" fill="var(--amarelo)" />
      <rect x="62" y="16" width="30" height="24" rx="3" fill="var(--amarelo)" />
      <rect x="67" y="20" width="20" height="12" fill="var(--azul-claro)" />
      <motion.g
        style={{ originX: '94px', originY: '40px' }}
        animate={{ rotate: [0, -12, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M94 40 L130 14 L150 50" stroke="var(--amarelo-escuro)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M142 48 L158 48 L152 64 L140 60 Z" fill="var(--cinza)" />
      </motion.g>
    </motion.svg>
  );
}

export function FitaZebrada() {
  return (
    <motion.div
      className="fita-zebrada"
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    />
  );
}

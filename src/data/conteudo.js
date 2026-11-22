export const pessoa = {
  nome: 'Samuel Gil',
  nomeCompleto: 'Samuel Ferreira Gil',
  cargo: 'Desenvolvimento de soluções BIM para a engenharia civil',
  email: 'samuelfgil.eng@gmail.com',
  whatsapp: '5531997659993',
  linkedin: 'https://www.linkedin.com/in/samuelgil-eng/',
  github: 'https://github.com/SamuelfGil',
  site: 'https://gilforge.com',
  cidade: 'Belo Horizonte, MG',
};

export const sobre = {
  pt: {
    titulo: 'Sobre mim',
    paragrafos: [
      'Sou estudante de Engenharia de Software na PUC Minas e venho da construção civil. Comecei no curso técnico em Edificações, passei pela Engenharia Civil e trabalhei como projetista e na obra antes de escrever a primeira linha de código.',
      'Hoje desenvolvo plugins e automações em C# e .NET para Civil 3D, Revit, Navisworks e AutoCAD. Meu foco é o BIM aplicado a projetos de infraestrutura: tirar do projetista o trabalho repetitivo e deixar a informação do modelo confiável.',
      'Tenho interesse em BIM, automação de projetos e inteligência artificial aplicada à engenharia. Meu objetivo é unir engenharia e software para criar soluções que as equipes de projeto usem no dia a dia.',
    ],
    formacaoTitulo: 'Formação',
  },
  en: {
    titulo: 'About me',
    paragrafos: [
      'I am a Software Engineering student at PUC Minas and I come from the construction industry. I started with a technical degree in Building Construction, studied Civil Engineering and worked as a designer and on construction sites before writing my first line of code.',
      'Today I build plugins and automations in C# and .NET for Civil 3D, Revit, Navisworks and AutoCAD. My focus is BIM for infrastructure projects: taking repetitive work off designers and making model information reliable.',
      'I am interested in BIM, design automation and artificial intelligence applied to engineering. My goal is to bring engineering and software together to build tools that design teams use every day.',
    ],
    formacaoTitulo: 'Education',
  },
};

export const formacao = [
  { curso: 'Engenharia de Software', cursoEn: 'Software Engineering', lugar: 'PUC Minas', periodo: '2026 – em andamento', periodoEn: '2026 – present' },
  { curso: 'Engenharia Civil (trancado)', cursoEn: 'Civil Engineering (on hold)', lugar: 'PUC Minas', periodo: '2023 – 2025', periodoEn: '2023 – 2025' },
  { curso: 'Técnico em Edificações', cursoEn: 'Technical degree in Building Construction', lugar: 'Curso técnico', periodo: '2020 – 2022', periodoEn: '2020 – 2022' },
];

export const habilidades = [
  'C#', '.NET', 'API do Civil 3D', 'API do Revit', 'Navisworks', 'AutoCAD', 'WPF',
  'BIM', 'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Excel VBA',
];

export const projetos = [
  {
    nome: 'GilForge Doc Diff',
    data: 'out/2026',
    descricao: 'Primeiro plugin da GilForge: compara revisões de projeto (R00, R01, R02...) sem abrir os DWGs e mostra o que mudou em alinhamentos, perfis, superfícies e redes.',
    tecnologias: ['C#', '.NET 8', 'API do Civil 3D', 'WPF'],
    imagem: 'gilforge-docdiff.gif',
  },
  {
    nome: 'Site e servidor da GilForge',
    data: 'out/2026',
    descricao: 'Site institucional, cadastro para receber o instalador por e-mail, licenças das ferramentas e painel interno, tudo rodando na Cloudflare.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Cloudflare Workers', 'D1 (SQL)'],
    link: 'https://gilforge.com',
    imagem: 'gilforge-site.gif',
  },
  {
    nome: 'Memorial de lotes',
    data: 'nov/2026',
    descricao: 'Ferramenta gratuita que gera os memoriais descritivos de um loteamento ou REURB: acha os confrontantes de cada lote, confere a Lei 6.766 e exporta para o Word.',
    tecnologias: ['C#', '.NET', 'API do AutoCAD', 'Open XML'],
    link: 'https://gilforge.com/ferramentas',
    imagem: 'gilforge-lotes.webp',
  },
  {
    nome: 'Terraplenagem',
    data: 'nov/2026',
    descricao: 'Do modelo do Civil 3D ao quadro de transporte do SICRO, com o diagrama de Brückner otimizado.',
    tecnologias: ['C#', '.NET', 'API do Civil 3D', 'Excel'],
    link: 'https://gilforge.com/ferramentas',
    imagem: 'gilforge-terraplenagem.webp',
  },
  {
    nome: 'Conferidor SIGEF',
    data: 'nov/2026',
    descricao: 'Confere o perímetro de um imóvel rural com as regras do INCRA (sentido, vértice inicial, precisão, códigos) e gera a planilha oficial e o memorial. Tem versão grátis no navegador.',
    tecnologias: ['C#', '.NET', 'API do Civil 3D', 'JavaScript'],
    link: 'https://gilforge.com/sigef',
    imagem: 'gilforge-sigef.gif',
  },
];

export const experiencias = [
  {
    lugar: 'GilForge',
    logo: 'gilforge.png',
    fundoLogo: '#0b2545',
    cargo: 'Fundador',
    periodo: 'out/2026 – atual',
    resumo: 'Criei a GilForge para levar ao mercado as automações que eu via faltar no dia a dia de quem projeta infraestrutura no Brasil.',
    detalhes: [
      'Plugins para Civil 3D e AutoCAD (2021 a 2026) no padrão brasileiro: SIGEF/INCRA, memoriais de loteamento e REURB, terraplenagem com SICRO, drenagem, esgoto pela NBR 9649, sinalização, quantitativos e revisão de pranchas.',
      'Todas as ferramentas são gratuitas para a comunidade AECO. A empresa se sustenta com consultoria, treinamento e plugins sob medida.',
      'Assistente de IA integrado ao Civil 3D, que lê o desenho e propõe alterações que o projetista aprova antes de aplicar.',
      'Cuido do produto de ponta a ponta: código em C#, instalador, sistema de licenças, site, servidor na Cloudflare e atendimento aos usuários.',
    ],
    tags: ['C#', '.NET', 'Civil 3D', 'AutoCAD', 'TypeScript', 'Cloudflare', 'IA'],
  },
  {
    lugar: 'SYSTRA',
    logo: 'systra.svg',
    cargo: 'Estagiário em desenvolvimento de plugins e automação',
    periodo: 'jun/2026 – atual',
    resumo: 'Desenvolvo os plugins internos de Civil 3D e AutoCAD usados pelas equipes de projetos rodoviários e ferroviários, do pedido do projetista até a ferramenta instalada na máquina da equipe.',
    detalhes: [
      'Desenvolvimento de plugins e automações em C# e .NET para Civil 3D e AutoCAD, usados pelas equipes de projetos rodoviários e ferroviários.',
      'Ferramentas para terraplenagem, modelagem BIM, documentação e produção de pranchas, com integração a planilhas Excel/VBA.',
      'Ciclo completo das ferramentas: levantamento da necessidade com os projetistas, desenvolvimento, testes, distribuição e suporte à equipe.',
      'Coautor do artigo sobre inteligência artificial e BIM apresentado no 9º Congresso A Era BIM.',
    ],
    tags: ['C#', '.NET 8', 'API do Civil 3D', 'AutoCAD', 'WPF', 'Excel VBA', 'BIM'],
  },
  {
    lugar: 'Direcional Engenharia',
    logo: 'direcional.webp',
    cargo: 'Estagiário de obras',
    periodo: '2024 – 2025',
    resumo: 'No canteiro, vi de perto como o projeto vira obra e como a informação precisa chegar certa a quem executa.',
    detalhes: [
      'Leitura e interpretação dos projetos no canteiro, apoiando as equipes de execução.',
      'Apoio ao planejamento e ao controle da obra e à organização dos cronogramas.',
      'Controle da logística de mobilização e desmobilização.',
      'Organização das informações da obra.',
    ],
    tags: ['Obra', 'Planejamento', 'Cronograma', 'Leitura de projetos'],
  },
  {
    lugar: 'Projelet',
    logo: 'projelet.png',
    fundoLogo: '#00111d',
    cargo: 'Estagiário em projetos elétricos',
    periodo: '2023 – 2024',
    resumo: 'Meu primeiro escritório de projeto: a rotina de emitir, revisar e controlar documentos numa equipe multidisciplinar.',
    detalhes: [
      'Preparação e organização dos arquivos de projeto e montagem dos formatos de prancha.',
      'Emissão de projetos de instalações elétricas.',
      'Markup das revisões e controle das alterações entre versões.',
      'Apoio à revisão de ARTs junto com a equipe.',
    ],
    tags: ['AutoCAD', 'Projeto elétrico', 'Revisões'],
  },
];

export const ferramentasGilForge = [
  'SIGEF', 'Memorial de lotes', 'Levantamento topográfico', 'Locação de eixo', 'Geometria DNIT',
  'Terraplenagem', 'Drenagem rodoviária', 'Galerias pluviais', 'Esgoto NBR 9649', 'Valas e escoramento',
  'Desapropriação', 'Conversão de coordenadas', 'Pavimento', 'Bacias', 'Restauração', 'Sinalização',
  'Via permanente', 'Cruzamentos de redes', 'Quantitativos', 'Medição', 'Painel do gestor', 'Revisão de pranchas',
];

export const destaqueAcademico = {
  titulo: 'Destaque Acadêmico',
  texto: 'Reconhecido pela PUC Minas como Destaque Acadêmico do curso de Engenharia de Software (turno da manhã, Campus Lourdes) no 1º semestre de 2026.',
  codigo: '0EDC9F05A81579C1F32C7B4A233CA695',
  verificador: 'https://web.sistemas.pucminas.br/GAD/DOC/Verificador',
  imagem: 'img/destaque-academico.jpg',
};

export const palestraEraBim = {
  titulo: 'Palestra no A Era BIM',
  tema: 'Artificial Intelligence and BIM: From Automation to Intelligent Information Management',
  texto: '9º Congresso Internacional A Era BIM, de 24 a 26 de novembro de 2026, no Centro de Convenções Frei Caneca, em São Paulo. Apresentação em 25/11, às 14h30, no Auditório B.',
  imagem: 'img/era-bim-palestra.jpg',
  link: 'https://erabim.com/programacao/#event?id=3692-inteligncia-artificial-e-bim-da-automao-gesto-inteligente-da-informao-daniel-silva-francisco-weslley-paiva-castelo-anderson-santos-de-oliveira-samuel-ferreira-gil',
  coautores: 'Com Daniel Silva, Francisco Weslley Paiva Castelo e Anderson Santos de Oliveira.',
};

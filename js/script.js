(function () {
  'use strict';

  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var contactForm = document.getElementById('contactForm');

  // EN/PT — traduções (landing)
  var i18n = {
    pt: {
      'nav.quem': 'Quem somos',
      'nav.amparo': 'Amparo',
      'nav.cuidar': 'Cuidar+',
      'nav.baile': 'Baile da Saudade',
      'nav.solucoes': 'As nossas soluções',
      'nav.solucoesHint': 'Explore as nossas soluções',
      'nav.ajuda': 'Pedir ajuda',
      'nav.impacto': 'Impacto',
      'nav.contacto': 'Contacto',
      'hero.line1': 'Transformação institucional',
      'hero.line2': 'e inovação social',
      'hero.line3': 'centrada nas pessoas',
      'hero.sub': 'Em Moçambique e na região. Uma plataforma, duas soluções.',
      'hero.btSolucoes': 'As nossas soluções',
      'hero.tag': 'Consultoria estratégica e inovação institucional',
      'hero.hook': 'Qual é o seu próximo passo?',
      'hero.title1': 'Transformação institucional e inovação social',
      'hero.title2': 'centrada nas pessoas',
      'hero.value': 'Trabalho que transforma. Impacto que perdura. Ajudamos a pensar maior, construir mais forte e ampliar oportunidades em Moçambique e na região.',
      'hero.cta': 'Agendar conversa — sem compromisso',
      'hero.trustLabel': 'Reconhecida por',
      'hero.trust': 'UNDP, SNV, Oxfam, Terre des Hommes e parceiros nacionais',
      'destaque.badge': 'Impacto',
      'destaque.title': '+500 profissionais capacitados em resposta ética à VBG',
      'destaque.link': 'Ver impacto completo →',
      'solucoes.howLabel': 'Como ajudamos',
      'solucoes.headline': 'Duas soluções. Um objectivo: impacto mensurável.',
      'solucoes.label': 'As nossas soluções',
      'solucoes.cuidar': 'Atendimento direto e cuidado para sobreviventes de VBG',
      'solucoes.amparo': 'Capacitação e assistência institucional para provedores de VBG',
      'solucoes.verCuidar': 'Conhecer Cuidar+ →',
      'solucoes.verAmparo': 'Conhecer Amparo →',
      'solucoes.baile': 'Convivência intergeracional, valorização cultural e bem-estar da 3.ª idade',
      'solucoes.verBaile': 'Conhecer Baile da Saudade →',
      'solucoes.sinergia': '<strong>Sinergia estratégica:</strong> Cuidar+ atua no terreno, Amparo prepara o terreno. Cuidar+ cuida de pessoas, Amparo cuida de instituições. Juntas, promovem uma resposta ética, coordenada e transformadora à VBG.',
      'impacto.text': 'projetos · profissionais capacitados · instituições fortalecidas',
      'impacto.ver': 'Ver impacto completo',
      'cta.text': 'Quer uma proposta alinhada ao seu contexto?',
      'cta.btn': 'Pedir proposta — resposta em breve',
      /* Homepage — copy e CRO (PT) */
      'home.heroKicker': 'Transformação institucional e impacto social',
      'home.heroH1a': 'Consultoria estratégica e inovação institucional.',
      'home.heroH1b': 'Impacto mensurável em Moçambique.',
      'home.heroLead': 'Planeamos, executamos e monitoramos soluções com rigor técnico para gerar resultados mensuráveis e sustentáveis.',
      'home.heroTrust': '',
      'home.heroCtaPrimary': 'Fale connosco',
      'home.heroCtaSecondary': '',
      'home.solSectionTitle': 'As nossas soluções',
      'home.solSectionSub': 'Três marcas. Um foco: impacto real e mensurável.',
      'home.briefLabel': 'Quem somos',
      'home.briefCta': 'Conhecer a DeCarvalho →',
      'home.solEyebrow': 'Soluções DeCarvalho',
      'home.solMeta1': '<strong>Salvaguardas sociais</strong><small>Prevenção e mitigação dos riscos sociais com base em evidências — transformamos políticas em resultados concretos no terreno.</small>',
      'home.solMeta2': '<strong>Instituições</strong><small>Reforçamos sistemas e capacidades para maior eficiência, prestação de contas e sustentabilidade.</small>',
      'home.solMeta3': '<strong>Terceira Idade</strong><small>Promovemos bem-estar, inclusão e acesso a serviços essenciais para populações idosas.</small>',
      'home.solCardCuidarDesc': 'Atendimento direto e cuidado para sobreviventes de VBG',
      'home.solCardCuidarP1': 'Escuta e acolhimento confidencial',
      'home.solCardCuidarP2': 'Encaminhamento e acompanhamento',
      'home.solCardAmparoDesc': 'Capacitação e assistência institucional para provedores de VBG',
      'home.solCardAmparoP1': 'Formação de equipas técnicas',
      'home.solCardAmparoP2': 'Protocolos e ferramentas institucionais',
      'home.solCardBaileDesc': 'Convivência intergeracional, valorização cultural e bem-estar da 3.ª idade',
      'home.solCardBaileP1': 'Eventos e encontros temáticos',
      'home.solCardBaileP2': 'Actividades de inclusão social',
      'home.solBottomCta': 'Quero ajuda para escolher a melhor solução',
      'home.partnersTitle': 'Clientes',
      'home.impactKicker': 'Impacto',
      'home.impactCard1Label': 'projetos',
      'home.impactCard1Desc': 'Com impacto mensurável em comunidades moçambicanas',
      'home.impactCard2Label': 'capacitados',
      'home.impactCard2Desc': 'Formação especializada em resposta à VBG e gestão institucional',
      'home.impactCard3Label': 'instituições',
      'home.impactCard3Desc': 'Transformação institucional com resultados sustentáveis',
      'home.consLabel': 'Experiência comprovada',
      'home.consTitle': 'Consultorias realizadas em VBG, género e desenvolvimento',
      'home.consSub': 'Consultorias em destaque com detalhe completo. Para outras consultorias e referências adicionais, solicite informação à DeCarvalho.',
      'home.consTileBtn': 'Ver detalhes',
      'home.consCta': 'Ver todas as consultorias e detalhes',
      'home.diffCard1Text': 'Estratégia, inovação social, design institucional e gestão técnica numa única plataforma integrada.',
      'home.diffCard2Text': 'Alinha práticas internacionais (IFC, OMS, UNFPA) às realidades culturais e operacionais moçambicanas.',
      'home.diffCard3Text': 'Cada projeto é desenhado para gerar transformação mensurável — institucional, comunitária e humana.',
      'home.diffCard4Text': 'Metodologias centradas nas pessoas, respeitando diversidade e promovendo participação equitativa.',
      'home.diffCta': 'Descobrir todos os diferenciais →',
      'home.areasLabel': 'Áreas de actuação',
      'home.areasTitle': 'Onde actuamos',
      'home.areasSub': 'Temas estratégicos para transformação institucional e impacto social.',
      'home.areasCard1Title': 'VBG',
      'home.areasCard1Desc': 'Resposta à violência baseada no género e proteção de sobreviventes.',
      'home.areasCard2Title': 'Género',
      'home.areasCard2Desc': 'Igualdade de género, políticas e análise de impacto.',
      'home.areasCard3Title': 'Saúde',
      'home.areasCard3Desc': 'Saúde pública, SSR e integração da resposta à VBG no sector.',
      'home.areasCard4Title': 'Capacitação',
      'home.areasCard4Desc': 'Formação de profissionais e fortalecimento institucional.',
      'home.areasCard5Title': 'Projetos',
      'home.areasCard5Desc': 'Gestão, monitoria e avaliação de projetos de desenvolvimento.',
      'home.areasCta': 'Ver todas as áreas →',
      'home.ts1Text': '"A DeCarvalho demonstrou capacidade excecional em transformação institucional. O projeto superou todas as expectativas e gerou impacto mensurável nas comunidades."',
      'home.ts1Name': 'Representante UNDP',
      'home.ts1Role': 'Organização Internacional',
      'home.ts2Text': '"A abordagem da DeCarvalho combina rigor técnico com sensibilidade cultural. Trabalhar com eles foi uma experiência transformadora para a nossa instituição."',
      'home.ts2Name': 'Diretor de Projeto',
      'home.ts2Role': 'Organização Nacional',
      'home.ts3Text': '"A formação em resposta à VBG foi excecional. A equipa da DeCarvalho tem conhecimento profundo e capacidade de adaptação às realidades locais."',
      'home.ts3Name': 'Coordenadora de Programas',
      'home.ts3Role': 'ONG Internacional',
      'home.credLabel': 'Credenciais e Reconhecimento',
      'home.cred1Title': 'Empresa moçambicana desde 2015',
      'home.cred1Desc': 'Mais de 9 anos de experiência em transformação institucional e inovação social',
      'home.cred2Title': 'Parceiros internacionais',
      'home.cred2Desc': 'Trabalhamos com organizações globais de referência em desenvolvimento',
      'home.cred3Title': 'Resultados mensuráveis',
      'home.cred3Desc': 'Impacto comprovado através de métricas e avaliações rigorosas',
      'home.cred4Title': 'Expertise certificada',
      'home.cred4Desc': 'Equipa multidisciplinar com formação especializada e experiência prática',
      'home.ctaSocialProof': 'Junte-se a <strong>+500 profissionais</strong> capacitados e <strong>+10 instituições</strong> fortalecidas',
      'home.ctaBenefit1': 'Consultoria especializada',
      'home.ctaBenefit2': 'Resultados mensuráveis',
      'home.ctaBenefit3': 'Equipa experiente',
      'home.ctaBadge1': 'Contacto direto',
      'home.ctaBadge2': 'Proposta personalizada',
      'home.ctaBadge3': 'Sem compromisso',
      'home.ctaKicker': 'Próximo passo',
      'home.ctaHelp': 'Prefere falar primeiro? <a href="contacto.html">Fale connosco</a>.',
      'home.solCtaCuidar': 'Como apoiamos sobreviventes →',
      'home.solCtaAmparo': 'Fortalecer a minha instituição →',
      'home.solCtaBaile': 'Conhecer eventos e cultura →',
      'home.diffHeadline': 'O que instituições e parceiros valorizam na DeCarvalho',
      'home.impactTitle': 'Números que refletem trabalho no terreno',
      'home.impactIntro': 'Cada projeto e formação deixa rastos mensuráveis em instituições e comunidades moçambicanas.',
      'home.floatCta': 'Fale connosco',
      'home.pathLabel': 'Guia interactivo',
      'home.pathTitle': 'O que procura?',
      'home.pathIntro': 'Seleccione uma opção para ver o caminho recomendado — pode mudar a qualquer momento.',
      'home.pathTab0': 'Instituição ou equipa',
      'home.pathTab1': 'Apoio pessoal (VBG)',
      'home.pathTab2': 'Cultura e comunidade',
      'home.pathPanel0': 'Quer <strong>formação, protocolos ou assistência técnica</strong> para a sua equipa? O <a href="amparo.html">Amparo</a> fortalece instituições e provedores de serviços. Veja o <a href="impacto.html">impacto</a> e <a href="contacto.html">peça uma proposta</a>.',
      'home.pathPanel1': 'Precisa de <strong>escuta confidencial ou encaminhamento</strong>? O <a href="cuidar.html">Cuidar+</a> é o canal dedicado a sobreviventes de VBG. Também pode <a href="contacto.html">falar connosco</a> com discrição.',
      'home.pathPanel2': 'Interessado em <strong>eventos, convívio ou bem-estar da 3ª idade</strong>? Conheça o <a href="baile.html">Baile da Saudade</a>. Para parcerias: <a href="contacto.html">contacto</a>.',
      'home.tsLabel': 'O que dizem os nossos parceiros',
      'home.tsTitle': 'Confiança construída através de resultados',
      'home.shareLabel': 'Partilhar esta página:',
      'home.copyLink': 'Copiar link',
      'areas.title': 'Áreas de actuação',
      'newsletter.title': 'Newsletter',
      'newsletter.desc': 'Fique a par das nossas novidades, recursos e notícias da DeCarvalho.',
      'newsletter.value': 'Recursos exclusivos · Casos de impacto · Oportunidades de parceria',
      'newsletter.cta': 'Para subscrever, contacte-nos por <a href="mailto:comercial@decarvalhoconsultorias.com?subject=Pedido%20de%20subscrição%20newsletter">email</a> ou na <a href="contacto.html">página de contacto</a>.',
      'footer.follow': 'Siga-nos',
      'footer.explore': 'Explorar',
      'footer.legal': 'Legal',
      'footer.contactos': 'Contactos',
      'footer.servicos': 'Serviços',
      'omnia.heroLabel': 'Soluções que transformam',
      'omnia.heroLine1': 'Consultoria em',
      'omnia.heroLine2': 'resposta à VBG e inovação institucional',
      'omnia.heroSub': 'Transformação institucional e inovação social centrada nas pessoas. Em Moçambique e na região.',
      'omnia.heroCta': 'Contacte-nos',
      'omnia.heroValue': 'Impacto mensurável · Resposta ética · Uma equipa.',
      'omnia.trustLabel': 'Reconhecida por',
      'omnia.trustPartners': 'Parceiros nacionais',
      'omnia.stat1': 'Projetos estratégicos',
      'omnia.stat1Short': 'projetos',
      'omnia.stat2': 'Profissionais capacitados em VBG',
      'omnia.stat2Short': 'capacitados',
      'omnia.stat3': 'Instituições fortalecidas',
      'omnia.stat3Short': 'instituições',
      'omnia.stat4': 'Eventos e formações',
      'omnia.aboutLabel': 'Sobre nós',
      'omnia.aboutTitle': 'Soluções que transformam desafios em resultados',
      'omnia.aboutIntro': 'A DeCarvalho é uma consultoria que vende e entrega soluções combináveis — assistência técnica, pesquisa e gestão de projectos — para fortalecer instituições e gerar resultados mensuráveis. Todas as iniciativas (Amparo, Cuidar+, Baile da Saudade e outras) são produtos da mesma equipa, prontos para contratação e escala.',
      'omnia.missao': 'Missão',
      'omnia.missaoText': 'A DeCarvalho Consultorias oferece soluções estratégicas que fortalecem instituições e negócios, transformando desafios em resultados mensuráveis e sustentáveis — com profundidade técnica em igualdade de género, inclusão e gestão organizacional.',
      'omnia.visao': 'Visão',
      'omnia.visaoText': 'Ser referência em Moçambique e na região em transformação institucional e inovação social, promovendo dignidade e sustentabilidade através de redes de impacto.',
      'omnia.valores': 'Valores',
      'omnia.valoresText': 'Ética e transparência · Inclusão e equidade · Impacto mensurável · Parcerias estratégicas · Abordagem centrada na sobrevivente.',
      'omnia.years': 'Anos de experiência',
      'omnia.projects': 'Projetos executados',
      'omnia.trained': 'Profissionais capacitados',
      'omnia.diffLabel': 'Por que escolher a DeCarvalho?',
      'omnia.diffTitle': 'Diferenciais competitivos',
      'omnia.diffSub': 'Destacamo-nos pela capacidade de operar em contextos sensíveis, com soluções que geram impacto mensurável.',
      'omnia.d1': 'Expertise multidisciplinar',
      'omnia.d1t': 'Estratégia, inovação social, design institucional e gestão técnica numa só plataforma.',
      'omnia.d2': 'Local com visão global',
      'omnia.d2t': 'Práticas internacionais (IFC, OMS, UNFPA) alinhadas às realidades locais.',
      'omnia.d3': 'Foco em impacto',
      'omnia.d3t': 'Cada produto desenhado para transformação mensurável — institucional e humana.',
      'omnia.d4': 'Abordagem ética e inclusiva',
      'omnia.d4t': 'Centrada na sobrevivente, com práticas trauma-informed e escuta ativa.',
      'omnia.diffCta': 'Tem um desafio em VBG ou capacitação institucional?',
      'omnia.diffBtn': 'Fale connosco →',
      'omnia.areasSub': 'O que oferecemos',
      'omnia.areasIntro': 'Combinamos rigor técnico e sensibilidade às pessoas para entregar soluções em contextos de desenvolvimento e proteção.',
      'omnia.area1a': 'Resposta à Violência Baseada no Género (VBG)',
      'omnia.area1b': 'Capacitação de provedores de serviços',
      'omnia.area1c': 'Protocolos e ferramentas institucionais',
      'omnia.area2a': 'Saúde materna e infantil',
      'omnia.area2b': 'Prevenção e cuidado a sobreviventes',
      'omnia.area2c': 'Sistemas de referenciação',
      'omnia.area4a': 'Estudos e avaliações',
      'omnia.area4b': 'Formação e eventos com curadoria',
      'omnia.area4c': 'Thought leadership',
      'omnia.solTitle': 'Soluções especializadas',
      'omnia.solIntro': 'Todas as soluções são da DeCarvalho: Amparo, Cuidar+ e Baile da Saudade. Um objetivo comum — impacto mensurável na resposta à VBG, fortalecimento institucional e bem-estar da 3.ª idade.',
      'omnia.trackLabel': 'Track Record',
      'omnia.trackTitle': 'Experiência comprovada',
      'omnia.trackSub': 'Intervenções em contextos sensíveis, com foco em resultados mensuráveis.',
      'omnia.t1': '+500 profissionais capacitados em resposta ética à VBG',
      'omnia.t2': '+10 instituições com protocolos e ferramentas',
      'omnia.t3': '+15 projetos estratégicos em Moçambique e na região',
      'omnia.ctaSub': 'Combinamos experiência técnica e conhecimento local para impacto sustentável em Moçambique.',
      'omnia.footerTag': 'Consultoria estratégica em Moçambique — resultados mensuráveis e soluções prontas para contratar.',
      /* Comum (todas as páginas) */
      'common.home': 'Início',
      'common.contact': 'Contacto',
      'common.contactUs': 'Fale connosco',
      'common.initiativaDeCarvalho': 'Uma iniciativa DeCarvalho',
      'common.footerTag': 'Consultoria estratégica em Moçambique — resultados mensuráveis e soluções prontas para contratar.',
      'common.footerCopy': '© 2026 DeCarvalho Consultorias & Serviços. Todos os direitos reservados.',
      'common.trustProposal': '<strong>✓</strong> Proposta personalizada',
      'common.trustNoCommitment': '<strong>✓</strong> Sem compromisso',
      /* Quem somos */
      'quem.breadcrumb': 'Quem somos',
      'quem.since': 'Consultoria moçambicana orientada a resultados',
      'quem.title': 'Quem somos',
      'quem.lead': 'A <strong>DeCarvalho Consultorias & Serviços</strong> é uma consultoria moçambicana orientada à execução de soluções estratégicas para instituições, empresas e parceiros de desenvolvimento.',
      'quem.downloadPdf': 'Descarregar apresentação da empresa (PDF)',
      'quem.missao': 'Missão',
      'quem.missaoText': 'Fortalecer instituições, transferir conhecimento e integrar práticas inovadoras para gerar impacto mensurável e valor sustentável em Moçambique e na região.',
      'quem.visao': 'Visão',
      'quem.visaoText': 'Ser referência mundial em transformação institucional e inovação social, oferecendo soluções sustentáveis e escaláveis através de redes de impacto estratégicas.',
      'quem.valores': 'Valores',
      'quem.valores1': '<strong>Integridade</strong> — Actuação transparente, responsável e alinhada a padrões internacionais.',
      'quem.valores2': '<strong>Inovação</strong> — Soluções criativas e adaptadas ao contexto local, com foco em escalabilidade.',
      'quem.valores3': '<strong>Qualidade</strong> — Compromisso com resultados concretos, auditáveis e sustentáveis.',
      'quem.valores4': '<strong>Ética</strong> — Trabalho em rede com responsabilidade e transparência.',
      'quem.valores5': '<strong>Respeito</strong> — Abordagem inclusiva, centrada nas pessoas e nas instituições.',
      'quem.valores6': '<strong>Valorização do Ser Humano</strong> — Dignidade e impacto positivo no centro de cada intervenção.',
      'quem.ofazemos': 'O que fazemos',
      'quem.ofazemosSub': 'Oferecemos soluções integradas para transformação institucional e inovação social, combinando assistência técnica, pesquisa e diagnóstico, gestão de projetos, capacitação de equipas e design institucional com foco em resultados mensuráveis e sustentáveis.',
      'quem.serv1': '<strong>Assistência técnica e implementação</strong> — Estruturamos e executamos soluções aplicáveis à realidade operacional de cada organização.',
      'quem.serv2': '<strong>Pesquisa, diagnóstico e evidência</strong> — Produzimos análises e linhas de base que melhoram decisões e reduzem risco estratégico.',
      'quem.serv3': '<strong>Gestão de projetos orientada a resultados</strong> — Planeamos, executamos e monitoramos metas, indicadores e salvaguardas com rigor técnico.',
      'quem.serv4': '<strong>Capacitação e transferência de conhecimento</strong> — Fortalecemos competências técnicas e de gestão para resultados duradouros.',
      'quem.serv5': '<strong>Design institucional e escalabilidade</strong> — Alinhamos processos, governança e modelos operacionais para crescimento sustentável.',
      'quem.areas': 'Áreas de actuação',
      'quem.areasSub': 'Na DeCarvalho Consultorias & Serviços, actuamos em setores estratégicos que impulsionam o desenvolvimento sustentável e a competitividade institucional:',
      'quem.areas1': 'Género e Direitos Humanos — soluções técnicas em VBG/EAS/AS, igualdade e proteção, integrando políticas inclusivas e mecanismos de resposta.',
      'quem.areas2': 'Saúde — apoio especializado em saúde pública, sexual e reprodutiva, com foco em acesso, qualidade e equidade.',
      'quem.areas3': 'Energias Renováveis — promoção de soluções limpas e sustentáveis para diversificação energética e resiliência ambiental.',
      'quem.areas4': 'Agricultura e Segurança Alimentar — inovação em cadeias de valor, agroprocessamento e fortalecimento da soberania alimentar.',
      'quem.areas5': 'Turismo Sustentável — desenvolvimento de modelos que equilibram crescimento económico, preservação cultural e impacto social positivo.',
      'quem.areas6': 'Gestão de Projetos e Processamento de Dados — planeamento, execução e monitoria com rigor técnico, incluindo avaliações de impacto e linhas de base.',
      'quem.areas7': 'Capacitação e Formação — programas modulares que fortalecem competências locais e institucionais para resultados duradouros.',
      'quem.kpi1': 'projetos estratégicos',
      'quem.kpi2': 'instituições apoiadas',
      'quem.kpi3': 'profissionais capacitados',
      'quem.verDiff': 'Ver diferenciais',
      /* Amparo */
      'amparo.breadcrumb': 'Amparo',
      'amparo.tagline': 'Capacitação técnica e assistência institucional para provedores de serviços de VBG',
      'amparo.whatWeDo': 'O que fazemos',
      'amparo.title': 'Fortalecer instituições para uma resposta ética e eficaz à VBG',
      'amparo.lead': 'O <strong>Amparo</strong> é a vertente da DeCarvalho voltada à capacitação e assistência técnica, formação de redes de apoio e desenvolvimento de soluções técnicas contra a violência baseada no género.',
      'amparo.missao': 'Missão',
      'amparo.missaoText': 'Fortalecer capacidades técnicas, operacionais e institucionais de provedores de serviços de VBG, através de formação, assistência técnica e desenvolvimento de soluções sustentáveis.',
      'amparo.visao': 'Visão',
      'amparo.visaoText': 'Consolidar redes de apoio qualificadas e resilientes, capazes de oferecer respostas coordenadas, éticas e eficazes à VBG em todo o território nacional.',
      'amparo.principios': 'Princípios',
      'amparo.p1': '<strong>Protecção e ética:</strong> actuamos com rigor técnico e sensibilidade humana.',
      'amparo.p2': '<strong>Sustentabilidade:</strong> promovemos soluções duradouras e adaptadas ao contexto local.',
      'amparo.p3': '<strong>Impacto colectivo:</strong> fortalecemos redes e parcerias para ampliar o alcance e a eficácia.',
      'amparo.p4': '<strong>Orientação técnica:</strong> baseamos as as as nossas acções em evidências, boas práticas e padrões internacionais.',
      'amparo.p5': '<strong>Inclusão e diversidade:</strong> respeitamos e valorizamos a pluralidade de experiências e saberes.',
      'amparo.produtos': 'Produtos e serviços',
      'amparo.produtosTitle': 'Os os nossos produtos e serviços estratégicos',
      'amparo.serv1': 'Formação Técnica e Sensibilização',
      'amparo.serv1d': 'Módulos de capacitação para provedores de serviços de VBG. Conteúdos sobre ética do cuidado, escuta ativa, confidencialidade e abordagem trauma-informed.',
      'amparo.serv2': 'Assistência Técnica Especializada',
      'amparo.serv2d': 'Apoio na implementação de protocolos éticos e operacionais. Desenvolvimento de sistemas de gestão de casos e fluxos de encaminhamento.',
      'amparo.serv3': 'Desenvolvimento de Soluções Técnicas',
      'amparo.serv3d': 'Criação de ferramentas adaptadas ao contexto local (manuais, guias, fichas técnicas). Produção de materiais educativos e campanhas de prevenção.',
      'amparo.serv4': 'Fortalecimento de Redes de Apoio',
      'amparo.serv4d': 'Articulação interinstitucional entre serviços públicos, organizações parceiras e comunidades. Consolidação de redes locais e nacionais de resposta à VBG.',
      'amparo.serv5': 'Monitorização e Aprendizagem',
      'amparo.serv5d': 'Criação de indicadores de impacto e qualidade do atendimento. Instrumentos de feedback de sobreviventes.',
      'amparo.abordagem': 'A nossa abordagem',
      'amparo.abordagem1': 'Ética e protecção',
      'amparo.abordagem2': 'Sustentabilidade e impacto colectivo',
      'amparo.abordagem3': 'Inclusão e diversidade',
      'amparo.abordagem4': 'Alinhamento com padrões internacionais (IFC, OMS, GBV AoR, UNFPA)',
      'amparo.ctaTitle': 'Quer fortalecer a sua instituição?',
      'amparo.ctaText': 'Fale connosco para formação, assistência técnica ou desenvolvimento de soluções adaptadas ao seu contexto. Respondemos assim que possível.',
      'amparo.ctaBtn': 'Solicitar contacto',
      'amparo.faqTitle': 'Perguntas Frequentes – Sessões Formativas',
      'amparo.faqQ1': 'Sobre o que falamos nas sessões formativas?',
      'amparo.faqA1': 'GEDSI, VBG, EAS/AS, ética na pesquisa, envolvimento comunitário, geração de rendimentos e literacia financeira, mecanismos de queixas sensíveis.',
      'amparo.faqQ2': 'O que são mecanismos de gestão de queixas sensíveis?',
      'amparo.faqA2': 'São canais seguros e confidenciais para que qualquer pessoa possa denunciar situações de violência ou má conduta sem medo de represálias.',
      'amparo.faqQ3': 'Quanto tempo dura uma formação?',
      'amparo.faqA3': 'Sessões rápidas de 1 a 2 dias; formações mais completas até 1 semana; cursos modulares até 2 semanas. Tudo adaptado às necessidades do grupo.',
      'amparo.faqQ4': 'As formações são presenciais ou online?',
      'amparo.faqA4': 'Ambas. Presencial com dinâmicas e trabalho em grupo; online com flexibilidade de horários e materiais de apoio.',
      'amparo.faqQ5': 'Existem pacotes fixos ou tudo é sob medida?',
      'amparo.faqA5': 'Não trabalhamos com pacotes fixos. Cada pacote é desenhado em função do perfil dos formandos e dos objectivos da instituição.',
      'amparo.faqQ6': 'Há apoio depois da formação?',
      'amparo.faqA6': 'Sim. Oferecemos coaching e mentoria pós-formação para apoiar a aplicação dos conteúdos no terreno.',
      'amparo.faqQ7': 'Há certificado?',
      'amparo.faqA7': 'Sim. No final é emitido certificado de participação.',
      'amparo.faqQ8': 'Quem pode participar?',
      'amparo.faqA8': 'Líderes comunitários, jovens, profissionais de saúde, professores, associações, equipas de organizações da sociedade civil e de serviços públicos — qualquer grupo que queira fortalecer a sua resposta à VBG.',
      /* Cuidar */
      'cuidar.breadcrumb': 'Cuidar+',
      'cuidar.tagline': 'Atendimento direto e soluções de cuidado para sobreviventes de VBG',
      'cuidar.whatWeDo': 'O que fazemos',
      'cuidar.title': 'Um canal seguro, ágil e humanizado',
      'cuidar.lead': 'O <strong>Cuidar+</strong> é uma iniciativa especializada da DeCarvalho, dedicada a oferecer um canal seguro, ágil e humanizado de escuta, acolhimento e encaminhamento para sobreviventes de VBG. Combinando rigor técnico, sensibilidade cultural e compromisso ético, posiciona-se como <strong>resposta concreta do sector privado</strong> às necessidades urgentes de protecção, dignidade e confiança em Moçambique.',
      'cuidar.missao': 'Missão',
      'cuidar.missaoText': 'Oferecer um espaço confidencial e acolhedor onde cada sobrevivente de VBG possa ser escutada com empatia, encaminhada com eficácia e acompanhada com respeito.',
      'cuidar.visao': 'Visão',
      'cuidar.visaoText': 'Ser reconhecida como referência nacional em atendimento direto e confidencial a sobreviventes de VBG.',
      'cuidar.principios': 'Princípios',
      'cuidar.p1': '<strong>Protecção e confidencialidade:</strong> garantimos privacidade e dignidade em cada atendimento.',
      'cuidar.p2': '<strong>Empatia e escuta ativa:</strong> abordagem trauma-informed centrada na sobrevivente.',
      'cuidar.p3': '<strong>Sustentabilidade:</strong> soluções duradouras e integradas às redes de apoio locais.',
      'cuidar.p4': '<strong>Orientações técnicas:</strong> baseamos as as as nossas acções em evidências e boas práticas internacionais.',
      'cuidar.p5': '<strong>Inclusão e diversidade:</strong> respeitamos e valorizamos a pluralidade de experiências.',
      'cuidar.produtos': 'Produtos estratégicos',
      'cuidar.produtosTitle': 'O que oferecemos',
      'cuidar.equipa': 'Equipa',
      'cuidar.equipaTitle': 'Profissionais multidisciplinares com compromisso ético e técnico',
      'cuidar.equipaLead': 'A equipa do Cuidar+ é composta por profissionais com sólida experiência em atendimento direto, protecção social, saúde mental e resposta a VBG.',
      'cuidar.role1': '<strong>Coordenadora de Atendimento e Protecção</strong> — Psicologia Clínica e Direitos Humanos; 10+ anos em atendimento psicossocial a sobreviventes de VBG; especialização em abordagem trauma-informed.',
      'cuidar.role2': '<strong>Gestor(a) de Casos e Encaminhamentos</strong> — Serviço Social e Gestão de Projetos; implementação de sistemas de gestão de casos com protocolos éticos; articulação com redes locais de apoio.',
      'cuidar.role3': '<strong>Especialista em Formação e Sensibilização</strong> — Educação Comunitária e Estudos de Género; desenvolvimento de módulos de capacitação para atendimento sensível; campanhas de prevenção.',
      'cuidar.role4': '<strong>Analista de Monitorização e Aprendizagem</strong> — Estatística Social e Avaliação de Programas; indicadores de impacto e ferramentas de feedback; relatórios técnicos para doadores e parceiros.',
      'cuidar.role5': '<strong>Especialista em VBG e Justiça de Género</strong> — Estudos de Género, Sociologia e Saúde Pública; políticas e protocolos de resposta a VBG; abordagem centrada na sobrevivente.',
      'cuidar.role6': '<strong>Designer de Comunicação Humanizada</strong> — Design Gráfico e Comunicação para Mudança Social; materiais visuais acessíveis e culturalmente sensíveis.',
      'cuidar.abordagem': 'A nossa abordagem',
      'cuidar.abordagem1': 'Protecção, confidencialidade e dignidade',
      'cuidar.abordagem2': 'Escuta ativa e abordagem trauma-informed',
      'cuidar.abordagem3': 'Integração com redes de apoio locais',
      'cuidar.abordagem4': 'Alinhamento com padrões internacionais (OMS, GBV AoR, UNFPA)',
      'cuidar.ctaTitle': 'Quer saber mais ou estabelecer parceria?',
      'cuidar.ctaText': 'Entre em contacto para acolhimento, encaminhamento ou colaboração com o Cuidar+. Respondemos assim que possível.',
      'cuidar.intro1': 'No <strong>Cuidar+</strong> acreditamos que ninguém deve enfrentar a violência sozinho. Este espaço foi criado para oferecer <strong>apoio, informação e caminhos seguros</strong> para quem sofre ou testemunha situações de violência.',
      'cuidar.intro2': 'Aqui encontra <strong>linhas de denúncia gratuitas</strong>, orientação sobre <strong>confidencialidade e anonimato</strong>, e indicações de onde procurar ajuda — na <strong>Polícia</strong>, nos <strong>Serviços de Acção Social</strong>, na <strong>Procuradoria</strong>, ou no <strong>centro de saúde ou hospital mais próximo</strong>.',
      'cuidar.intro3': 'Denunciar é um acto de coragem e de protecção. Estamos aqui para escutar, apoiar e encaminhar. O seu bem-estar e a sua segurança são a nossa prioridade.',
      'cuidar.equipaEstrutura': "<strong>Estrutura:</strong> Direcção Geral (Coordenador — D'bora de Carvalho); Oficiais Provinciais; Facilitadores comunitários; Comunicação e envolvimento comunitário; Monitoria, Avaliação e Aprendizagem.",
      'cuidar.contactTitle': 'Contacto dedicado e linhas de apoio',
      'cuidar.contactLead': 'Para pedir apoio, encaminhamento ou informações em total confidencialidade:',
      'cuidar.contactEmailLabel': 'Email Cuidar+:',
      'cuidar.contactHorarioLabel': 'Horário de atendimento:',
      'cuidar.contactHorario': '<strong>Horário de atendimento:</strong> 08:30 – 17:30',
      'cuidar.contactLinhaCriancaLabel': 'Linha Fala Criança:',
      'cuidar.contactLinhaVerdeLabel': 'Linha Verde:',
      'cuidar.contactWhatsAppLabel': 'WhatsApp:',
      'cuidar.faqTitle': 'Perguntas Frequentes – Cuidar+',
      'cuidar.faqQ1': 'Onde posso pedir ajuda se eu ou alguém próximo sofre violência?',
      'cuidar.faqA1': 'Pode ligar para a <strong>Linha Verde 1458</strong> ou para a <strong>Linha Fala Criança 116</strong> (se for menor de idade). Também pode procurar apoio directamente na Polícia, nos Serviços de Acção Social, na Procuradoria, no centro de saúde ou hospital mais próximo.',
      'cuidar.faqQ2': 'A minha denúncia será mantida em segredo?',
      'cuidar.faqA2': 'Sim. Todas as denúncias são tratadas com <strong>confidencialidade</strong>. O objectivo é proteger a vítima e garantir que receba apoio sem medo de exposição.',
      'cuidar.faqQ3': 'Posso denunciar sem dizer o meu nome?',
      'cuidar.faqA3': 'Sim. É possível fazer denúncias de forma <strong>anónima</strong>. Mesmo sem se identificar, a sua voz ajuda a proteger quem precisa.',
      'cuidar.faqQ4': 'O que acontece depois de eu denunciar?',
      'cuidar.faqA4': 'A denúncia é encaminhada para os serviços competentes. Pode haver investigação, medidas de protecção imediata, atendimento médico e acompanhamento psicossocial. O mais importante é que alguém vai cuidar do caso.',
      'cuidar.faqQ5': 'O que devo fazer se alguém próximo de mim sofre violência?',
      'cuidar.faqA5': 'Escute com carinho e sem julgamento. Incentive a pessoa a procurar ajuda através das linhas de denúncia ou nos serviços de saúde ou acção social. Se houver perigo imediato, contacte a polícia. Apoie para que não se sinta sozinha.',
      'cuidar.faqQ6': 'Que tipos de violência podem ser denunciados?',
      'cuidar.faqA6': 'Violência física, abuso sexual, exploração e abuso sexual, assédio sexual, violência patrimonial, violência psicológica.',
      'cuidar.faqQ7': 'E se eu tiver medo de represálias?',
      'cuidar.faqA7': 'Existem medidas de protecção que podem ser aplicadas, como afastamento do agressor, acompanhamento policial ou encaminhamento para casas de abrigo. O mais importante é garantir a sua segurança.',
      'cuidar.serv1': 'Canal de Escuta e Acolhimento',
      'cuidar.serv1d': 'Atendimento multicanal (presencial, telefónico, digital). Protocolos de escuta ativa e abordagem trauma-informed.',
      'cuidar.serv2': 'Sistema de Gestão de Casos',
      'cuidar.serv2d': 'Plataforma segura para registo e acompanhamento. Classificação por tipo de violência e perfil da sobrevivente.',
      'cuidar.serv3': 'Kit de Primeira Resposta',
      'cuidar.serv3d': 'Guias de atendimento sensível. Materiais informativos para sobreviventes. Cartões de encaminhamento.',
      'cuidar.serv4': 'Módulos de Formação e Capacitação',
      'cuidar.serv4d': 'Capacitação de equipas. Conteúdos sobre ética do cuidado, confidencialidade, escuta ativa.',
      'cuidar.serv5': 'Campanhas de Comunicação',
      'cuidar.serv5d': 'Materiais visuais culturalmente ressonantes. Estratégias de envolvimento comunitário.',
      'cuidar.serv6': 'Ferramentas de Monitorização e Aprendizagem',
      'cuidar.serv6d': 'Indicadores de impacto e qualidade. Instrumentos de feedback. Relatórios técnicos.',
      'cuidar.serv7': 'Manual Operacional Cuidar+',
      'cuidar.serv7d': 'Directrizes éticas e técnicas. Procedimentos padronizados para atendimento e protecção.',
      /* Baile da Saudade */
      'baile.breadcrumb': 'Baile da Saudade',
      'baile.tagline': 'Convivência intergeracional, valorização cultural e bem-estar da 3.ª idade',
      'baile.whatWeDo': 'O que fazemos',
      'baile.title': 'Celebrar a vida em todas as idades',
      'baile.lead': 'O <strong>Baile da Saudade</strong> é uma iniciativa da DeCarvalho dedicada à convivência intergeracional, à valorização cultural e ao bem-estar da terceira idade. Promovemos eventos temáticos, formações, actividades lúdicas e excursões que aproximam gerações e fortalecem o sentido de comunidade.',
      'baile.missao': 'Missão',
      'baile.missaoText': 'Promover qualidade de vida e conexão social entre a população sénior, valorizando saberes culturais e criando pontes entre gerações.',
      'baile.visao': 'Visão',
      'baile.visaoText': 'Ser referência em Moçambique em iniciativas que celebram e dignificam a terceira idade, através da música, dança e partilha intergeracional.',
      'baile.produtos': 'O que oferecemos',
      'baile.produtosTitle': 'Eventos, formações e actividades',
      'baile.serv1': 'Eventos temáticos',
      'baile.serv1d': 'Bailes, saraus e encontros culturais que celebram a música, a dança e as tradições moçambicanas.',
      'baile.serv2': 'Formações e workshops',
      'baile.serv2d': 'Sessões de bem-estar, memória, saúde e actividades criativas adaptadas à terceira idade.',
      'baile.serv3': 'Actividades lúdicas',
      'baile.serv3d': 'Jogos, tertúlias, leitura e momentos de convívio em grupo.',
      'baile.serv4': 'Excursões e passeios',
      'baile.serv4d': 'Visitas guiadas a locais de interesse cultural e natural, promovendo mobilidade e descoberta.',
      'baile.ctaTitle': 'Quer saber mais ou organizar um evento?',
      'baile.ctaText': 'Entre em contacto para parcerias, eventos ou actividades do Baile da Saudade. Respondemos assim que possível.',
      'baile.abordagem': 'O que nos inspira',
      'baile.abordagem1': 'Convivência intergeracional',
      'baile.abordagem2': 'Valorização cultural e tradições',
      'baile.abordagem3': 'Bem-estar e qualidade de vida',
      'baile.abordagem4': 'Comunidade e pertença',
      /* Impacto */
      'impacto.breadcrumb': 'Impacto',
      'impacto.title': 'Impacto que se mede no terreno',
      'impacto.sub': 'Consultorias entregues com entregáveis claros e efeito institucional verificável em Moçambique e na região.',
      'impacto.stat1': 'projetos estratégicos em Moçambique e na região',
      'impacto.stat2': 'profissionais capacitados em resposta ética à VBG',
      'impacto.stat3': 'instituições fortalecidas com protocolos e ferramentas',
      'impacto.stat4': 'eventos e formações com curadoria visual e cultural',
      'impacto.note': 'Trabalhamos com parceiros nacionais e internacionais para entregar soluções concretas: protocolos implementados, equipas treinadas e processos institucionais fortalecidos.',
      'impacto.consultoriasLabel': 'Experiência comprovada',
      'impacto.consultoriasTitle': 'Consultorias realizadas',
      'impacto.consultoriasSub': 'Apresentamos aqui as consultorias em destaque com detalhe completo (contexto, actividades, resultados e impacto). Outras consultorias do portefólio podem ser partilhadas sob solicitação à DeCarvalho.',
      'impacto.consultoriasNota': 'Para informação adicional sobre outras consultorias realizadas, contacte a DeCarvalho.',
      'impacto.outrasTitle': 'Outras consultorias do portefólio',
      'impacto.loading': 'A carregar consultorias...',
      'impacto.cons1': 'Resposta à VBG no sector de saúde (UNDP/MISAU): plano nacional, monitoria e análise de custos — base para decisão de investimento e implementação coordenada.',
      'impacto.cons2': 'Programa Brilho (SNV): estratégia e manual de género e inclusão — maior equidade na cadeia de valor de energia limpa e capacitação de actores.',
      'impacto.cons3': 'Protecção de ecossistemas florestais e mangais, Inhambane (Terre des Hommes/Malhalhe): avaliação de impacto e viabilidade da fase II — decisão informada para continuidade do programa.',
      'impacto.cons4': 'PESOD em Massinga (Malhalhe): análise com perspectiva de género — evidências para orçamentos e serviços mais inclusivos ao nível distrital.',
      'impacto.cons5': 'Benefícios por sexo em Massinga (Educação, Saúde, Extensão agrícola): análise de incidência — priorização de políticas com maior impacto em mulheres e crianças.',
      'impacto.cons6': 'Revisão da política nacional de terras (Oxfam/Fórum Mulher): análise e policy briefs de género — contributo técnico para o debate legislativo.',
      /* Diferenciais */
      'diff.breadcrumb': 'Diferenciais',
      'diff.title': 'Por que escolher a DeCarvalho?',
      'diff.sub': 'Diferenciais que transformam estratégia em execução com resultados mensuráveis e auditáveis.',
      'diff.d1': 'Expertise multidisciplinar',
      'diff.d1t': 'Integramos estratégia, inovação social, design institucional e gestão técnica numa plataforma única, com soluções completas e escaláveis.',
      'diff.d2': 'Local com visão global',
      'diff.d2t': 'Alinhamos padrões internacionais (IFC, Banco Mundial, GAC, OMS, IRMA) às realidades culturais e operacionais moçambicanas.',
      'diff.d3': 'Foco em impacto',
      'diff.d3t': 'Cada solução é concebida para gerar transformação mensurável — institucional, comunitária e humana — com resultados auditáveis e sustentáveis.',
      'diff.d4': 'Abordagem ética e inclusiva',
      'diff.d4t': 'Aplicamos metodologias centradas nas pessoas, promovendo diversidade, participação equitativa e conformidade ética em todos os níveis de intervenção.',
      'diff.d5': 'Execução aplicada',
      'diff.d5t': 'Traduzimos estratégia em planos operacionais, rotinas de implementação e entregáveis acionáveis para cada contexto.',
      'diff.d6': 'Governança e conformidade',
      'diff.d6t': 'Fortalecemos controlo, transparência e prestação de contas com práticas alinhadas a requisitos técnicos e regulatórios.',
      'diff.cta': 'Pronto para transformar a sua organização?',
      /* Contacto */
      'contact.breadcrumb': 'Contacto',
      'contact.title': 'Fale connosco',
      'contact.lead': 'Estamos prontos para responder com soluções práticas para a sua organização. Use os contactos abaixo para falar com a nossa equipa comercial.',
      'contact.name': 'Nome *',
      'contact.namePlaceholder': 'Seu nome',
      'contact.email': 'Email *',
      'contact.emailPlaceholder': 'seu@email.com',
      'contact.phone': 'Telefone',
      'contact.phonePlaceholder': '+258 ...',
      'contact.message': 'Mensagem *',
      'contact.messagePlaceholder': 'Como podemos ajudar?',
      'contact.submit': 'Enviar mensagem',
      'contact.submitLabel': 'Enviar mensagem',
      'contact.formChannelMsg': 'Para enviar a sua mensagem, use email (comercial@decarvalhoconsultorias.com) ou WhatsApp (+258 840 371 527).',
      'contact.trustBadge1': '✓ Resposta assim que possível',
      'contact.trustBadge2': '🔒 Dados tratados com confidencialidade',
      'contact.privacyText': 'Concordo com a <a href="privacidade.html" title="Política de privacidade">política de privacidade</a> e que os meus dados sejam usados para responder ao meu pedido.',
      'contact.location': 'Localização',
      'contact.locationVal': 'Cidade da Matola, Sikwama, nº 1016, Moçambique',
      'contact.phoneLabel': 'Telefone',
      'contact.whatsappLabel': 'WhatsApp',
      'contact.emailLabel': 'Email',
      'ui.backToTop': 'Voltar ao topo',
      'impact.filterLabel': 'Filtrar consultorias',
      'impact.filterPlaceholder': 'Ex.: UNDP, género, saúde...',
      'impact.filterClear': 'Limpar',
      'impact.filterCount': '{count} resultado(s)',
      'impact.filterEmpty': 'Sem resultados para este filtro.',
      'impact.viewGrid': 'Grade',
      'impact.viewList': 'Lista',
      'impact.viewPortfolio': 'Outras consultorias',
      'ui.readingProgress': 'Progresso de leitura',
      /* FAQ */
      'faq.label': 'Perguntas frequentes',
      'faq.title': 'Dúvidas comuns',
      'faq.intro': 'Encontre respostas rápidas às perguntas mais frequentes sobre os nossos serviços e como trabalhamos.',
      'faq.q1': 'Como solicito uma proposta ou formação?',
      'faq.a1': 'Contacte-nos por <a href="mailto:comercial@decarvalhoconsultorias.com">email</a>, <a href="https://wa.me/258840371527">WhatsApp</a> ou na <a href="contacto.html">página de contacto</a>. Descreva brevemente a sua necessidade (formação, assistência técnica, projeto) e responderemos com uma proposta personalizada. Sem compromisso.',
      'faq.q2': 'Em que zonas geográficas actuam?',
      'faq.a2': 'Actuamos em Moçambique e na região da SADC. A nossa sede fica na Cidade da Matola. Realizamos formações e projetos em todo o território nacional e, quando solicitado, em países vizinhos.',
      'faq.q3': 'Qual a diferença entre Amparo e Cuidar+?',
      'faq.a3': '<strong>Amparo</strong> dedica-se à capacitação e assistência institucional — forma equipas, desenvolve protocolos e fortalece provedores de serviços de VBG. <strong>Cuidar+</strong> oferece atendimento direto e confidencial a sobreviventes de VBG (escuta, acolhimento, encaminhamento). Juntas, cobrem toda a cadeia de resposta à VBG.',
      'faq.q4': 'O atendimento do Cuidar+ é confidencial?',
      'faq.a4': 'Sim. O Cuidar+ garante total confidencialidade e dignidade. O atendimento segue abordagem trauma-informed e protocolos éticos alinhados a padrões internacionais (OMS, GBV AoR).',
      'faq.q5': 'Que tipo de parceiros trabalham convosco?',
      'faq.a5': 'Trabalhamos com agências da ONU (UNDP, UNFPA, UNICEF), organizações da sociedade civil internacionais e nacionais, governo, redes comunitárias e empresas. Temos experiência em projetos financiados por doadores e em parcerias público-privadas.',
      'faq.cta': 'Não encontrou a resposta? <a href="contacto.html">Contacte-nos</a>.'
    },
    en: {
      'nav.quem': 'About us',
      'nav.amparo': 'Amparo',
      'nav.cuidar': 'Cuidar+',
      'nav.baile': 'Baile da Saudade',
      'nav.solucoes': 'Our solutions',
      'nav.solucoesHint': 'Explore our solutions',
      'nav.ajuda': 'Ask for help',
      'nav.impacto': 'Impact',
      'nav.contacto': 'Contact',
      'hero.line1': 'Institutional transformation',
      'hero.line2': 'and people-centred',
      'hero.line3': 'social innovation',
      'hero.sub': 'In Mozambique and the region. One platform, two solutions.',
      'hero.btSolucoes': 'Our solutions',
      'hero.tag': 'Strategic consulting and institutional innovation',
      'hero.hook': "What's your next move?",
      'hero.title1': 'Institutional transformation and social innovation',
      'hero.title2': 'people-centred',
      'hero.value': 'Work that transforms. Impact that lasts. We help you think bigger, build stronger, and expand opportunity in Mozambique and the region.',
      'hero.cta': 'Schedule a conversation — no commitment',
      'hero.trustLabel': 'Recognised by',
      'hero.trust': 'UNDP, SNV, Oxfam, Terre des Hommes and national partners',
      'destaque.badge': 'Impact',
      'destaque.title': '+500 professionals trained in ethical GBV response',
      'destaque.link': 'See full impact →',
      'solucoes.howLabel': 'How we help',
      'solucoes.headline': 'Two solutions. One goal: measurable impact.',
      'solucoes.label': 'Our solutions',
      'solucoes.cuidar': 'Direct care and support for GBV survivors',
      'solucoes.amparo': 'Capacity building and institutional support for GBV service providers',
      'solucoes.verCuidar': 'Discover Cuidar+ →',
      'solucoes.verAmparo': 'Discover Amparo →',
      'solucoes.baile': 'Intergenerational connection, cultural valorisation and senior wellbeing',
      'solucoes.verBaile': 'Discover Baile da Saudade →',
      'solucoes.sinergia': '<strong>Strategic synergy:</strong> Cuidar+ works on the ground, Amparo prepares the ground. Cuidar+ cares for people, Amparo cares for institutions. Together, they promote an ethical, coordinated and transformative response to GBV.',
      'impacto.text': 'projects · professionals trained · institutions strengthened',
      'impacto.ver': 'See full impact',
      'cta.text': 'Want a proposal tailored to your context?',
      'cta.btn': 'Request a proposal — we respond soon',
      /* Homepage — copy and CRO (EN) */
      'home.heroKicker': 'Institutional transformation and social impact',
      'home.heroH1a': 'Strategic consulting and institutional innovation.',
      'home.heroH1b': 'Measurable impact in Mozambique.',
      'home.heroLead': 'We plan, deliver and monitor solutions with technical rigour to generate measurable and sustainable results.',
      'home.heroTrust': '',
      'home.heroCtaPrimary': 'Contact us',
      'home.heroCtaSecondary': '',
      'home.solSectionTitle': 'Our solutions',
      'home.solSectionSub': 'Three brands. One focus: real and measurable impact.',
      'home.briefLabel': 'About us',
      'home.briefCta': 'Discover DeCarvalho →',
      'home.solEyebrow': 'DeCarvalho solutions',
      'home.solMeta1': '<strong>Social safeguards</strong><small>Evidence-based prevention and mitigation of social risks — we turn policies into concrete field results.</small>',
      'home.solMeta2': '<strong>Institutions</strong><small>We strengthen systems and capabilities for greater efficiency, accountability and sustainability.</small>',
      'home.solMeta3': '<strong>Older adults</strong><small>We promote wellbeing, inclusion and access to essential services for ageing populations.</small>',
      'home.solCardCuidarDesc': 'Direct care and support for GBV survivors',
      'home.solCardCuidarP1': 'Confidential listening and reception',
      'home.solCardCuidarP2': 'Referral and follow-up',
      'home.solCardAmparoDesc': 'Capacity building and institutional support for GBV service providers',
      'home.solCardAmparoP1': 'Training for technical teams',
      'home.solCardAmparoP2': 'Protocols and institutional tools',
      'home.solCardBaileDesc': 'Intergenerational connection, cultural valorisation and senior wellbeing',
      'home.solCardBaileP1': 'Themed events and gatherings',
      'home.solCardBaileP2': 'Social inclusion activities',
      'home.solBottomCta': 'Help me choose the best solution',
      'home.partnersTitle': 'Clients',
      'home.impactKicker': 'Impact',
      'home.impactCard1Label': 'projects',
      'home.impactCard1Desc': 'With measurable impact in Mozambican communities',
      'home.impactCard2Label': 'trained',
      'home.impactCard2Desc': 'Specialised training in GBV response and institutional management',
      'home.impactCard3Label': 'institutions',
      'home.impactCard3Desc': 'Institutional transformation with sustainable results',
      'home.consLabel': 'Proven experience',
      'home.consTitle': 'Consultancies delivered in GBV, gender and development',
      'home.consSub': 'Featured consultancies with full details are shown here. For additional consultancy references, request information from DeCarvalho.',
      'home.consTileBtn': 'View details',
      'home.consCta': 'See all consultancies and details',
      'home.diffCard1Text': 'Strategy, social innovation, institutional design and technical management in one integrated platform.',
      'home.diffCard2Text': 'Aligns international practices (IFC, WHO, UNFPA) with Mozambican cultural and operational realities.',
      'home.diffCard3Text': 'Every project is designed to generate measurable transformation — institutional, community and human.',
      'home.diffCard4Text': 'People-centred methodologies that respect diversity and promote equitable participation.',
      'home.diffCta': 'Discover all advantages →',
      'home.areasLabel': 'Areas of expertise',
      'home.areasTitle': 'Where we work',
      'home.areasSub': 'Strategic themes for institutional transformation and social impact.',
      'home.areasCard1Title': 'GBV',
      'home.areasCard1Desc': 'Response to gender-based violence and survivor protection.',
      'home.areasCard2Title': 'Gender',
      'home.areasCard2Desc': 'Gender equality, policy and impact analysis.',
      'home.areasCard3Title': 'Health',
      'home.areasCard3Desc': 'Public health, SRH and integration of GBV response in the sector.',
      'home.areasCard4Title': 'Capacity building',
      'home.areasCard4Desc': 'Professional training and institutional strengthening.',
      'home.areasCard5Title': 'Projects',
      'home.areasCard5Desc': 'Management, monitoring and evaluation of development projects.',
      'home.areasCta': 'See all areas →',
      'home.ts1Text': '"DeCarvalho showed exceptional institutional transformation capacity. The project exceeded expectations and generated measurable impact in communities."',
      'home.ts1Name': 'UNDP Representative',
      'home.ts1Role': 'International organisation',
      'home.ts2Text': '"DeCarvalho combines technical rigour with cultural sensitivity. Working with them was a transformative experience for our institution."',
      'home.ts2Name': 'Project Director',
      'home.ts2Role': 'National organisation',
      'home.ts3Text': '"The GBV response training was exceptional. DeCarvalho has deep expertise and strong adaptation to local realities."',
      'home.ts3Name': 'Programme Coordinator',
      'home.ts3Role': 'International NGO',
      'home.credLabel': 'Credentials and recognition',
      'home.cred1Title': 'Mozambican company since 2015',
      'home.cred1Desc': 'Over 9 years of experience in institutional transformation and social innovation',
      'home.cred2Title': 'International partners',
      'home.cred2Desc': 'We work with leading global development organisations',
      'home.cred3Title': 'Measurable results',
      'home.cred3Desc': 'Proven impact through rigorous metrics and evaluations',
      'home.cred4Title': 'Certified expertise',
      'home.cred4Desc': 'Multidisciplinary team with specialised training and practical experience',
      'home.ctaSocialProof': 'Join <strong>+500 professionals</strong> trained and <strong>+10 institutions</strong> strengthened',
      'home.ctaBenefit1': 'Specialised consulting',
      'home.ctaBenefit2': 'Measurable results',
      'home.ctaBenefit3': 'Experienced team',
      'home.ctaBadge1': 'Direct contact',
      'home.ctaBadge2': 'Tailored proposal',
      'home.ctaBadge3': 'No commitment',
      'home.ctaKicker': 'Next step',
      'home.ctaHelp': 'Prefer to talk first? <a href="contacto.html">Talk to us</a>.',
      'home.solCtaCuidar': 'How we support survivors →',
      'home.solCtaAmparo': 'Strengthen my institution →',
      'home.solCtaBaile': 'See events and culture →',
      'home.diffHeadline': 'What institutions and partners value in DeCarvalho',
      'home.impactTitle': 'Numbers that reflect work on the ground',
      'home.impactIntro': 'Every project and training leaves measurable traces in institutions and Mozambican communities.',
      'home.floatCta': 'Talk to us',
      'home.pathLabel': 'Interactive guide',
      'home.pathTitle': 'What are you looking for?',
      'home.pathIntro': 'Pick an option to see our suggested next step — you can switch anytime.',
      'home.pathTab0': 'Institution or team',
      'home.pathTab1': 'Personal support (GBV)',
      'home.pathTab2': 'Culture & community',
      'home.pathPanel0': 'Need <strong>training, protocols or technical assistance</strong> for your team? <a href="amparo.html">Amparo</a> strengthens institutions and service providers. See our <a href="impacto.html">impact</a> and <a href="contacto.html">request a proposal</a>.',
      'home.pathPanel1': 'Need <strong>confidential listening or referral</strong>? <a href="cuidar.html">Cuidar+</a> is dedicated to GBV survivors. You can also <a href="contacto.html">contact us</a> discreetly.',
      'home.pathPanel2': 'Interested in <strong>events, community life or senior wellbeing</strong>? Explore <a href="baile.html">Baile da Saudade</a>. For partnerships: <a href="contacto.html">contact</a>.',
      'home.tsLabel': 'What our partners say',
      'home.tsTitle': 'Trust built through results',
      'home.shareLabel': 'Share this page:',
      'home.copyLink': 'Copy link',
      'areas.title': 'Areas of expertise',
      'newsletter.title': 'Newsletter',
      'newsletter.desc': 'Stay up to date with our latest stories, resources and news from DeCarvalho.',
      'newsletter.value': 'Exclusive resources · Impact cases · Partnership opportunities',
      'newsletter.cta': 'To subscribe, contact us by <a href="mailto:comercial@decarvalhoconsultorias.com?subject=Newsletter%20subscription">email</a> or on the <a href="contacto.html">contact page</a>.',
      'footer.follow': 'Follow us',
      'footer.explore': 'Explore',
      'footer.legal': 'Legal',
      'footer.contactos': 'Contact',
      'footer.servicos': 'Services',
      'omnia.heroLabel': 'Solutions that transform',
      'omnia.heroLine1': 'Consulting in',
      'omnia.heroLine2': 'GBV response and institutional innovation',
      'omnia.heroSub': 'Institutional transformation and people-centred social innovation. In Mozambique and the region.',
      'omnia.heroCta': 'Contact us',
      'omnia.heroValue': 'Measurable impact · Ethical response · One team.',
      'omnia.trustLabel': 'Recognised by',
      'omnia.trustPartners': 'National partners',
      'omnia.stat1': 'Strategic projects',
      'omnia.stat1Short': 'projects',
      'omnia.stat2': 'Professionals trained in GBV',
      'omnia.stat2Short': 'trained',
      'omnia.stat3': 'Institutions strengthened',
      'omnia.stat3Short': 'institutions',
      'omnia.stat4': 'Events and training',
      'omnia.aboutLabel': 'About us',
      'omnia.aboutTitle': 'Solutions that turn challenges into results',
      'omnia.aboutIntro': 'DeCarvalho is a consultancy that sells and delivers combinable solutions — technical assistance, research and project management — to strengthen institutions and produce measurable results. All initiatives (Amparo, Cuidar+, Baile da Saudade and more) are products from one team, ready to contract and scale.',
      'omnia.missao': 'Mission',
      'omnia.missaoText': 'DeCarvalho Consultorias delivers strategic solutions that strengthen institutions and businesses, turning challenges into measurable and sustainable results — with deep expertise in gender equality, inclusion and organisational management.',
      'omnia.visao': 'Vision',
      'omnia.visaoText': 'To be the reference in Mozambique and the region in institutional transformation and social innovation, promoting dignity and sustainability through impact networks.',
      'omnia.valores': 'Values',
      'omnia.valoresText': 'Ethics and transparency · Inclusion and equity · Measurable impact · Strategic partnerships · Survivor-centred approach.',
      'omnia.years': 'Years of experience',
      'omnia.projects': 'Projects delivered',
      'omnia.trained': 'Professionals trained',
      'omnia.diffLabel': 'Why choose DeCarvalho?',
      'omnia.diffTitle': 'Competitive advantages',
      'omnia.diffSub': 'We stand out for our ability to operate in sensitive contexts, with solutions that deliver measurable impact.',
      'omnia.d1': 'Multidisciplinary expertise',
      'omnia.d1t': 'Strategy, social innovation, institutional design and technical management in one platform.',
      'omnia.d2': 'Local with global vision',
      'omnia.d2t': 'International practices (IFC, WHO, UNFPA) aligned with local realities.',
      'omnia.d3': 'Focus on impact',
      'omnia.d3t': 'Every product designed for measurable transformation — institutional and human.',
      'omnia.d4': 'Ethical and inclusive approach',
      'omnia.d4t': 'Survivor-centred, with trauma-informed practices and active listening.',
      'omnia.diffCta': 'Have a challenge in GBV or institutional capacity building?',
      'omnia.diffBtn': 'Get in touch →',
      'omnia.areasSub': 'What we offer',
      'omnia.areasIntro': 'We combine technical rigour and sensitivity to people to deliver solutions in development and protection contexts.',
      'omnia.area1a': 'Response to Gender-Based Violence (GBV)',
      'omnia.area1b': 'Capacity building for service providers',
      'omnia.area1c': 'Protocols and institutional tools',
      'omnia.area2a': 'Maternal and child health',
      'omnia.area2b': 'Prevention and care for survivors',
      'omnia.area2c': 'Referral systems',
      'omnia.area4a': 'Studies and assessments',
      'omnia.area4b': 'Curated training and events',
      'omnia.area4c': 'Thought leadership',
      'omnia.solTitle': 'Specialised solutions',
      'omnia.solIntro': 'All solutions are by DeCarvalho: Amparo, Cuidar+ and Baile da Saudade. One common goal — measurable impact in GBV response, institutional strengthening and senior wellbeing.',
      'omnia.trackLabel': 'Track Record',
      'omnia.trackTitle': 'Proven experience',
      'omnia.trackSub': 'Interventions in sensitive contexts, with a focus on measurable results.',
      'omnia.t1': '+500 professionals trained in ethical GBV response',
      'omnia.t2': '+10 institutions with protocols and tools',
      'omnia.t3': '+15 strategic projects in Mozambique and the region',
      'omnia.ctaSub': 'We combine technical experience and local knowledge for sustainable impact in Mozambique.',
      'omnia.footerTag': 'Strategic consulting in Mozambique — measurable results and implementation-ready solutions.',
      /* Common (all pages) */
      'common.home': 'Home',
      'common.contact': 'Contact',
      'common.contactUs': 'Get in touch',
      'common.initiativaDeCarvalho': 'A DeCarvalho initiative',
      'common.footerTag': 'Strategic consulting in Mozambique — measurable results and implementation-ready solutions.',
      'common.footerCopy': '© 2026 DeCarvalho Consultorias & Serviços. All rights reserved.',
      'common.trustProposal': '<strong>✓</strong> Tailored proposal',
      'common.trustNoCommitment': '<strong>✓</strong> No commitment',
      /* Quem somos */
      'quem.breadcrumb': 'About us',
      'quem.since': 'Mozambican consulting firm focused on results',
      'quem.title': 'About us',
      'quem.lead': '<strong>DeCarvalho Consultorias & Serviços</strong> is a Mozambican consulting firm focused on executing strategic solutions for institutions, businesses and development partners.',
      'quem.downloadPdf': 'Download company presentation (PDF)',
      'quem.missao': 'Mission',
      'quem.missaoText': 'Strengthen institutions, transfer knowledge and integrate innovative practices to generate measurable impact and sustainable value in Mozambique and the region.',
      'quem.visao': 'Vision',
      'quem.visaoText': 'To be a global reference in institutional transformation and social innovation, delivering sustainable and scalable solutions through strategic impact networks.',
      'quem.valores': 'Values',
      'quem.valores1': '<strong>Integrity</strong> — Transparent, accountable action aligned with international standards.',
      'quem.valores2': '<strong>Innovation</strong> — Creative solutions adapted to local context, with focus on scalability.',
      'quem.valores3': '<strong>Quality</strong> — Commitment to concrete, auditable and sustainable results.',
      'quem.valores4': '<strong>Ethics</strong> — Networked work with responsibility and transparency.',
      'quem.valores5': '<strong>Respect</strong> — Inclusive approach centred on people and institutions.',
      'quem.valores6': '<strong>Valuing Human Beings</strong> — Dignity and positive impact at the centre of every intervention.',
      'quem.ofazemos': 'What we do',
      'quem.ofazemosSub': 'We deliver integrated solutions for institutional transformation and social innovation, combining technical assistance, research and diagnostics, project management, team capacity building and institutional design with focus on measurable and sustainable outcomes.',
      'quem.serv1': '<strong>Technical assistance and implementation</strong> — We design and execute solutions adapted to each organisation\'s operational reality.',
      'quem.serv2': '<strong>Research, diagnostics and evidence</strong> — We produce analyses and baselines that improve decisions and reduce strategic risk.',
      'quem.serv3': '<strong>Results-oriented project management</strong> — We plan, execute and monitor goals, indicators and safeguards with technical rigour.',
      'quem.serv4': '<strong>Capacity building and knowledge transfer</strong> — We strengthen technical and management capabilities for long-term outcomes.',
      'quem.serv5': '<strong>Institutional design and scalability</strong> — We align processes, governance and operating models for sustainable growth.',
      'quem.areas': 'Areas of expertise',
      'quem.areasSub': 'At DeCarvalho Consultorias & Serviços, we work in strategic sectors that drive sustainable development and institutional competitiveness:',
      'quem.areas1': 'Gender and Human Rights — technical solutions in GBV/SEA/SH, equality and protection, integrating inclusive policies and response mechanisms.',
      'quem.areas2': 'Health — specialised support in public, sexual and reproductive health, focused on access, quality and equity.',
      'quem.areas3': 'Renewable Energy — promotion of clean and sustainable solutions for energy diversification and environmental resilience.',
      'quem.areas4': 'Agriculture and Food Security — innovation in value chains, agro-processing and strengthening food sovereignty.',
      'quem.areas5': 'Sustainable Tourism — models that balance economic growth, cultural preservation and positive social impact.',
      'quem.areas6': 'Project Management and Data Processing — planning, execution and monitoring with technical rigour, including impact evaluations and baselines.',
      'quem.areas7': 'Capacity Building and Training — modular programmes that strengthen local and institutional capabilities for lasting results.',
      'quem.kpi1': 'strategic projects',
      'quem.kpi2': 'institutions supported',
      'quem.kpi3': 'professionals trained',
      'quem.verDiff': 'See our advantages',
      /* Amparo */
      'amparo.breadcrumb': 'Amparo',
      'amparo.tagline': 'Capacity building and institutional support for GBV service providers',
      'amparo.whatWeDo': 'What we do',
      'amparo.title': 'Strengthening institutions for an ethical and effective GBV response',
      'amparo.lead': '<strong>Amparo</strong> is DeCarvalho\'s arm dedicated to capacity building and technical assistance, formation of support networks and development of technical solutions against gender-based violence.',
      'amparo.missao': 'Mission',
      'amparo.missaoText': 'To strengthen the technical, operational and institutional capacities of GBV service providers through training, technical assistance and development of sustainable solutions.',
      'amparo.visao': 'Vision',
      'amparo.visaoText': 'To consolidate qualified and resilient support networks capable of offering coordinated, ethical and effective responses to GBV nationwide.',
      'amparo.principios': 'Principles',
      'amparo.p1': '<strong>Protection and ethics:</strong> we work with technical rigour and human sensitivity.',
      'amparo.p2': '<strong>Sustainability:</strong> we promote lasting solutions adapted to the local context.',
      'amparo.p3': '<strong>Collective impact:</strong> we strengthen networks and partnerships to broaden reach and effectiveness.',
      'amparo.p4': '<strong>Technical orientation:</strong> we base our actions on evidence, good practices and international standards.',
      'amparo.p5': '<strong>Inclusion and diversity:</strong> we respect and value the plurality of experiences and knowledge.',
      'amparo.produtos': 'Products and services',
      'amparo.produtosTitle': 'Our strategic products and services',
      'amparo.serv1': 'Technical Training and Awareness',
      'amparo.serv1d': 'Capacity building modules for GBV service providers. Content on care ethics, active listening, confidentiality and trauma-informed approach.',
      'amparo.serv2': 'Specialised Technical Assistance',
      'amparo.serv2d': 'Support in implementing ethical and operational protocols. Development of case management systems and referral flows.',
      'amparo.serv3': 'Development of Technical Solutions',
      'amparo.serv3d': 'Creation of tools adapted to the local context (manuals, guides, technical sheets). Production of educational materials and prevention campaigns.',
      'amparo.serv4': 'Strengthening Support Networks',
      'amparo.serv4d': 'Inter-institutional coordination between public services, partner organisations and communities. Consolidation of local and national GBV response networks.',
      'amparo.serv5': 'Monitoring and Learning',
      'amparo.serv5d': 'Creation of impact and quality of care indicators. Survivor feedback tools.',
      'amparo.abordagem': 'Our approach',
      'amparo.abordagem1': 'Ethics and protection',
      'amparo.abordagem2': 'Sustainability and collective impact',
      'amparo.abordagem3': 'Inclusion and diversity',
      'amparo.abordagem4': 'Alignment with international standards (IFC, WHO, GBV AoR, UNFPA)',
      'amparo.ctaTitle': 'Want to strengthen your institution?',
      'amparo.ctaText': 'Contact us for training, technical assistance or development of solutions adapted to your context. Response within 24 hours.',
      'amparo.ctaBtn': 'Request contact',
      'amparo.faqTitle': 'Frequently Asked Questions – Training Sessions',
      'amparo.faqQ1': 'What do we cover in the training sessions?',
      'amparo.faqA1': 'GEDSI, GBV, SEA/SH, research ethics, community engagement, income generation and financial literacy, sensitive complaints mechanisms.',
      'amparo.faqQ2': 'What are sensitive complaints management mechanisms?',
      'amparo.faqA2': 'They are safe and confidential channels so that anyone can report situations of violence or misconduct without fear of reprisal.',
      'amparo.faqQ3': 'How long does a training last?',
      'amparo.faqA3': 'Short sessions of 1 to 2 days; full trainings up to 1 week; modular courses up to 2 weeks. All adapted to the group\'s needs.',
      'amparo.faqQ4': 'Are trainings in-person or online?',
      'amparo.faqA4': 'Both. In-person with dynamics and group work; online with flexible schedules and support materials.',
      'amparo.faqQ5': 'Are there fixed packages or is everything customised?',
      'amparo.faqA5': 'We do not work with fixed packages. Each package is designed according to the profile of participants and the institution\'s objectives.',
      'amparo.faqQ6': 'Is there support after the training?',
      'amparo.faqA6': 'Yes. We offer post-training coaching and mentoring to support the application of content in the field.',
      'amparo.faqQ7': 'Is there a certificate?',
      'amparo.faqA7': 'Yes. A certificate of participation is issued at the end.',
      'amparo.faqQ8': 'Who can participate?',
      'amparo.faqA8': 'Community leaders, youth, health professionals, teachers, associations, civil society and public service teams — any group that wants to strengthen its GBV response.',
      /* Cuidar */
      'cuidar.breadcrumb': 'Cuidar+',
      'cuidar.tagline': 'Direct care and support solutions for GBV survivors',
      'cuidar.whatWeDo': 'What we do',
      'cuidar.title': 'A safe, agile and humanised channel',
      'cuidar.lead': '<strong>Cuidar+</strong> is a specialised DeCarvalho initiative, dedicated to offering a safe, agile and humanised channel for listening, support and referral for GBV survivors. Combining technical rigour, cultural sensitivity and ethical commitment, positioning itself as a <strong>concrete private sector response</strong> to urgent protection, dignity and trust needs in Mozambique.',
      'cuidar.missao': 'Mission',
      'cuidar.missaoText': 'To offer a confidential and welcoming space where each GBV survivor can be heard with empathy, referred effectively and accompanied with respect.',
      'cuidar.visao': 'Vision',
      'cuidar.visaoText': 'To be recognised as a national reference in direct and confidential care for GBV survivors.',
      'cuidar.principios': 'Principles',
      'cuidar.p1': '<strong>Protection and confidentiality:</strong> we guarantee privacy and dignity in every interaction.',
      'cuidar.p2': '<strong>Empathy and active listening:</strong> trauma-informed approach centred on the survivor.',
      'cuidar.p3': '<strong>Sustainability:</strong> lasting solutions integrated with local support networks.',
      'cuidar.p4': '<strong>Technical orientation:</strong> we base our actions on evidence and international good practices.',
      'cuidar.p5': '<strong>Inclusion and diversity:</strong> we respect and value the plurality of experiences.',
      'cuidar.produtos': 'Strategic products',
      'cuidar.produtosTitle': 'What we offer',
      'cuidar.equipa': 'Team',
      'cuidar.equipaTitle': 'Multidisciplinary professionals with ethical and technical commitment',
      'cuidar.equipaLead': 'The Cuidar+ team comprises professionals with solid experience in direct care, social protection, mental health and GBV response.',
      'cuidar.role1': '<strong>Care and Protection Coordinator</strong> — Clinical Psychology and Human Rights; 10+ years in psychosocial care for GBV survivors; specialisation in trauma-informed approaches.',
      'cuidar.role2': '<strong>Case and Referral Manager</strong> — Social Work and Project Management; implementation of case management systems with ethical protocols; coordination with local support networks.',
      'cuidar.role3': '<strong>Training and Awareness Specialist</strong> — Community Education and Gender Studies; development of capacity-building modules for sensitive care; prevention campaigns.',
      'cuidar.role4': '<strong>Monitoring and Learning Analyst</strong> — Social Statistics and Programme Evaluation; impact indicators and feedback tools; technical reporting for donors and partners.',
      'cuidar.role5': '<strong>GBV and Gender Justice Specialist</strong> — Gender Studies, Sociology and Public Health; GBV response policies and protocols; survivor-centred approach.',
      'cuidar.role6': '<strong>Human-Centred Communication Designer</strong> — Graphic Design and Social Change Communication; accessible and culturally sensitive visual materials.',
      'cuidar.abordagem': 'Our approach',
      'cuidar.abordagem1': 'Protection, confidentiality and dignity',
      'cuidar.abordagem2': 'Active listening and trauma-informed approach',
      'cuidar.abordagem3': 'Integration with local support networks',
      'cuidar.abordagem4': 'Alignment with international standards (WHO, GBV AoR, UNFPA)',
      'cuidar.ctaTitle': 'Want to know more or establish a partnership?',
      'cuidar.ctaText': 'Contact us for support, referral or collaboration with Cuidar+. Response within 24 hours.',
      'cuidar.intro1': 'At <strong>Cuidar+</strong> we believe that no one should face violence alone. This space was created to offer <strong>support, information and safe pathways</strong> for those who suffer or witness situations of violence.',
      'cuidar.intro2': 'Here you will find <strong>free helplines</strong>, guidance on <strong>confidentiality and anonymity</strong>, and where to seek help — the <strong>Police</strong>, <strong>Social Services</strong>, <strong>Public Prosecutor</strong>, or your <strong>nearest health centre or hospital</strong>.',
      'cuidar.intro3': 'Reporting is an act of courage and protection. We are here to listen, support and refer. Your wellbeing and safety are our priority.',
      'cuidar.equipaEstrutura': "<strong>Structure:</strong> General Management (Coordinator — D'bora de Carvalho); Provincial Officers; Community facilitators; Communication and community engagement; Monitoring, Evaluation and Learning.",
      'cuidar.contactTitle': 'Dedicated contact and helplines',
      'cuidar.contactLead': 'To request support, referral or information in full confidentiality:',
      'cuidar.contactEmailLabel': 'Cuidar+ email:',
      'cuidar.contactHorarioLabel': 'Opening hours:',
      'cuidar.contactHorario': '<strong>Opening hours:</strong> 08:30 – 17:30',
      'cuidar.contactLinhaCriancaLabel': 'Child Helpline:',
      'cuidar.contactLinhaVerdeLabel': 'Green Line:',
      'cuidar.contactWhatsAppLabel': 'WhatsApp:',
      'cuidar.faqTitle': 'Frequently Asked Questions – Cuidar+',
      'cuidar.faqQ1': 'Where can I get help if I or someone close to me is experiencing violence?',
      'cuidar.faqA1': 'You can call the <strong>Green Line 1458</strong> or the <strong>Child Helpline 116</strong> (if under 18). You can also seek support directly from the Police, Social Services, Public Prosecutor, or your nearest health centre or hospital.',
      'cuidar.faqQ2': 'Will my report be kept confidential?',
      'cuidar.faqA2': 'Yes. All reports are handled with <strong>confidentiality</strong>. The aim is to protect the victim and ensure they receive support without fear of exposure.',
      'cuidar.faqQ3': 'Can I report without giving my name?',
      'cuidar.faqA3': 'Yes. It is possible to report <strong>anonymously</strong>. Even without identifying yourself, your voice helps protect those in need.',
      'cuidar.faqQ4': 'What happens after I report?',
      'cuidar.faqA4': 'The report is referred to the relevant services. There may be investigation, immediate protection measures, medical care and psychosocial support. What matters most is that someone will take care of the case.',
      'cuidar.faqQ5': 'What should I do if someone close to me is experiencing violence?',
      'cuidar.faqA5': 'Listen with care and without judgement. Encourage the person to seek help through helplines or health or social services. If there is immediate danger, contact the police. Support them so they do not feel alone.',
      'cuidar.faqQ6': 'What types of violence can be reported?',
      'cuidar.faqA6': 'Physical violence, sexual abuse, sexual exploitation and abuse, sexual harassment, economic violence, psychological violence.',
      'cuidar.faqQ7': 'What if I am afraid of reprisals?',
      'cuidar.faqA7': 'Protection measures can be applied, such as removal of the perpetrator, police accompaniment or referral to safe shelters. Your safety is the priority.',
      'cuidar.serv1': 'Listening and Support Channel',
      'cuidar.serv1d': 'Multichannel care (in-person, phone, digital). Active listening protocols and trauma-informed approach.',
      'cuidar.serv2': 'Case Management System',
      'cuidar.serv2d': 'Secure platform for registration and follow-up. Classification by type of violence and survivor profile.',
      'cuidar.serv3': 'First Response Kit',
      'cuidar.serv3d': 'Sensitive care guides. Informative materials for survivors. Referral cards.',
      'cuidar.serv4': 'Training and Capacity Building Modules',
      'cuidar.serv4d': 'Team training. Content on care ethics, confidentiality, active listening.',
      'cuidar.serv5': 'Communication Campaigns',
      'cuidar.serv5d': 'Culturally resonant visual materials. Community engagement strategies.',
      'cuidar.serv6': 'Monitoring and Learning Tools',
      'cuidar.serv6d': 'Impact and quality indicators. Feedback instruments. Technical reports.',
      'cuidar.serv7': 'Cuidar+ Operational Manual',
      'cuidar.serv7d': 'Ethical and technical guidelines. Standardised procedures for care and protection.',
      /* Baile da Saudade */
      'baile.breadcrumb': 'Baile da Saudade',
      'baile.tagline': 'Intergenerational connection, cultural valorisation and senior wellbeing',
      'baile.whatWeDo': 'What we do',
      'baile.title': 'Celebrating life at all ages',
      'baile.lead': '<strong>Baile da Saudade</strong> is a DeCarvalho initiative dedicated to intergenerational connection, cultural valorisation and senior wellbeing. We promote thematic events, training, recreational activities and excursions that bring generations together and strengthen community bonds.',
      'baile.missao': 'Mission',
      'baile.missaoText': 'To promote quality of life and social connection among senior populations, valorising cultural knowledge and building bridges between generations.',
      'baile.visao': 'Vision',
      'baile.visaoText': 'To be a reference in Mozambique for initiatives that celebrate and dignify seniors through music, dance and intergenerational sharing.',
      'baile.produtos': 'What we offer',
      'baile.produtosTitle': 'Events, training and activities',
      'baile.serv1': 'Thematic events',
      'baile.serv1d': 'Dances, cultural evenings and gatherings that celebrate Mozambican music, dance and traditions.',
      'baile.serv2': 'Training and workshops',
      'baile.serv2d': 'Wellbeing, memory, health and creative activity sessions adapted to seniors.',
      'baile.serv3': 'Recreational activities',
      'baile.serv3d': 'Games, conversation circles, reading and group social moments.',
      'baile.serv4': 'Excursions and outings',
      'baile.serv4d': 'Guided visits to cultural and natural sites of interest, promoting mobility and discovery.',
      'baile.ctaTitle': 'Want to know more or organise an event?',
      'baile.ctaText': 'Contact us for partnerships, events or Baile da Saudade activities. Response within 24 hours.',
      'baile.abordagem': 'What inspires us',
      'baile.abordagem1': 'Intergenerational connection',
      'baile.abordagem2': 'Cultural valorisation and traditions',
      'baile.abordagem3': 'Wellbeing and quality of life',
      'baile.abordagem4': 'Community and belonging',
      /* Impacto */
      'impacto.breadcrumb': 'Impact',
      'impacto.title': 'Impact you can measure on the ground',
      'impacto.sub': 'Consultancies delivered with clear deliverables and verifiable institutional outcomes in Mozambique and the region.',
      'impacto.stat1': 'strategic projects in Mozambique and the region',
      'impacto.stat2': 'professionals trained in ethical GBV response',
      'impacto.stat3': 'institutions strengthened with protocols and tools',
      'impacto.stat4': 'curated events and training',
      'impacto.note': 'We work with national and international partners to deliver concrete solutions: implemented protocols, trained teams and strengthened institutional processes.',
      'impacto.consultoriasLabel': 'Proven experience',
      'impacto.consultoriasTitle': 'Consultancies delivered',
      'impacto.consultoriasSub': 'We present featured consultancies here with full detail (context, activities, results and impact). Other portfolio consultancies can be shared upon request to DeCarvalho.',
      'impacto.consultoriasNota': 'Additional consultancy details are available upon request. Please contact DeCarvalho.',
      'impacto.outrasTitle': 'Other portfolio consultancies (details available on request)',
      'impacto.loading': 'Loading consulting projects...',
      'impacto.cons1': 'GBV response in the health sector (UNDP/MISAU): national plan, M&E framework and cost analysis — foundation for investment decisions and coordinated rollout.',
      'impacto.cons2': 'Programa Brilho (SNV): gender and inclusion strategy and training manual — greater equity in the clean energy value chain and strengthened stakeholders.',
      'impacto.cons3': 'Forest and mangrove protection, Inhambane (Terre des Hommes/Malhalhe): impact evaluation and phase II feasibility — evidence-based decision to continue the programme.',
      'impacto.cons4': 'PESOD in Massinga (Malhalhe): gender-responsive analysis — evidence for more inclusive district budgeting and service planning.',
      'impacto.cons5': 'Sex-disaggregated benefits in Massinga (Education, Health, Agricultural extension): incidence analysis — prioritising policies with the greatest impact on women and children.',
      'impacto.cons6': 'National land policy review (Oxfam/Forum Mulher): gender analysis and policy briefs — technical input for the legislative debate.',
      /* Diferenciais */
      'diff.breadcrumb': 'Our advantages',
      'diff.title': 'Why choose DeCarvalho?',
      'diff.sub': 'Advantages that turn strategy into execution with measurable and auditable results.',
      'diff.d1': 'Multidisciplinary expertise',
      'diff.d1t': 'We integrate strategy, social innovation, institutional design and technical management in one platform with complete and scalable solutions.',
      'diff.d2': 'Local with global vision',
      'diff.d2t': 'We align international standards (IFC, World Bank, GAC, WHO, IRMA) with Mozambican cultural and operational realities.',
      'diff.d3': 'Focus on impact',
      'diff.d3t': 'Every solution is designed to generate measurable transformation — institutional, community and human — with auditable and sustainable results.',
      'diff.d4': 'Ethical and inclusive approach',
      'diff.d4t': 'We apply people-centred methodologies that promote diversity, equitable participation and ethical compliance at every level of intervention.',
      'diff.d5': 'Applied execution',
      'diff.d5t': 'We translate strategy into operational plans, implementation routines and actionable deliverables for each context.',
      'diff.d6': 'Governance and compliance',
      'diff.d6t': 'We strengthen control, transparency and accountability with practices aligned to technical and regulatory requirements.',
      'diff.cta': 'Ready to transform your organisation?',
      /* Contacto */
      'contact.breadcrumb': 'Contact',
      'contact.title': 'Get in touch',
      'contact.lead': 'We are ready to respond with practical solutions for your organisation. Use the contacts below to speak with our commercial team.',
      'contact.name': 'Name *',
      'contact.namePlaceholder': 'Your name',
      'contact.email': 'Email *',
      'contact.emailPlaceholder': 'your@email.com',
      'contact.phone': 'Phone',
      'contact.phonePlaceholder': '+258 ...',
      'contact.message': 'Message *',
      'contact.messagePlaceholder': 'How can we help?',
      'contact.submit': 'Send message',
      'contact.submitLabel': 'Send message',
      'contact.formChannelMsg': 'To send your message, use email (comercial@decarvalhoconsultorias.com) or WhatsApp (+258 840 371 527).',
      'contact.trustBadge1': '✓ Response as soon as possible',
      'contact.trustBadge2': '🔒 Data handled confidentially',
      'contact.privacyText': 'I agree with the <a href="privacidade.html" title="Privacy policy">privacy policy</a> and that my data may be used to respond to my request.',
      'contact.location': 'Location',
      'contact.locationVal': 'Matola City, Sikwama, nº 1016, Mozambique',
      'contact.phoneLabel': 'Phone',
      'contact.whatsappLabel': 'WhatsApp',
      'contact.emailLabel': 'Email',
      'ui.backToTop': 'Back to top',
      'impact.filterLabel': 'Filter consulting projects',
      'impact.filterPlaceholder': 'E.g.: UNDP, gender, health...',
      'impact.filterClear': 'Clear',
      'impact.filterCount': '{count} result(s)',
      'impact.filterEmpty': 'No results for this filter.',
      'impact.viewGrid': 'Grid',
      'impact.viewList': 'List',
      'impact.viewPortfolio': 'Other consultancies',
      'ui.readingProgress': 'Reading progress',
      /* FAQ */
      'faq.label': 'Frequently asked questions',
      'faq.title': 'Common questions',
      'faq.intro': 'Find quick answers to the most common questions about our services and how we work.',
      'faq.q1': 'How do I request a proposal or training?',
      'faq.a1': 'Contact us by <a href="mailto:comercial@decarvalhoconsultorias.com">email</a>, <a href="https://wa.me/258840371527">WhatsApp</a> or on the <a href="contacto.html">contact page</a>. Briefly describe your need (training, technical assistance, project) and we will respond with a personalised proposal. No commitment.',
      'faq.q2': 'In which geographic areas do you operate?',
      'faq.a2': 'We operate in Mozambique and the SADC region. Our headquarters is in Matola City. We conduct training and projects across the country and, when requested, in neighbouring countries.',
      'faq.q3': 'What is the difference between Amparo and Cuidar+?',
      'faq.a3': '<strong>Amparo</strong> focuses on capacity building and institutional support — training teams, developing protocols and strengthening GBV service providers. <strong>Cuidar+</strong> offers direct and confidential care for GBV survivors (listening, support, referral). Together, they cover the full GBV response chain.',
      'faq.q4': 'Is Cuidar+ care confidential?',
      'faq.a4': 'Yes. Cuidar+ guarantees full confidentiality and dignity. Care follows a trauma-informed approach and ethical protocols aligned with international standards (WHO, GBV AoR).',
      'faq.q5': 'What type of partners do you work with?',
      'faq.a5': 'We work with UN agencies (UNDP, UNFPA, UNICEF), international and national civil society organisations, government, community networks and businesses. We have experience with donor-funded projects and public-private partnerships.',
      'faq.cta': "Didn't find your answer? <a href=\"contacto.html\">Contact us</a>."
    }
  };

  function getLang() {
    try {
      return localStorage.getItem('lang') || 'pt';
    } catch (e) {
      return 'pt';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {}
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt';
    document.body.classList.remove('lang-pt', 'lang-en');
    document.body.classList.add('lang-' + lang);
    var t = i18n[lang] || i18n.pt;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (key === 'solucoes.sinergia' || t[key].indexOf('<') !== -1) el.innerHTML = t[key];
        else el.textContent = t[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });
    document.querySelectorAll('[data-i18n-template]').forEach(function (el) {
      var keyTpl = el.getAttribute('data-i18n-template');
      var raw = t[keyTpl] || '';
      if (!raw) return;
      var data = el.getAttribute('data-i18n-vars');
      if (!data) {
        el.textContent = raw;
        return;
      }
      try {
        var vars = JSON.parse(data);
        Object.keys(vars).forEach(function (k) {
          raw = raw.replace('{' + k + '}', vars[k]);
        });
        el.textContent = raw;
      } catch (e) {
        el.textContent = raw;
      }
    });
    var btns = document.querySelectorAll('.lang-btn, .v-lang-btn, .o-lang-btn');
    btns.forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
    try {
      window.dispatchEvent(new CustomEvent('decarvalho:langchange', { detail: { lang: lang } }));
    } catch (e) {}
  }

  document.querySelectorAll('.lang-btn, .v-lang-btn, .o-lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  setLang(getLang());

  // Hero: entrada em cascata ao carregar (home)
  var heroInner = document.querySelector('.hero-inner');
  if (heroInner) {
    requestAnimationFrame(function () {
      heroInner.classList.add('revealed');
    });
  }

  // Subpáginas: revelar logo e tagline ao carregar
  var subpageReveal = document.querySelectorAll('.subpage-hero-reveal');
  if (subpageReveal.length) {
    requestAnimationFrame(function () {
      setTimeout(function () {
        subpageReveal.forEach(function (el) { el.classList.add('visible'); });
      }, 80);
    });
  }

  // Reveal ao scroll (Intersection Observer)
  function enhanceSubpages() {
    if (document.body.classList.contains('layout-home')) return;
    document.body.classList.add('layout-subpage');
    var targets = document.querySelectorAll(
      '.section .page-title, .section .section-title, .section .section-sub, .section .lead,' +
      '.two-cols > div, .servico-card, .diferencial-card, .impact-consultoria-card, .contact-item,' +
      '.contact-form, .approach-box, .principios, .equipa-list, .areas-list, .services-list, .values-list,' +
      '.cta-inner, .o-faq-item, .quem-card, .stat, .impact-note'
    );
    targets.forEach(function (el, idx) {
      if (el.classList.contains('reveal')) return;
      el.classList.add('reveal');
      var delay = (idx % 6) * 50;
      el.setAttribute('data-delay', String(delay));
    });
  }

  enhanceSubpages();

  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );
    revealEls.forEach(function (el) {
      if (!el.closest('.hero')) observer.observe(el);
    });

    // Observa novos blocos adicionados dinamicamente (ex.: consultorias em impacto.html)
    var mo = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes && m.addedNodes.forEach(function (n) {
          if (!n || n.nodeType !== 1) return;
          if (n.classList && n.classList.contains('reveal')) observer.observe(n);
          n.querySelectorAll && n.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  } else {
    revealEls.forEach(function (el) {
      if (!el.closest('.hero')) el.classList.add('in-view');
    });
  }

  // Header scroll: add class for shadow + floating CTA visibility
  var floatCta = document.getElementById('oFloatCta');
  function onScroll() {
    if (header && window.scrollY > 20) {
      header.classList.add('scrolled');
    } else if (header) {
      header.classList.remove('scrolled');
    }
    if (floatCta && window.scrollY > 300) {
      floatCta.classList.add('is-visible');
      document.body.classList.add('float-cta-visible');
    } else if (floatCta) {
      floatCta.classList.remove('is-visible');
      document.body.classList.remove('float-cta-visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on any nav link click
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
        nav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // Dropdown "As nossas soluções" (subpáginas)
  document.querySelectorAll('.nav-drop').forEach(function (drop) {
    var trigger = drop.querySelector('.nav-drop-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var willOpen = !drop.classList.contains('open');
      document.querySelectorAll('.nav-drop.open').forEach(function (other) {
        if (other !== drop) {
          other.classList.remove('open');
          var otherBtn = other.querySelector('.nav-drop-trigger');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
      drop.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-drop')) return;
    document.querySelectorAll('.nav-drop.open').forEach(function (drop) {
      drop.classList.remove('open');
      var btn = drop.querySelector('.nav-drop-trigger');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for anchor links (enhance native behavior)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // FAQ subpáginas: mantém apenas um item aberto por vez
  var faqLists = document.querySelectorAll('.o-faq .o-faq-list');
  faqLists.forEach(function (list) {
    list.addEventListener('toggle', function (e) {
      var item = e.target;
      if (!item || item.tagName !== 'DETAILS' || !item.open) return;
      list.querySelectorAll('details[open]').forEach(function (d) {
        if (d !== item) d.open = false;
      });
    }, true);
  });

  // Barra de progresso de leitura (todas as páginas)
  if (!document.getElementById('readingProgressBar')) {
    var progressWrap = document.createElement('div');
    progressWrap.className = 'reading-progress';
    progressWrap.setAttribute('aria-hidden', 'true');
    progressWrap.innerHTML = '<span class="reading-progress-bar" id="readingProgressBar"></span>';
    document.body.appendChild(progressWrap);
    var progressBar = document.getElementById('readingProgressBar');

    function onReadProgress() {
      if (!progressBar) return;
      var doc = document.documentElement;
      var scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
      var pct = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
      progressBar.style.width = pct + '%';
    }

    window.addEventListener('scroll', onReadProgress, { passive: true });
    window.addEventListener('resize', onReadProgress);
    onReadProgress();
  }

  // Página Impacto: filtro de consultorias
  (function setupImpactFilter() {
    var list = document.getElementById('impactConsultoriasList');
    if (!list) return;
    var extraBox = document.getElementById('impactConsultoriasExtra');
    var host = document.createElement('div');
    host.className = 'impact-filter';
    host.innerHTML =
      '<label for="impactFilterInput" data-i18n="impact.filterLabel">Filtrar consultorias</label>' +
      '<div class="impact-view-toggle" role="group" aria-label="Modo de visualização">' +
      '<button type="button" class="btn btn-secondary is-active" id="impactViewGrid" data-i18n="impact.viewGrid">Grade</button>' +
      '<button type="button" class="btn btn-secondary" id="impactViewList" data-i18n="impact.viewList">Lista</button>' +
      '<button type="button" class="btn btn-secondary" id="impactViewPortfolio" data-i18n="impact.viewPortfolio">Outras consultorias</button>' +
      '</div>' +
      '<div class="impact-filter-row">' +
      '<input id="impactFilterInput" type="search" data-i18n-placeholder="impact.filterPlaceholder" placeholder="Ex.: UNDP, género, saúde...">' +
      '<button type="button" class="btn btn-secondary" id="impactFilterClear" data-i18n="impact.filterClear">Limpar</button>' +
      '</div>' +
      '<p class="impact-filter-count" id="impactFilterCount" data-i18n-template="impact.filterCount"></p>' +
      '<p class="impact-filter-empty" id="impactFilterEmpty" data-i18n="impact.filterEmpty" hidden>Sem resultados para este filtro.</p>';
    list.parentNode.insertBefore(host, list);

    var input = document.getElementById('impactFilterInput');
    var clear = document.getElementById('impactFilterClear');
    var count = document.getElementById('impactFilterCount');
    var empty = document.getElementById('impactFilterEmpty');
    var gridBtn = document.getElementById('impactViewGrid');
    var listBtn = document.getElementById('impactViewList');
    var portfolioBtn = document.getElementById('impactViewPortfolio');
    var currentMode = 'grid';

    function setView(mode) {
      currentMode = mode;
      var isPortfolio = mode === 'portfolio';
      var isList = mode === 'list';
      if (extraBox) extraBox.style.display = isPortfolio ? '' : 'none';
      list.style.display = isPortfolio ? 'none' : '';
      list.classList.toggle('impact-consultorias-list-mode', isList);
      gridBtn.classList.toggle('is-active', mode === 'grid');
      listBtn.classList.toggle('is-active', mode === 'list');
      if (portfolioBtn) portfolioBtn.classList.toggle('is-active', isPortfolio);
      if (input) input.disabled = isPortfolio;
      if (clear) clear.disabled = isPortfolio;
      if (isPortfolio) {
        input.value = '';
        var extraCount = extraBox ? extraBox.querySelectorAll('#impactConsultoriasExtraList li').length : 0;
        count.setAttribute('data-i18n-vars', JSON.stringify({ count: extraCount }));
        var p = (i18n[getLang()] || i18n.pt)['impact.filterCount'] || '{count} resultado(s)';
        count.textContent = p.replace('{count}', String(extraCount));
        empty.hidden = extraCount !== 0;
      } else {
        apply();
      }
      try { localStorage.setItem('impactViewMode', isPortfolio ? 'portfolio' : (isList ? 'list' : 'grid')); } catch (e) {}
    }

    function apply() {
      var q = (input.value || '').trim().toLowerCase();
      var cards = list.querySelectorAll('.impact-consultoria-card');
      var visible = 0;
      cards.forEach(function (card) {
        var txt = (card.textContent || '').toLowerCase();
        var ok = !q || txt.indexOf(q) !== -1;
        card.hidden = !ok;
        if (ok) visible++;
      });
      count.setAttribute('data-i18n-vars', JSON.stringify({ count: visible }));
      var pattern = (i18n[getLang()] || i18n.pt)['impact.filterCount'] || '{count} resultado(s)';
      count.textContent = pattern.replace('{count}', String(visible));
      empty.hidden = visible !== 0;
    }

    input.addEventListener('input', apply);
    clear.addEventListener('click', function () {
      input.value = '';
      apply();
      input.focus();
    });
    gridBtn.addEventListener('click', function () { setView('grid'); });
    listBtn.addEventListener('click', function () { setView('list'); });
    if (portfolioBtn) portfolioBtn.addEventListener('click', function () { setView('portfolio'); });
    var savedMode = null;
    try { savedMode = localStorage.getItem('impactViewMode'); } catch (e) {}
    setView(savedMode === 'portfolio' ? 'portfolio' : (savedMode === 'list' ? 'list' : 'grid'));
    if (currentMode !== 'portfolio') apply();
  })();

  // Números com animação de contagem (home + subpáginas)
  (function setupCountUp() {
    var items = document.querySelectorAll(
      '.stat-number, .o-impact-highlight-number, .o-impact-strip-nums strong, .quem-kpi strong'
    );
    if (!items.length) return;
    var reduceMotion = false;
    try {
      reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    function parseNumericText(txt) {
      var raw = String(txt || '').trim();
      var match = raw.match(/^([^0-9]*)([0-9]+(?:[.,][0-9]+)?)(.*)$/);
      if (!match) return null;
      return {
        prefix: match[1] || '',
        value: Number((match[2] || '0').replace(',', '.')),
        suffix: match[3] || ''
      };
    }

    function formatValue(v, decimals) {
      if (!decimals) return String(Math.round(v));
      return v.toFixed(decimals).replace('.', ',');
    }

    /** Resolve valor alvo: data-count-target (mais fiável) ou texto visível */
    function getParsedTarget(el) {
      var rawAttr = el.getAttribute('data-count-target');
      if (rawAttr != null && String(rawAttr).trim() !== '') {
        var v = Number(String(rawAttr).trim().replace(',', '.'));
        if (isFinite(v)) {
          var prefixAttr = el.getAttribute('data-count-prefix');
          var suffixAttr = el.getAttribute('data-count-suffix');
          var fallback = parseNumericText(el.textContent);
          return {
            prefix: prefixAttr != null ? prefixAttr : (fallback ? fallback.prefix : ''),
            value: v,
            suffix: suffixAttr != null ? suffixAttr : (fallback ? fallback.suffix : '')
          };
        }
      }
      return parseNumericText(el.textContent);
    }

    /** Durante a animação não mostrar +0 quando o alvo é inteiro > 0 (evita flash e confusão) */
    function displayValueForFrame(current, target, decimals, t) {
      if (t >= 1) return formatValue(target, decimals);
      if (decimals > 0) return formatValue(current, decimals);
      if (target <= 0) return formatValue(Math.round(current), decimals);
      var r = Math.round(current);
      return formatValue(Math.max(1, Math.min(target, r)), decimals);
    }

    function animate(el) {
      if (!el || el.getAttribute('data-counted') === 'true') return;
      if (el.getAttribute('data-counting') === 'true') return;
      var parsed = getParsedTarget(el);
      if (!parsed || !isFinite(parsed.value)) return;
      var decimals = Math.max(0, (String(parsed.value).split('.')[1] || '').length);
      var target = parsed.value;
      var start = performance.now();
      var duration = 1200;

      if (reduceMotion) {
        el.textContent = parsed.prefix + formatValue(target, decimals) + parsed.suffix;
        el.setAttribute('data-counted', 'true');
        return;
      }

      el.setAttribute('data-counting', 'true');

      function frame(now) {
        if (!el.getAttribute('data-counting')) return;
        var t = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - t, 3);
        var current = target * eased;
        var text = parsed.prefix + displayValueForFrame(current, target, decimals, t) + parsed.suffix;
        el.textContent = text;
        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          el.textContent = parsed.prefix + formatValue(target, decimals) + parsed.suffix;
          el.removeAttribute('data-counting');
          el.setAttribute('data-counted', 'true');
        }
      }
      requestAnimationFrame(frame);
    }

    if ('IntersectionObserver' in window && !reduceMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animate(entry.target);
          io.unobserve(entry.target);
        });
      }, { threshold: 0.35 });
      items.forEach(function (el) { io.observe(el); });
      return;
    }

    items.forEach(animate);
  })();

  // Quem somos: pills com estado ativo ao rolar
  (function setupQuemPillsSpy() {
    var nav = document.querySelector('.quem-pills');
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;
    var map = [];
    links.forEach(function (a) {
      var id = (a.getAttribute('href') || '').slice(1);
      if (!id) return;
      var sec = document.getElementById(id);
      if (sec) map.push({ link: a, section: sec });
    });
    if (!map.length) return;

    function setActive(link) {
      map.forEach(function (item) {
        item.link.classList.toggle('is-active', item.link === link);
      });
    }

    if ('IntersectionObserver' in window) {
      var activeById = {};
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          activeById[entry.target.id] = entry.isIntersecting;
        });
        var first = map.find(function (item) { return activeById[item.section.id]; });
        if (first) setActive(first.link);
      }, { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 });
      map.forEach(function (item) { io.observe(item.section); });
    }

    if (location.hash) {
      var hash = location.hash.replace('#', '');
      var target = map.find(function (item) { return item.section.id === hash; });
      if (target) setActive(target.link);
    } else {
      setActive(map[0].link);
    }
  })();

  // Proteção básica de conteúdo: dificulta cópia direta de textos públicos
  (function setupContentProtection() {
    document.body.classList.add('no-copy');
    function isCopyAllowedTarget(target) {
      return !!(target && target.closest('.allow-copy, a[href^="mailto:"], a[href^="tel:"], a[href^="https://wa.me/"]'));
    }
    function isEditableTarget(target) {
      return !!(target && target.closest('input, textarea, [contenteditable="true"]'));
    }
    document.addEventListener('copy', function (e) {
      if (isEditableTarget(e.target) || isCopyAllowedTarget(e.target)) return;
      e.preventDefault();
    });
    document.addEventListener('cut', function (e) {
      if (isEditableTarget(e.target) || isCopyAllowedTarget(e.target)) return;
      e.preventDefault();
    });
    document.addEventListener('contextmenu', function (e) {
      if (isEditableTarget(e.target) || isCopyAllowedTarget(e.target)) return;
      e.preventDefault();
    });
    document.addEventListener('keydown', function (e) {
      if (isEditableTarget(e.target) || isCopyAllowedTarget(e.target)) return;
      var key = (e.key || '').toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (key === 'c' || key === 'x' || key === 'u' || key === 's')) {
        e.preventDefault();
      }
    });
  })();

  // Contact form — validação por campo + feedback de submissão
  if (contactForm) {
    // Configuração dos campos com mensagens de erro
    var fieldRules = [
      { id: 'name',    msgPt: 'Por favor, indique o seu nome.',           msgEn: 'Please enter your name.' },
      { id: 'email',   msgPt: 'Introduza um email válido.',               msgEn: 'Please enter a valid email.' },
      { id: 'message', msgPt: 'Escreva a sua mensagem antes de enviar.',  msgEn: 'Please write your message before sending.' }
    ];

    function getLang() {
      return (document.documentElement.lang || 'pt').toLowerCase().startsWith('en') ? 'en' : 'pt';
    }

    function showFieldError(field, msg) {
      var errId = field.id + '-error';
      var existing = document.getElementById(errId);
      if (!existing) {
        var err = document.createElement('span');
        err.id = errId;
        err.className = 'contact-field-error';
        err.setAttribute('role', 'alert');
        err.setAttribute('aria-live', 'polite');
        field.parentNode.insertBefore(err, field.nextSibling);
        existing = err;
      }
      existing.textContent = msg;
      field.setAttribute('aria-describedby', errId);
      field.classList.add('field-invalid');
    }

    function clearFieldError(field) {
      var errId = field.id + '-error';
      var existing = document.getElementById(errId);
      if (existing) existing.textContent = '';
      field.removeAttribute('aria-describedby');
      field.classList.remove('field-invalid');
    }

    // Limpar erro ao corrigir campo
    fieldRules.forEach(function (rule) {
      var field = document.getElementById(rule.id);
      if (!field) return;
      field.addEventListener('input', function () { clearFieldError(field); });
      field.addEventListener('blur', function () {
        if (!field.validity.valid) {
          showFieldError(field, getLang() === 'en' ? rule.msgEn : rule.msgPt);
        }
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var lang = getLang();
      var hasErrors = false;

      // Validar campos obrigatórios
      fieldRules.forEach(function (rule) {
        var field = document.getElementById(rule.id);
        if (!field) return;
        if (!field.validity.valid || field.value.trim() === '') {
          showFieldError(field, lang === 'en' ? rule.msgEn : rule.msgPt);
          if (!hasErrors) { field.focus(); }
          hasErrors = true;
        } else {
          clearFieldError(field);
        }
      });

      if (hasErrors) return;

      var submitBtn = contactForm.querySelector('.contact-submit-btn');
      if (submitBtn) {
        submitBtn.classList.add('is-loading');
        submitBtn.setAttribute('disabled', 'true');
      }

      var msg = document.getElementById('contact-form-channel-msg');
      window.setTimeout(function () {
        if (msg) {
          msg.removeAttribute('hidden');
          msg.setAttribute('role', 'alert');
          msg.setAttribute('aria-live', 'assertive');
          msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          var msgText = lang === 'en'
            ? 'To send your message, please use email (comercial@decarvalhoconsultorias.com) or WhatsApp (+258 840 371 527).'
            : 'Para enviar a sua mensagem, use email (comercial@decarvalhoconsultorias.com) ou WhatsApp (+258 840 371 527).';
          var box = document.createElement('p');
          box.id = 'contact-form-channel-msg';
          box.setAttribute('role', 'alert');
          box.setAttribute('aria-live', 'assertive');
          box.className = 'contact-form-channel-msg';
          box.textContent = msgText;
          contactForm.insertBefore(box, contactForm.firstChild);
          box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (submitBtn) {
          submitBtn.classList.remove('is-loading');
          submitBtn.removeAttribute('disabled');
        }
      }, 900);
    });
  }

})();

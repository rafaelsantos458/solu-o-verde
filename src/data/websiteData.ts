import { ServiceItem, FaqItem, Milestone, ValueCard, PortfolioProject } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "estudos-ambientais",
    title: "Elaboração de Estudos Ambientais",
    shortDescription: "Desenvolvimento de relatórios técnicos, laudos e estudos complexos solicitados por órgãos de controle ambiental (IBAMA, CETESB, órgãos estaduais e municipais).",
    fullDescription: "Garantimos a viabilidade técnica e jurídica do seu empreendimento por meio de estudos e pesquisas ambientais de alto rigor técnico, em total conformidade com a legislação federal (Lei 6.938/81 e resoluções do CONAMA). Nossa atuação abrange desde avaliações integradas e diagnósticos de fauna e flora até planejamento territorial.",
    iconName: "FileText",
    category: "estudos",
    features: [
      "EIA/RIMA (Estudo de Impacto Ambiental e Relatório de Impacto Ambiental)",
      "RAP (Relatório Ambiental Preliminar) e EAS (Estudo Ambiental Simplificado)",
      "PRAD (Plano de Recuperação de Áreas Degradadas) de alta complexidade",
      "CAR (Cadastro Ambiental Rural) e retificações técnicas",
      "Outorga de Direito de Uso de Recursos Hídricos e monitoramento hidrológico",
      "Laudo Diagnóstico de Flora, Fauna e Avaliação de Impacto de Vizinhança (EIV)"
    ],
    benefits: [
      "Aprovação ágil junto aos órgãos licenciadores",
      "Análise de riscos socioambientais integrada antes do início do projeto",
      "Prevenção de multas administrativas e embargos judiciais",
      "Valorização imobiliária e segurança jurídica para investidores"
    ]
  },
  {
    id: "assessoria-ambiental",
    title: "Assessoria & Licenciamento Ambiental",
    shortDescription: "Gestão ponta a ponta dos processos de Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO), garantindo compliance legal.",
    fullDescription: "Guiamos sua empresa através do complexo ecossistema regulatório brasileiro. Oferecemos assessoria continuada ou pontual, assegurando que todas as condicionantes das licenças sejam monitoradas e cumpridas de forma econômica e eficiente.",
    iconName: "ShieldCheck",
    category: "assessoria",
    features: [
      "Obtenção e renovação de Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO)",
      "PGRS (Plano de Gerenciamento de Resíduos Sólidos) com soluções de Economia Circular",
      "Monitoramento Sistemático de Condicionantes de Licenciamento",
      "Auditoria de Conformidade Legal e Diagnósticos ISO 14001",
      "Defesas administrativas e renegociação de TAC (Termo de Ajustamento de Conduta)",
      "Assessoria em ESG (Ambiental, Social e Governança) corporativo"
    ],
    benefits: [
      "Redução no tempo de tramitação de licenças em até 40%",
      "Tranquilidade operacional com alertas automáticos de prazos de validade",
      "Suporte imediato contra fiscalizações e notificações",
      "Aumento da atratividade ESG para fundos de investimento e crédito verde"
    ]
  },
  {
    id: "restauracao-vegetacao",
    title: "Restauração da Vegetação & Silvicultura",
    shortDescription: "Planejamento e execução de projetos de reflorestamento de espécies nativas, compensação florestal e recuperação de áreas de preservação.",
    fullDescription: "Recuperamos a biodiversidade e regeneramos ecossistemas degradados aliando ciência florestal à eficiência operacional. Desenhamos e implantamos projetos de alta taxa de pegada biológica, desde o plantio de mudas nativas até o monitoramento e manutenção de longo prazo necessários para homologação de TCRAs.",
    iconName: "Leaf",
    category: "restauracao",
    features: [
      "Reflorestamento com espécies nativas da Mata Atlântica e Cerrado",
      "Compensação Florestal e regularização de Reserva Legal (RL) e APP",
      "Execução e aprovação de Termos de Compromisso de Recuperação Ambiental (TCRA)",
      "Controle de erosão, enriquecimento florestal e adubação verde",
      "Inventário Florestal e marcação de árvores nativas para supressão direcionada",
      "Implantação de SAFs (Sistemas Agroflorestais) e projetos de créditos de carbono"
    ],
    benefits: [
      "Baixa taxa de mortalidade de mudas devido à nutrição assistida e seleção de matrizes",
      "Garantia de homologação plena dos relatórios junto aos órgãos ambientais",
      "Compensação ecológica maximizada com menor custo por hectare recuperado",
      "Geração de créditos de carbono e reabilitação hídrica local"
    ]
  }
];

export const teamValues: ValueCard[] = [
  {
    title: "Inovação Estratégica",
    description: "Unimos ferramentas tecnológicas de geoprocessamento e inteligência regulatória para encontrar caminhos rápidos e inovadores para a conformidade ambiental.",
    iconName: "Zap"
  },
  {
    title: "Custo-Benefício Real",
    description: "Projetamos soluções ecologicamente corretas com foco em eficiência financeira, evitando gastos desnecessários em licenciamentos ou multas por atraso.",
    iconName: "TrendingUp"
  },
  {
    title: "Transparência Absoluta",
    description: "Cada processo possui cronogramas claros, atualizações frequentes e canais abertos de comunicação com nossa equipe especializada.",
    iconName: "Eye"
  },
  {
    title: "Selo de Excelência",
    description: "Todas as nossas análises, laudos e projetos cumprem rigorosamente as diretrizes científicas e as melhores práticas metodológicas exigidas pelo mercado.",
    iconName: "Award"
  }
];

export const historyMilestones: Milestone[] = [
  {
    year: "2016",
    title: "Fundação da Solução Verde",
    description: "Início das atividades focadas em georreferenciamento de imóveis rurais e elaboração de Cadastro Ambiental Rural (CAR) em nível regional."
  },
  {
    year: "2018",
    title: "Expansão para Licenciamento Industrial",
    description: "Criação do braço de assessoria corporativa, conquistando clientes nos setores de agronegócio e manufatura química para obtenção de LP, LI e LO."
  },
  {
    year: "2020",
    title: "Divisão de Silvicultura e Restauração",
    description: "Inauguração da equipe própria de execução florestal, especializada em plantios nativos em grandes bacias hidrográficas sob Termos de Recuperação (TCRA)."
  },
  {
    year: "2023",
    title: "Consolidação Tecnológica e ESG",
    description: "Integração de ferramentas de sensoriamento remoto via satélite de alta definição e lançamento de nossa frente de consultoria em Sustentabilidade Estratégica Corporativa."
  },
  {
    year: "2026",
    title: "Referência no Setor",
    description: "Mais de 450 empresas licenciadas e mais de 120 hectares de vegetação nativa efetivamente restaurados ao longo do território nacional."
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "proj-restauracao-tcra",
    title: "Reflorestamento e Execução de TCRA Fluvial",
    category: "Restauração da Vegetação",
    location: "Interior de São Paulo",
    description: "Plantio e manutenção de 15.000 mudas nativas da Mata Atlântica para restauração de Área de Preservação Permanente (APP) fluvial, aprovado com 96% de sobrevivência vegetal em auditoria da CETESB.",
    impactMetrics: [
      "15.000 mudas plantadas",
      "9 hectares florestados",
      "Aprovação definitiva de TCRA ambiental"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "proj-eiarima-infra",
    title: "Estudo EIA/RIMA para Parque Logístico de Grande Porte",
    category: "Elaboração de Estudos Ambientais",
    location: "Região Metropolitana",
    description: "Coordenação multidisciplinar e elaboração de Estudos de Impacto Ambiental completos, englobando fauna, flora, contaminação do solo e ruídos para empreendimento de 450.000 m².",
    impactMetrics: [
      "Licença Prévia obtida em tempo recorde",
      "Projeto adaptado sem supressão de área de preservação",
      "Aprovado por unanimidade no órgão estadual"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "proj-gestao-pgrs",
    title: "Zero Waste & PGRS para Indústria Farmacêutica",
    category: "Assessoria Ambiental",
    location: "Pólo Industrial",
    description: "Reestruturação completa da gestão integrada de resíduos industriais, gerando um ganho financeiro direto com destinação assistida e introdução de práticas circulares de logística reversa.",
    impactMetrics: [
      "92% de desvio de aterro sanitário",
      "Economia de R$ 140k/ano em destinação",
      "Adequação plena ao PGRS regulatório"
    ],
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
  }
];

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "O que é Licenciamento Ambiental e minha empresa precisa dele?",
    answer: "O Licenciamento Ambiental é um procedimento administrativo obrigatório pelo qual o órgão competente licencia a localização, instalação, ampliação e a operação de empreendimentos e atividades utilizadoras de recursos ambientais consideradas efetiva ou potencialmente poluidoras. Se sua empresa atua na indústria, construção civil, agropecuária, mineração ou manipula resíduos, há uma alta probabilidade de que ela requeira licenciamento legal para operar em conformidade.",
    category: "Licenciamento"
  },
  {
    id: "faq-2",
    question: "Quanto tempo demora para se obter uma Licença de Operação (LO)?",
    answer: "O tempo de análise varia substancialmente de acordo com o órgão regulador, o estado federativo e a complexidade do empreendimento (baixo, médio ou alto impacto). Enquanto licenciamentos simplificados ou municipais podem levar de 30 a 90 dias, processos complexos com exigência de EIA/RIMA podem levar mais de 12 meses. A Solução Verde agiliza esse processo garantindo estudos iniciais precisos, evitando que o órgão ambiental envie exigências técnicas complementares que travam o processo.",
    category: "Prazos"
  },
  {
    id: "faq-3",
    question: "O que acontece se uma empresa operar sem licença ambiental?",
    answer: "A operação sem a devida documentação legal constitui crime ambiental sob a Lei nº 9.605/98, sujeitando o empreendimento e seus administradores a sanções graves, incluindo multas administrativas que variam de R$ 500 a R$ 50 milhões, interdição imediata das atividades, embargo das obras, além de prejuízos reputacionais perante bancos e investidores multinacionais.",
    category: "Legislação"
  },
  {
    id: "faq-4",
    question: "Como funciona um Termo de Compromisso de Recuperação Ambiental (TCRA)?",
    answer: "Um TCRA é um contrato vinculativo firmado entre o empreendedor e o órgão ambiental que fixa as condições para reparar danos biológicos provocados por supressão de vegetação ou intervenção em APP. O documento define o número exato de mudas nativas a serem plantadas, as técnicas de manejo e o tempo de acompanhamento (geralmente entre 2 a 5 anos). A equipe florestal da Solução Verde assegura a execução rigorosa para obtenção de laudos satisfatórios e liberação plena do termo.",
    category: "Florestal"
  },
  {
    id: "faq-5",
    question: "Como funciona o Diagnóstico Estratégico oferecido de forma digital no site?",
    answer: "Nosso Diagnóstico Estratégico online foi desenvolvido utilizando algoritmos de inteligência regulatória. Ele mapeia as variáveis principais das leis de compliance e da resolução CONAMA. Ao preencher dados de segmento, porte e situação, geramos instantaneamente as hipóteses de requisitos legais recomendados para que seu negócio cresça de forma protegida contra surpresas fiscalizadoras.",
    category: "Estratégica"
  }
];

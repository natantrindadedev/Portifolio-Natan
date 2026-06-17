export const projects = [
  {
    slug: "rodnei-lasmar-web-system",
    title: "Rodnei Lasmar Web System",
    area: {
      pt: "Desenvolvimento Full-Stack & Automação de Processos",
      en: "Full-Stack Development & Process Automation"
    },
    category: {
      pt: "Sistema Web Corporativo",
      en: "Corporate Web System"
    },
    stack: "React, Django, PostgreSQL, Docker",
    impact: {
      pt: "Redução de 40% no tempo de acompanhamento de tarefas",
      en: "40% reduction in task-tracking time"
    },
    shortDescription: {
      pt: "Sistema corporativo sob demanda desenvolvido para otimizar a gestão operacional interna e centralizar o acompanhamento de tarefas e fluxos de trabalho.",
      en: "Custom corporate web system developed to optimize internal operational management and centralize task and workflow tracking."
    },
    description: {
      pt: "Sistema web corporativo desenvolvido com Django, React, PostgreSQL e Docker, focado em automação de rotinas internas, controle operacional, tarefas, permissões e produtividade.",
      en: "Corporate web system built with Django, React, PostgreSQL, and Docker, focused on internal process automation, operational control, tasks, permissions, and productivity."
    },
    context: {
      pt: "A empresa necessitava otimizar a sua gestão operacional interna e centralizar o controle de demandas diárias de múltiplos operadores em um único ambiente auditável, eliminando controles paralelos e descentralizados.",
      en: "The company needed to optimize its internal operational management and centralize the tracking of daily demands from multiple operators in a single, auditable environment, eliminating parallel and decentralized controls."
    },
    challenge: {
      pt: "Os fluxos de trabalho eram controlados por planilhas individuais e mensagens de texto informais. Isso resultava em perda de prazos, falta de transparência no progresso de tarefas críticas, falhas de segurança e dificuldades na gestão de permissões de operadores.",
      en: "Workflows were managed via individual spreadsheets and informal text messages. This led to missed deadlines, a lack of transparency in critical task progress, security vulnerabilities, and difficulties in managing operator permissions."
    },
    solution: {
      pt: "Desenvolvimento de uma arquitetura modular de alto desempenho baseada em API REST com Django REST Framework no backend e React no frontend. Implementou-se controle de acesso baseado em perfis (RBAC), módulo de gerenciamento de tarefas com controle de prazos e anexos, além de conteinerização com Docker para facilitar o deployment em ambiente Windows Server.",
      en: "Development of a high-performance modular architecture based on a REST API with Django REST Framework on the backend and React on the frontend. The solution implemented Role-Based Access Control (RBAC), a task management module with deadlines and attachments, and containerization with Docker to facilitate deployment on Windows Server."
    },
    results: {
      pt: "Centralização de 100% das demandas operacionais em uma plataforma única. A automação das rotinas operacionais e notificações integradas reduziram o tempo de acompanhamento de tarefas em 40%, garantindo total governança e rastreabilidade sobre os dados sensíveis.",
      en: "100% centralization of operational demands into a single platform. The automation of operational routines and integrated notifications cut task-tracking time by 40%, ensuring complete governance and traceability over sensitive data."
    },
    technologies: ["Django", "React", "PostgreSQL", "Docker", "Tailwind CSS", "REST API", "Git"],
    gradient: "from-blue-600 via-indigo-950 to-slate-900",
    icon: "Layout"
  },
  {
    slug: "data-automation-python",
    title: "Data Automation with Python",
    area: {
      pt: "Engenharia de Dados & Automação",
      en: "Data Engineering & Automation"
    },
    category: {
      pt: "Engenharia de Dados",
      en: "Data Engineering"
    },
    stack: "Python, Pandas, OpenPyXL, SQL",
    impact: {
      pt: "Processamento de dados reduzido de 4 horas para 2 minutos",
      en: "Data processing cut from 4 hours to 2 minutes"
    },
    shortDescription: {
      pt: "Automação de pipelines de tratamento de dados operacionais e financeiros, focados na limpeza de dados legados e consolidação de relatórios.",
      en: "Automation of operational and financial data processing pipelines, focused on legacy data cleaning and report consolidation."
    },
    description: {
      pt: "Automações em Python para tratamento de grandes volumes de dados, padronização de planilhas, leitura de arquivos, geração de relatórios e redução de tarefas manuais.",
      en: "Python automations for processing large volumes of data, standardizing spreadsheets, reading files, generating reports, and reducing manual tasks."
    },
    context: {
      pt: "A equipe interna gastava grande parte do dia importando, sanitizando e consolidando bases de dados recebidas de múltiplos sistemas de parceiros, gerando um gargalo no fluxo de geração de relatórios.",
      en: "The internal team spent a significant part of their day importing, sanitizing, and consolidating databases received from multiple partner systems, creating a bottleneck in the reporting workflow."
    },
    challenge: {
      pt: "O tratamento manual de planilhas complexas com centenas de milhares de linhas era lento e propenso a erros de digitação, além de apresentar problemas frequentes de formatação inconsistente e tipos de dados incompatíveis.",
      en: "Manual processing of complex spreadsheets with hundreds of thousands of rows was slow and error-prone, additionally suffering from frequent formatting inconsistencies and incompatible data types."
    },
    solution: {
      pt: "Criação de scripts em Python utilizando Pandas para o carregamento, limpeza e transformação dos dados. A biblioteca OpenPyXL foi utilizada para aplicar a padronização visual das planilhas, inserção de fórmulas automáticas e exportação estruturada direta para relatórios executivos.",
      en: "Creation of Python scripts using Pandas for data loading, cleaning, and transformation. The OpenPyXL library was used to apply spreadsheet visual standardization, insert automatic formulas, and enable direct structured export to executive reports."
    },
    results: {
      pt: "Redução no tempo de processamento operacional de 4 horas diárias de trabalho manual para menos de 2 minutos via script. Garantiu 100% de consistência das informações, eliminando erros humanos na formatação e consolidação final.",
      en: "Reduced operational processing time from 4 hours of daily manual work to under 2 minutes via script. Achieved 100% information consistency, eliminating human errors in formatting and final consolidation."
    },
    technologies: ["Python", "Pandas", "NumPy", "OpenPyXL", "Excel Automation", "Git", "SQL"],
    gradient: "from-emerald-600 via-teal-950 to-slate-900",
    icon: "Terminal"
  },
  {
    slug: "power-bi-dashboards",
    title: "Power BI Dashboards",
    area: {
      pt: "Business Intelligence & Analytics",
      en: "Business Intelligence & Analytics"
    },
    category: {
      pt: "Business Intelligence",
      en: "Business Intelligence"
    },
    stack: "Power BI, DAX, Power Query, SQL",
    impact: {
      pt: "Aumento de 25% na eficiência operacional das equipes",
      en: "25% increase in team operational efficiency"
    },
    shortDescription: {
      pt: "Desenvolvimento de dashboards analíticos interativos para monitoramento estratégico de metas, desempenho de operadores e indicadores financeiros.",
      en: "Development of interactive analytical dashboards for strategic tracking of goals, operator performance, and financial indicators."
    },
    description: {
      pt: "Dashboards em Power BI para análise de metas, recebimentos, produção, operadores, credores e indicadores estratégicos.",
      en: "Power BI dashboards for analyzing goals, payments, production, operators, creditors, and strategic indicators."
    },
    context: {
      pt: "Os gestores da empresa dependiam de relatórios estáticos em PDF enviados semanalmente, impossibilitando a tomada de decisões imediatas baseadas em oscilações diárias de desempenho.",
      en: "Company managers relied on static PDF reports sent weekly, preventing immediate decisions based on daily performance fluctuations."
    },
    challenge: {
      pt: "Os dados de produção de operadores e cobranças estavam isolados e dispersos. Havia falta de padronização nas métricas de performance e dificuldade de filtrar as metas por operadores ou credores em tempo real.",
      en: "Operator production and billing data were isolated and dispersed. There was a lack of standardization in performance metrics and difficulty filtering goals by operators or creditors in real time."
    },
    solution: {
      pt: "Construção de pipelines de extração com SQL conectando a base PostgreSQL do ERP ao Power BI. Modelagem dimensional de dados (Star Schema), criação de métricas analíticas avançadas utilizando fórmulas DAX no Power Query e design de interface centrado na facilidade de navegação rápida por filtros dinâmicos.",
      en: "Construction of extraction pipelines with SQL connecting the ERP PostgreSQL database to Power BI. Dimensional data modeling (Star Schema), creation of advanced analytical metrics utilizing DAX formulas in Power Query, and an interface design centered on quick navigation via dynamic filters."
    },
    results: {
      pt: "Acesso em tempo real aos indicadores de desempenho da produção de operadores e cobranças de credores. O acesso às análises gerou um ganho de 25% na eficiência operacional geral das equipes através de decisões orientadas a dados.",
      en: "Real-time access to production and collection KPIs. The access to interactive reports generated a 25% gain in general team operational efficiency through data-driven decision making."
    },
    technologies: ["Power BI", "DAX", "Power Query", "SQL", "Pandas", "Relational Modeling"],
    gradient: "from-amber-600 via-orange-950 to-slate-900",
    icon: "BarChart"
  },
  {
    slug: "document-automation-system",
    title: "Document Automation System",
    area: {
      pt: "Automação de Processos (BPA)",
      en: "Business Process Automation (BPA)"
    },
    category: {
      pt: "Automação de Processos",
      en: "Process Automation"
    },
    stack: "Python, Django, PostgreSQL, PDF/Docx Libs",
    impact: {
      pt: "Tempo de elaboração de minutas reduzido em 95%",
      en: "Document preparation time reduced by 95%"
    },
    shortDescription: {
      pt: "Ferramenta para geração automática de contratos e documentos jurídicos a partir da inserção de variáveis dinâmicas em templates cadastrados.",
      en: "Tool for automated generation of contracts and legal documents based on dynamic variables input into registered templates."
    },
    description: {
      pt: "Sistema para geração automatizada de documentos com variáveis dinâmicas, reduzindo retrabalho e aumentando a padronização documental.",
      en: "System for automated document generation with dynamic variables, reducing rework and improving document standardization."
    },
    context: {
      pt: "A elaboração de contratos e minutas comerciais era feita individualmente de forma manual, exigindo que o operador editasse campos repetitivos um a um em softwares de texto tradicionais.",
      en: "The drafting of contracts and commercial minutes was done individually and manually, requiring the operator to edit repetitive fields one by one in traditional word processing software."
    },
    challenge: {
      pt: "O preenchimento manual de dezenas de campos variáveis resultava em erros de digitação frequentes, cláusulas antigas sendo reutilizadas erroneamente por engano e tempo excessivo gasto na conferência de cada documento.",
      en: "Manual entries of dozens of variable fields resulted in frequent typing errors, outdated clauses being mistakenly reused, and excessive time spent reviewing each document."
    },
    solution: {
      pt: "Desenvolvimento de uma ferramenta web com backend Django que armazena os templates e mapeia variáveis. O sistema utiliza bibliotecas Python de processamento documental para ler os templates, injetar os dados dinâmicos do formulário nos campos correspondentes do arquivo `.docx` e exportar o arquivo final em formato PDF.",
      en: "Development of a web tool with a Django backend that stores templates and maps variables. The system utilizes Python document processing libraries to parse templates, inject dynamic form data into corresponding fields in `.docx` files, and export the final file in PDF format."
    },
    results: {
      pt: "Redução no tempo de elaboração de documentos de 15 minutos para menos de 30 segundos por arquivo. Garantiu 100% de conformidade com os modelos jurídicos atualizados, eliminando falhas operacionais e retrabalho.",
      en: "Reduced document preparation time from 15 minutes to under 30 seconds per file. Ensured 100% compliance with updated legal templates, eliminating operational failures and rework."
    },
    technologies: ["Python", "Django", "PostgreSQL", "Docx Automation", "PDF Generation", "HTML5", "CSS3"],
    gradient: "from-purple-600 via-fuchsia-950 to-slate-900",
    icon: "FileText"
  },
  {
    slug: "internal-chat-task-system",
    title: "Internal Chat and Task System",
    area: {
      pt: "Desenvolvimento Full-Stack",
      en: "Full-Stack Development"
    },
    category: {
      pt: "Sistemas Web de Produtividade",
      en: "Productivity Web Systems"
    },
    stack: "React, Django, PostgreSQL, WebSockets",
    impact: {
      pt: "Centralização completa de 100% das comunicações",
      en: "Complete centralization of 100% of task communications"
    },
    shortDescription: {
      pt: "Sistema web focado em centralizar as tarefas diárias e a comunicação operacional das equipes em um único ambiente auditável.",
      en: "Web system focused on centralizing daily tasks and team operational communication in a single, auditable environment."
    },
    description: {
      pt: "Sistema interno com chat, tarefas, anexos e organização operacional para centralizar a comunicação e melhorar o acompanhamento das demandas.",
      en: "Internal system with chat, tasks, attachments, and operational organization to centralize communication and improve task tracking."
    },
    context: {
      pt: "A equipe trocava feedbacks e informações críticas de tarefas por meio de aplicativos de mensagens instantâneas externos sem associação com o andamento das demandas.",
      en: "The team exchanged critical task feedback and details through external messaging apps, which had no integration with the progress of the demands."
    },
    challenge: {
      pt: "Informações importantes de projetos e anexos eram perdidos nos históricos das conversas informais, gerando falha operacional por falta de alinhamento e atrasos no acompanhamento de prazos de entregas.",
      en: "Important project information and attachments were lost in informal chat histories, leading to operational failures due to a lack of alignment and delays in tracking delivery deadlines."
    },
    solution: {
      pt: "Integração de WebSockets no Django (Django Channels) para habilitar chat em tempo real vinculado a cada cartão de tarefa individual. No frontend React, foi criada uma interface fluida com controle de notificações, upload seguro de anexos e controle de status de tarefas em tempo real.",
      en: "Integration of WebSockets in Django (Django Channels) to enable real-time chat linked directly to each individual task card. A fluid interface was built on the React frontend, featuring real-time notifications, secure attachment uploads, and live task status controls."
    },
    results: {
      pt: "Centralização completa das conversas e documentos vinculados às suas respectivas tarefas. A facilidade de acompanhamento eliminou ruídos operacionais e garantiu total rastreabilidade histórica dos processos.",
      en: "Complete centralization of conversations and documents linked directly to their respective tasks. The streamlined tracking eliminated operational issues and guaranteed total historical traceability of processes."
    },
    technologies: ["React", "Django REST Framework", "PostgreSQL", "WebSockets", "Django Channels", "Tailwind CSS"],
    gradient: "from-indigo-600 via-blue-950 to-slate-900",
    icon: "MessageSquare"
  },
  {
    slug: "financial-risk-analytics-platform",
    title: "Financial Risk Analytics Platform",
    area: {
      pt: "Análise de Dados & Modelagem Financeira",
      en: "Data Analysis & Financial Modeling"
    },
    category: {
      pt: "Modelagem Financeira",
      en: "Financial Modeling"
    },
    stack: "Python, Pandas, SQL Server, Power BI",
    impact: {
      pt: "Redução de 15% na taxa de inadimplência de crédito",
      en: "15% reduction in credit default rates"
    },
    shortDescription: {
      pt: "Plataforma interna para análise quantitativa de risco de crédito, integrando dados cadastrais, histórico de pagamentos e scores estatísticos.",
      en: "Internal platform for quantitative credit risk analysis, integrating registration data, payment history, and statistical scores."
    },
    description: {
      pt: "Plataforma para consolidação cadastral, cálculo de score estatístico de risco e acompanhamento de carteiras de crédito utilizando Python e SQL Server.",
      en: "Platform for registration consolidation, statistical risk scoring, and credit portfolio tracking utilizing Python and SQL Server."
    },
    context: {
      pt: "A concessão de crédito a clientes comerciais dependia de análises lentas baseadas em processos manuais de consulta a bases públicas e bureaus de crédito, gerando lentidão operacional e risco elevado de inadimplência.",
      en: "Approving credit for business clients relied on slow, manual query-based analysis across public databases and credit bureaus, leading to operational delays and high default risks."
    },
    challenge: {
      pt: "Consolidar dados de faturamento históricos fragmentados, aplicar regras de restrição financeira de bureaus e calcular a classificação de risco em tempo real sem causar lentidão no processo comercial.",
      en: "Consolidating fragmented historical revenue data, applying financial restriction rules from credit bureaus, and calculating risk classifications in real time without bottlenecking the sales pipeline."
    },
    solution: {
      pt: "Desenvolvimento de um motor de regras estatísticas em Python com Pandas para higienizar e consolidar o histórico financeiro dos proponentes. Integração via API a serviços de consulta cadastral e modelagem de um painel de riscos corporativos no Power BI conectado ao banco de dados relacional SQL Server.",
      en: "Development of a statistical rules engine in Python using Pandas to clean and consolidate applicants' financial history. Integration via API with public registration services and modeling of a corporate risk dashboard in Power BI connected to a SQL Server relational database."
    },
    results: {
      pt: "Automatização completa do score de risco, reduzindo o tempo de análise de propostas em 70%. O suporte à decisão gerou uma redução de 15% na taxa de inadimplência na carteira de crédito ativa da empresa.",
      en: "Fully automated risk scoring, reducing proposal analysis time by 70%. The decision support system led to a 15% reduction in default rates across the company's active credit portfolio."
    },
    technologies: ["Python", "Pandas", "SQL Server", "Power BI", "REST APIs", "Relational Modeling", "Git"],
    gradient: "from-sky-700 via-slate-900 to-slate-950",
    icon: "BarChart"
  },
  {
    slug: "workflow-automation-hub",
    title: "Workflow Automation Hub",
    area: {
      pt: "Desenvolvimento Backend & Integrações",
      en: "Backend Development & Integrations"
    },
    category: {
      pt: "Automação Backend",
      en: "Backend Automation"
    },
    stack: "FastAPI, Redis, Celery, PostgreSQL, Docker",
    impact: {
      pt: "Mais de 10.000 requisições diárias processadas em background",
      en: "Over 10,000 daily requests processed in background"
    },
    shortDescription: {
      pt: "Hub de orquestração de tarefas assíncronas e integrações entre sistemas legados e APIs de terceiros.",
      en: "Orchestration hub for asynchronous tasks and integrations between legacy systems and third-party APIs."
    },
    description: {
      pt: "API de alta performance desenvolvida com FastAPI para orquestração de tarefas assíncronas em segundo plano e processamento de dados sob agendamento.",
      en: "High-performance API built with FastAPI to orchestrate background asynchronous tasks and process scheduled data batches."
    },
    context: {
      pt: "A infraestrutura de sistemas internos sofria com lentidão severa e timeout ao tentar rodar rotinas pesadas (geração de planilhas gigantescas e envios massivos de emails/mensagens) diretamente no fluxo síncrono das requisições web.",
      en: "The internal system infrastructure suffered from severe slowness and timeouts when executing heavy routines (massive spreadsheet generations and bulk email/message dispatches) directly in the synchronous web request thread."
    },
    challenge: {
      pt: "Evitar o bloqueio da interface do usuário durante o processamento de grandes lotes de dados operacionais e garantir o reprocessamento de tarefas em caso de falha de conexão com APIs externas.",
      en: "Preventing UI freeze during the processing of large operational data batches and ensuring task retries in case of connection drops with external APIs."
    },
    solution: {
      pt: "Construção de uma API assíncrona robusta utilizando FastAPI. Implementação de fila de processamento secundário em Celery utilizando Redis como message broker. Configuração de retry com backoff exponencial para requisições externas e conteinerização do ambiente com Docker Compose.",
      en: "Construction of a robust asynchronous API using FastAPI. Implementation of a background processing queue in Celery utilizing Redis as a message broker. Configuration of retries with exponential backoff for external requests, and containerization via Docker Compose."
    },
    results: {
      pt: "Mais de 10.000 requisições diárias processadas de forma assíncrona em segundo plano sem qualquer impacto na navegação. A taxa de indisponibilidade da aplicação web caiu a zero.",
      en: "Over 10,000 daily requests processed asynchronously in the background with zero navigation impact. The web application's downtime rate dropped to zero."
    },
    technologies: ["FastAPI", "Redis", "Celery", "PostgreSQL", "Docker", "Asynchronous Programming", "Git"],
    gradient: "from-cyan-700 via-zinc-900 to-slate-950",
    icon: "Terminal"
  },
  {
    slug: "business-intelligence-data-warehouse",
    title: "Business Intelligence Data Warehouse",
    area: {
      pt: "Engenharia de Dados & Modelagem Dimensional",
      en: "Data Engineering & Dimensional Modeling"
    },
    category: {
      pt: "Engenharia de Dados",
      en: "Data Engineering"
    },
    stack: "PostgreSQL, Python, dbt, Power BI",
    impact: {
      pt: "Unificação de 5 fontes de dados isoladas e relatórios rápidos",
      en: "Unification of 5 isolated data sources & fast reports"
    },
    shortDescription: {
      pt: "Estruturação de um Data Warehouse corporativo centralizando bancos relacionais, CRMs e planilhas internas no modelo Star Schema.",
      en: "Structuring of a corporate Data Warehouse centralizing relational databases, CRMs, and internal spreadsheets in a Star Schema."
    },
    description: {
      pt: "Armazém de dados estruturado em PostgreSQL utilizando dbt para aplicação de regras de negócio transformacionais e testes de qualidade de dados.",
      en: "Structured data warehouse in PostgreSQL utilizing dbt for transformational business rules and data quality checks."
    },
    context: {
      pt: "Os dados de faturamento, metas comerciais, produção e dados do CRM estavam dispersos em locais isolados. Os analistas despendiam cerca de 3 dias por semana compilando dados manualmente para enviar à diretoria.",
      en: "Billing, commercial goals, production, and CRM data were scattered across isolated repositories. Analysts spent about 3 days per week manually compiling data to report to directors."
    },
    challenge: {
      pt: "Limpar e padronizar inconsistências de chaves entre sistemas legados distintos e manter a integridade dos dados históricos agregados durante a atualização diária dos painéis estratégicos.",
      en: "Cleaning and standardizing key inconsistencies between distinct legacy systems and maintaining historical data integrity during daily updates of strategic dashboards."
    },
    solution: {
      pt: "Construção de rotinas de extração (ETL) em Python. Implementou-se o framework dbt (Data Build Tool) sobre o banco de dados PostgreSQL para organizar as camadas de dados (staging, marts) e aplicar testes de integridade. Modelou-se Tabelas Fato e Dimensão no formato Star Schema consumidos diretamente pelo Power BI.",
      en: "Construction of extraction routines (ETL) in Python. The dbt (Data Build Tool) framework was implemented over a PostgreSQL database to organize data layers (staging, marts) and apply integrity tests. Dimensional Fact and Dimension tables were built in a Star Schema format for direct consumption in Power BI."
    },
    results: {
      pt: "Unificação completa de 5 fontes de dados isoladas. O tempo necessário para a geração de relatórios gerenciais consolidados caiu de 3 dias para menos de 5 minutos, garantindo dados íntegros e auditáveis.",
      en: "Complete unification of 5 isolated data sources. The time needed to generate consolidated management reports fell from 3 days to under 5 minutes, ensuring consistent and auditable data."
    },
    technologies: ["PostgreSQL", "dbt", "Python", "Power BI", "Data Modeling", "ETL Pipelines", "Git"],
    gradient: "from-blue-700 via-slate-900 to-slate-950",
    icon: "BarChart"
  }
];

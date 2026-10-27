const QUESTIONS = [
        {
          n: 1,
          context:
            "Uma startup de e-commerce precisa calcular o valor total de um carrinho de compras. O sistema deve somar o preço de cada produto adicionado e, ao final, aplicar um cupom de desconto de 10% se o valor total ultrapassar R$ 200,00.",
          question:
            "Qual estrutura de controle é a mais adequada para verificar se o desconto deve ser aplicado?",
          options: [
            "Estrutura de repetição para (for)",
            "Estrutura de seleção escolha-caso (switch-case)",
            "Estrutura de repetição enquanto (while)",
            "Estrutura condicional se-senão (if-else)",
            "Declaração de uma variável",
          ],
          answer: 3,
          section: "Lógica de Programação e Algoritmos",
        },
        {
          n: 2,
          context:
            "Um desenvolvedor precisa criar um algoritmo para exibir os números de 1 a 50 na tela. Ele precisa escolher a estrutura de repetição mais eficiente para essa tarefa, onde o número de iterações é conhecido previamente.",
          question:
            "Qual das seguintes estruturas de repetição é a mais indicada para executar um bloco de código um número predeterminado de vezes?",
          options: [
            "se (if)",
            "enquanto (while)",
            "para (for)",
            "repita-até (do-while)",
            "escolha-caso (switch-case)",
          ],
          answer: 2,
          section: "Lógica de Programação e Algoritmos",
        },
        {
          n: 3,
          context:
            "Uma equipe de desenvolvimento está trabalhando em um projeto colaborativo e precisa gerenciar as diferentes versões do código-fonte. Cada desenvolvedor trabalha em uma funcionalidade específica e, ao final do dia, precisa submeter suas alterações para um repositório central na nuvem.",
          question:
            "Qual comando do Git é utilizado para enviar as alterações locais (commits) para um repositório remoto, como o GitHub?",
          options: [
            "git pull",
            "git commit",
            "git clone",
            "git push",
            "git init",
          ],
          answer: 3,
          section: "Lógica de Programação e Algoritmos",
        },
        {
          n: 4,
          context:
            "Ao desenvolver um sistema de cadastro de usuários, um programador precisa armazenar temporariamente o nome, a idade e o e-mail de cada novo usuário antes de salvá-los no banco de dados. Esses dados variam para cada usuário que se cadastra.",
          question:
            "Que elemento da lógica de programação deve ser utilizado para armazenar esses valores que podem ser alterados durante a execução do programa?",
          options: [
            "Constante",
            "Variável",
            "Operador",
            "Laço de repetição",
            "Fluxograma",
          ],
          answer: 1,
          section: "Lógica de Programação e Algoritmos",
        },
        {
          n: 5,
          context:
            'Um programador está escrevendo um código e deseja garantir que ele seja legível e de fácil manutenção para outros membros da equipe. Ele decide seguir as práticas de "clean code" (código limpo).',
          question:
            "Qual das seguintes ações está alinhada com as técnicas de código limpo?",
          options: [
            "Utilizar nomes de variáveis curtos e genéricos, como x, a e n, para economizar espaço.",
            "Criar funções longas que realizam múltiplas tarefas para centralizar a lógica em um único lugar.",
            "Escrever comentários explicando o que cada linha de código faz, mesmo as mais óbvias.",
            "Utilizar nomes de variáveis e funções que descrevam claramente seu propósito, como calcularTotalVenda ou nomeUsuario.",
            "Evitar a indentação do código para que ele ocupe menos linhas verticais.",
          ],
          answer: 3,
          section: "Lógica de Programação e Algoritmos",
        },
        {
          n: 6,
          context:
            "Uma equipe de desenvolvimento foi contratada para criar um sistema de gestão para uma clínica médica. O cliente informou que o sistema deve permitir o agendamento de consultas, mas também mencionou que o sistema precisa ser rápido e responder às ações do usuário em menos de 2 segundos.",
          question:
            'Como são classificados, respectivamente, o requisito de "agendar consultas" e o requisito de "responder em menos de 2 segundos"?',
          options: [
            "Requisito funcional e Requisito não funcional",
            "Requisito não funcional e Requisito funcional",
            "Requisito de negócio e Requisito de usuário",
            "Requisito funcional e Requisito de sistema",
            "Requisito de usabilidade e Requisito de performance",
          ],
          answer: 0,
          section: "Levantamento de Requisitos",
        },
        {
          n: 7,
          context:
            "Um analista de sistemas está iniciando um projeto para uma loja de varejo e precisa entender as necessidades dos stakeholders. Ele decide agendar reuniões com os gerentes, vendedores e operadores de caixa para coletar informações detalhadas sobre os processos atuais e as expectativas para o novo software.",
          question:
            "Qual técnica de levantamento de requisitos está sendo aplicada pelo analista?",
          options: [
            "Brainstorming",
            "Prototipação",
            "Entrevista",
            "Etnografia (Observação)",
            "Análise de documentação",
          ],
          answer: 2,
          section: "Levantamento de Requisitos",
        },
        {
          n: 8,
          context:
            "Uma equipe ágil está utilizando o Scrum para gerenciar o desenvolvimento de um aplicativo. O Product Owner (PO) é responsável por manter uma lista ordenada de todas as funcionalidades, melhorias e correções desejadas para o produto. Essa lista é a única fonte de trabalho para a equipe de desenvolvimento.",
          question:
            "Como é chamado esse artefato do Scrum que consiste em uma lista priorizada de requisitos?",
          options: [
            "Sprint Backlog",
            "Product Backlog",
            "Quadro Kanban",
            "Burndown Chart",
            "Daily Scrum",
          ],
          answer: 1,
          section: "Levantamento de Requisitos",
        },
        {
          n: 9,
          context:
            'Durante o desenvolvimento de um software para uma transportadora, o cliente solicita uma nova funcionalidade: "o sistema deve ser fácil de usar". O analista de requisitos percebe que essa solicitação é subjetiva e precisa ser detalhada para que a equipe possa implementá-la e testá-la.',
          question:
            "Qual ação o analista deve tomar para refinar esse requisito e torná-lo validável?",
          options: [
            "Aceitar o requisito como está, pois a facilidade de uso será percebida naturalmente pelos desenvolvedores.",
            'Rejeitar o requisito, pois "fácil de usar" não é uma funcionalidade técnica.',
            'Transformar o requisito em critérios mensuráveis, como "um novo funcionário deve ser capaz de despachar uma encomenda após no máximo 30 minutos de treinamento".',
            "Adicionar o requisito ao final da lista de prioridades, já que não é uma função essencial.",
            "Pedir para a equipe de design criar uma interface bonita, pois isso garante a facilidade de uso.",
          ],
          answer: 2,
          section: "Levantamento de Requisitos",
        },
        {
          n: 10,
          context:
            'Uma equipe de desenvolvimento está adotando a metodologia Kanban para gerenciar seu fluxo de trabalho. Eles criaram um quadro com as colunas "A Fazer" (To Do), "Em Andamento" (Doing) e "Feito" (Done). Para evitar gargalos, a equipe decidiu que a coluna "Em Andamento" não pode ter mais de três tarefas simultaneamente.',
          question:
            'Qual princípio do Kanban está sendo aplicado ao limitar o número de tarefas na coluna "Em Andamento"?',
          options: [
            "Visualizar o fluxo de trabalho",
            "Gerenciar o fluxo",
            "Limitar o Trabalho em Progresso (WIP)",
            "Tornar as políticas do processo explícitas",
            "Implementar ciclos de feedback",
          ],
          answer: 2,
          section: "Levantamento de Requisitos",
        },
        {
          n: 11,
          context:
            "Uma empresa está projetando sua rede de computadores. A administração precisa que todos os computadores de um departamento possam se comunicar diretamente entre si, sem depender de um servidor central para intermediar a comunicação. A ideia é que, se um computador falhar, a rede continue funcionando normalmente entre os demais.",
          question:
            "Qual tipo de arquitetura de rede atende a esse requisito de comunicação direta entre os dispositivos?",
          options: [
            "Cliente-Servidor",
            "Peer-to-Peer (P2P)",
            "Em Anel (Ring)",
            "Em Árvore (Hierárquica)",
            "Em Camadas",
          ],
          answer: 1,
          section: "Arquitetura de Redes com IoT",
        },
        {
          n: 12,
          context:
            "Um técnico de redes precisa configurar um novo computador em uma rede local (LAN). Para que este computador possa acessar a internet, ele precisa de um endereço IP, uma máscara de sub-rede e o endereço de um dispositivo que encaminha o tráfego para fora da rede local.",
          question:
            "Qual equipamento de rede é responsável por interconectar redes diferentes, como a rede local da empresa e a internet, e encaminhar os pacotes entre elas?",
          options: ["Switch", "Access Point", "Roteador", "Firewall", "Modem"],
          answer: 2,
          section: "Arquitetura de Redes com IoT",
        },
        {
          n: 13,
          context:
            "Um desenvolvedor está criando uma aplicação de Internet das Coisas (IoT) com sensores de baixo consumo de energia que precisam enviar pequenas quantidades de dados (telemetria) para um servidor central. O protocolo de comunicação deve ser leve, eficiente e operar sobre TCP/IP, sendo ideal para ambientes com restrições de banda e hardware.",
          question:
            "Qual protocolo, projetado para mensagens no modelo publicar/assinar (publish/subscribe), é o mais adequado para essa aplicação de IoT?",
          options: [
            "HTTP (Hypertext Transfer Protocol)",
            "FTP (File Transfer Protocol)",
            "RDP (Remote Desktop Protocol)",
            "MQTT (Message Queuing Telemetry Transport)",
            "TCP (Transmission Control Protocol)",
          ],
          answer: 3,
          section: "Arquitetura de Redes com IoT",
        },
        {
          n: 14,
          context:
            "Uma empresa está expandindo e precisa de mais endereços IP do que o permitido pela faixa privada padrão 192.168.1.0/24. O administrador de redes decide usar o protocolo de endereçamento que oferece um espaço de endereçamento vastamente maior, permitindo que praticamente todos os dispositivos do mundo tenham um endereço único.",
          question:
            "Qual versão do Protocolo de Internet (IP) oferece essa capacidade de endereçamento expandida?",
          options: ["IPv2", "IPv4", "IPv6", "TCP/IP", "MAC Address"],
          answer: 2,
          section: "Arquitetura de Redes com IoT",
        },
        {
          n: 15,
          context:
            "Um desenvolvedor precisa garantir que a comunicação entre o navegador de um cliente e o servidor web de sua aplicação seja segura, protegendo os dados contra interceptação. Para isso, ele implementa um certificado de segurança no servidor.",
          question:
            "Qual serviço de rede, que opera na camada de aplicação, é a versão segura do protocolo de navegação web?",
          options: [
            "FTP (File Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "Telnet",
            "HTTP (Hypertext Transfer Protocol)",
            "HTTPS (Hypertext Transfer Protocol Secure)",
          ],
          answer: 4,
          section: "Arquitetura de Redes com IoT",
        },
        {
          n: 16,
          context:
            "Um usuário está trabalhando em um sistema operacional com interface gráfica, como o Windows ou o Ubuntu. Ele precisa criar uma nova pasta em sua área de trabalho para organizar seus arquivos de projeto.",
          question:
            "Qual é a ação mais comum em um modo gráfico para criar um novo diretório?",
          options: [
            "Digitar o comando mkdir em um terminal.",
            'Clicar com o botão direito do mouse na área de trabalho, selecionar a opção "Novo" e depois "Pasta".',
            "Editar um arquivo de configuração do sistema para alocar espaço para a nova pasta.",
            "Reiniciar o computador para que o sistema crie pastas padrão.",
            "Arrastar um arquivo para um espaço vazio da área de trabalho.",
          ],
          answer: 1,
          section: "Sistemas Operacionais",
        },
        {
          n: 17,
          context:
            "Um administrador de sistemas precisa remover um diretório chamado temp_files que contém vários arquivos e subdiretórios, utilizando a linha de comando em um sistema operacional baseado em Linux.",
          question:
            "Qual comando deve ser utilizado para excluir o diretório e todo o seu conteúdo de forma recursiva?",
          options: [
            "del temp_files",
            "rmdir temp_files",
            "rm -r temp_files",
            "erase temp_files",
            "clear temp_files",
          ],
          answer: 2,
          section: "Sistemas Operacionais",
        },
        {
          n: 18,
          context:
            'Uma empresa quer garantir que apenas funcionários do departamento de finanças possam acessar a pasta de "Relatórios Financeiros" em um servidor de arquivos. O administrador do sistema precisa configurar as permissões de acesso.',
          question:
            "Qual conceito de sistema operacional está diretamente relacionado ao controle de quem pode ler, escrever ou executar arquivos e diretórios?",
          options: [
            "Gerenciamento de memória",
            "Sistema de arquivos",
            "Gerenciamento de processos",
            "Gerenciamento de usuários e permissões",
            "Interface de linha de comando",
          ],
          answer: 3,
          section: "Sistemas Operacionais",
        },
        {
          n: 19,
          context:
            "Para proteger a rede interna de uma empresa contra acessos não autorizados vindos da internet, o administrador de sistemas configura uma barreira de segurança no sistema operacional do servidor de borda. Essa barreira inspeciona os pacotes de rede de entrada e saída e os bloqueia ou permite com base em um conjunto de regras de segurança.",
          question:
            "Qual componente de segurança do sistema operacional realiza essa função de filtragem de tráfego de rede?",
          options: [
            "Antivírus",
            "VPN (Virtual Private Network)",
            "Firewall",
            "Gerenciador de senhas",
            "Sistema de detecção de intrusos (IDS)",
          ],
          answer: 2,
          section: "Sistemas Operacionais",
        },
        {
          n: 20,
          context:
            "Um desenvolvedor precisa testar sua aplicação em diferentes sistemas operacionais (Windows, Linux e macOS) sem precisar de múltiplas máquinas físicas. Ele decide instalar e executar esses sistemas operacionais dentro de seu computador principal.",
          question:
            "Qual tecnologia permite a criação e execução de múltiplos sistemas operacionais em um único hardware físico?",
          options: [
            "Instalação em dual boot",
            "Máquinas virtuais (Virtualização)",
            "Contêineres (ex: Docker)",
            "Acesso remoto (RDP/SSH)",
            "Computação em nuvem (Cloud Computing)",
          ],
          answer: 1,
          section: "Sistemas Operacionais",
        },
        {
          n: 21,
          context:
            "Um desenvolvedor está projetando um banco de dados para um sistema de blog. Ele precisa de uma tabela para armazenar os posts e outra para os comentarios. Cada comentário deve estar obrigatoriamente associado a um único post.",
          question:
            "Qual mecanismo de banco de dados relacional deve ser usado na tabela comentarios para garantir a integridade do relacionamento com a tabela posts?",
          options: [
            "Chave primária (Primary Key) na tabela comentarios.",
            "Chave estrangeira (Foreign Key) na tabela comentarios referenciando a chave primária de posts.",
            "Um índice único (Unique Index) na coluna de texto do comentário.",
            "Um campo do tipo TEXT para armazenar o título do post original.",
            "Uma trigger que verifica a existência do post a cada inserção.",
          ],
          answer: 1,
          section: "Banco de Dados",
        },
        {
          n: 22,
          context:
            "Um analista de banco de dados precisa criar a estrutura de uma nova tabela de Clientes. Depois de criada, ele precisará inserir os dados dos clientes nessa tabela.",
          question:
            "Quais subconjuntos da linguagem SQL são usados, respectivamente, para criar a tabela e para inserir os dados?",
          options: [
            "DML (Data Manipulation Language) e DDL (Data Definition Language)",
            "DDL (Data Definition Language) e DML (Data Manipulation Language)",
            "DCL (Data Control Language) e DML (Data Manipulation Language)",
            "DDL (Data Definition Language) e DQL (Data Query Language)",
            "DQL (Data Query Language) e DCL (Data Control Language)",
          ],
          answer: 1,
          section: "Banco de Dados",
        },
        {
          n: 23,
          context:
            "Um desenvolvedor precisa obter uma lista com o nome de todos os funcionários e o nome de seus respectivos departamentos. Os dados dos funcionários estão na tabela Funcionarios e os dados dos departamentos estão na tabela Departamentos, ambas relacionadas por um departamento_id.",
          question:
            "Qual cláusula SQL é a mais apropriada para combinar as informações das duas tabelas e retornar apenas os funcionários que possuem um departamento correspondente?",
          options: ["GROUP BY", "WHERE", "ORDER BY", "UNION", "INNER JOIN"],
          answer: 4,
          section: "Banco de Dados",
        },
        {
          n: 24,
          context:
            "Ao analisar uma tabela de Pedidos, um DBA (Administrador de Banco de Dados) percebe que o endereço completo do cliente (rua, cidade, estado, CEP) está repetido em cada pedido que o cliente faz. Isso causa redundância e pode levar a inconsistências se o cliente se mudar.",
          question:
            "Qual processo de design de banco de dados visa reduzir a redundância de dados e melhorar a integridade, organizando as colunas e tabelas de forma eficiente?",
          options: [
            "Indexação",
            "Normalização",
            "Transação",
            "Backup",
            "Agregação",
          ],
          answer: 1,
          section: "Banco de Dados",
        },
        {
          n: 25,
          context:
            "Uma empresa de análise de dados está trabalhando com um grande volume de informações não estruturadas, como posts de redes sociais, logs de servidores e documentos JSON. A estrutura desses dados muda constantemente, e a prioridade é a flexibilidade e a escalabilidade horizontal.",
          question:
            "Qual tipo de Sistema Gerenciador de Banco de Dados (SGBD) é mais adequado para esse cenário que não exige um esquema rígido e predefinido?",
          options: [
            "Relacional (ex: MySQL, PostgreSQL)",
            "Hierárquico (ex: IMS)",
            "Não relacional (NoSQL) (ex: MongoDB, Cassandra)",
            "Em rede (ex: IDMS)",
            "Orientado a Objetos (ex: ObjectDB)",
          ],
          answer: 2,
          section: "Banco de Dados",
        },
        {
          n: 26,
          context:
            "Um desenvolvedor web iniciante está criando sua primeira página HTML. Ele precisa definir a estrutura básica do documento, incluindo a área onde o conteúdo visível para o usuário será inserido e a área para metadados, como o título da página.",
          question:
            "Quais são as três tags essenciais que formam o esqueleto de qualquer documento HTML5?",
          options: [
            "<div>, <span>, <p>",
            "<html>, <head>, <body>",
            "<header>, <footer>, <main>",
            "<h1>, <p>, <a>",
            "<form>, <input>, <button>",
          ],
          answer: 1,
          section: "Linguagem de Marcação",
        },
        {
          n: 27,
          context:
            'Um web designer criou um layout para um site e entregou ao desenvolvedor. O layout especifica que todos os títulos principais devem ter a cor azul e a fonte "Arial", enquanto os links devem ficar sublinhados apenas quando o mouse passar por cima.',
          question:
            "Qual tecnologia é responsável por aplicar esses estilos visuais (cores, fontes, espaçamentos e efeitos) aos elementos HTML?",
          options: [
            "HTML (Hypertext Markup Language)",
            "JavaScript",
            "SQL (Structured Query Language)",
            "CSS (Cascading Style Sheets)",
            "PHP (Hypertext Preprocessor)",
          ],
          answer: 3,
          section: "Linguagem de Marcação",
        },
        {
          n: 28,
          context:
            "Um desenvolvedor está criando o layout de um blog e quer garantir que o código seja semântico, ou seja, que as tags HTML utilizadas descrevam o significado do conteúdo para os navegadores e mecanismos de busca. Ele precisa marcar a área principal de conteúdo da página, que contém o artigo do blog.",
          question:
            "Qual tag semântica do HTML5 deve ser usada para envolver o conteúdo principal e único de uma página?",
          options: [
            '<div id="main-content">',
            "<section>",
            "<article>",
            "<main>",
            "<content>",
          ],
          answer: 3,
          section: "Linguagem de Marcação",
        },
        {
          n: 29,
          context:
            'Um desenvolvedor front-end precisa estilizar elementos de uma página. Ele quer aplicar um estilo (borda vermelha) a um único elemento específico da página: o logotipo principal, que possui o id="logo". Ele também quer aplicar outro estilo (texto em cinza) a vários elementos que funcionam como avisos, todos marcados com class="alert".',
          question:
            "Quais seletores CSS devem ser usados para estilizar o logotipo e os avisos, respectivamente?",
          options: [
            "Seletor de classe (.logo) e seletor de ID (#alert)",
            "Seletor de tag (logo) e seletor de classe (.alert)",
            "Seletor de ID (#logo) e seletor de classe (.alert)",
            "Seletor de classe (.logo) e seletor de tag (alert)",
            "Seletor de ID (#logo) e seletor de ID (#alert)",
          ],
          answer: 2,
          section: "Linguagem de Marcação",
        },
        {
          n: 30,
          context:
            "Um designer está explicando para um desenvolvedor como o espaçamento de um botão deve ser implementado. Ele especifica que deve haver um espaço de 20 pixels entre o conteúdo de texto do botão e sua borda, e um espaço de 30 pixels entre a borda do botão e os elementos externos ao redor dele.",
          question:
            "Quais propriedades do Box Model do CSS correspondem, respectivamente, ao espaçamento interno (texto-borda) e ao espaçamento externo (borda-elementos vizinhos)?",
          options: [
            "margin e padding",
            "padding e margin",
            "border e margin",
            "padding e border",
            "content e margin",
          ],
          answer: 1,
          section: "Linguagem de Marcação",
        },
        {
          n: 31,
          context:
            'Um desenvolvedor está construindo uma API para uma aplicação móvel. A arquitetura definida para a API deve ser "stateless", ou seja, cada requisição do cliente para o servidor deve conter toda a informação necessária para ser processada, sem que o servidor precise guardar o estado do cliente. Os dados devem ser expostos como recursos acessíveis por URLs e manipulados com os verbos HTTP padrão.',
          question:
            "Qual estilo arquitetural para a criação de web services é baseado nesses princípios de recursos, URLs e comunicação stateless?",
          options: [
            "SOAP (Simple Object Access Protocol)",
            "MVC (Model-View-Controller)",
            "Singleton",
            "GraphQL",
            "REST (Representational State Transfer)",
          ],
          answer: 4,
          section: "Programação Back-End",
        },
        {
          n: 32,
          context:
            "Ao desenvolver uma API RESTful, um programador precisa criar um endpoint para que os usuários possam cadastrar um novo produto no sistema. A requisição enviada pelo cliente conterá os dados do novo produto (nome, preço, estoque) no corpo da mensagem, em formato JSON.",
          question:
            "Qual método HTTP é semanticamente o mais apropriado para a criação de um novo recurso no servidor?",
          options: ["GET", "PUT", "POST", "DELETE", "PATCH"],
          answer: 2,
          section: "Programação Back-End",
        },
        {
          n: 33,
          context:
            'Um programador está desenvolvendo um sistema em Java e precisa modelar o conceito de um "Veículo". Ele cria uma estrutura que serve como um molde, definindo os atributos que todo veículo terá (como cor, marca, ano) e os comportamentos que ele poderá executar (como ligar(), acelerar() e frear()).',
          question:
            "No paradigma da Programação Orientada a Objetos, como é chamada essa estrutura que serve de molde para a criação de objetos?",
          options: ["Variável", "Função", "Pacote", "Classe", "Interface"],
          answer: 3,
          section: "Programação Back-End",
        },
        {
          n: 34,
          context:
            'Uma aplicação web precisa acessar um endpoint de API que requer autenticação. Após o login, o servidor envia ao cliente um "token" de acesso. Para as requisições seguintes a endpoints protegidos, o cliente deve enviar esse token de volta para o servidor para provar que está autenticado.',
          question:
            "Em qual cabeçalho (header) HTTP esse token de acesso é comumente enviado?",
          options: [
            "Content-Type",
            "Accept",
            "User-Agent",
            "Authorization",
            "Host",
          ],
          answer: 3,
          section: "Programação Back-End",
        },
        {
          n: 35,
          context:
            "Um arquiteto de software está planejando a estrutura de uma nova aplicação web. Ele decide separar as responsabilidades do código em três camadas lógicas: uma camada para lidar com os dados e a lógica de negócio (o Model), uma camada responsável pela apresentação dos dados e pela interface do usuário (a View), e uma terceira camada para receber as requisições do usuário e intermediar a comunicação entre as outras duas (o Controller).",
          question:
            "Qual padrão de arquitetura de software está sendo utilizado?",
          options: [
            "API (Application Programming Interface)",
            "ORM (Object-Relational Mapping)",
            "JSON (JavaScript Object Notation)",
            "REST (Representational State Transfer)",
            "MVC (Model-View-Controller)",
          ],
          answer: 4,
          section: "Programação Back-End",
        },
        {
          n: 36,
          context:
            'Um desenvolvedor front-end precisa criar uma página web onde, ao clicar em um botão, o texto de um parágrafo muda de "Olá, Mundo!" para "Botão Clicado!". A estrutura da página já foi criada com HTML e o estilo com CSS.',
          question:
            "Qual linguagem de programação é utilizada no navegador para manipular os elementos da página (DOM), responder a eventos do usuário (como cliques) e alterar o conteúdo dinamicamente?",
          options: ["HTML", "CSS", "Python", "SQL", "JavaScript"],
          answer: 4,
          section: "Programação Front-End",
        },
        {
          n: 37,
          context:
            "Um site precisa se adaptar a diferentes tamanhos de tela, como desktops, tablets e smartphones. O desenvolvedor precisa usar uma técnica de CSS que permita aplicar diferentes regras de estilo com base nas características do dispositivo, como a largura da tela.",
          question:
            "Qual recurso do CSS é usado para criar um design responsivo, aplicando estilos específicos quando a largura da tela atinge certos pontos (breakpoints)?",
          options: [
            "Seletores de ID",
            "Pseudo-classes (ex: :hover)",
            "Media Queries",
            "Variáveis CSS",
            "Flexbox",
          ],
          answer: 2,
          section: "Programação Front-End",
        },
        {
          n: 38,
          context:
            "Um desenvolvedor está construindo uma aplicação web complexa e decide usar um framework JavaScript para facilitar a criação de interfaces de usuário. Ele escolhe uma abordagem onde a UI é dividida em pequenas partes reutilizáveis e independentes, cada uma com seu próprio HTML, CSS e JavaScript, como um <Navbar>, um <Sidebar> e um <Card>.",
          question:
            "Como é chamada essa abordagem de desenvolvimento de UI, popularizada por frameworks como React, Vue e Angular?",
          options: [
            "Programação procedural",
            "Arquitetura baseada em componentes",
            "Design orientado a objetos",
            "Injeção de dependência",
            "Programação reativa",
          ],
          answer: 1,
          section: "Programação Front-End",
        },
        {
          n: 39,
          context:
            "Um desenvolvedor precisa buscar dados de uma API externa de forma assíncrona usando JavaScript, para que a página não congele enquanto espera a resposta da rede. Após a busca, ele precisa exibir os dados recebidos na tela.",
          question:
            "Qual API do navegador é a interface moderna e baseada em Promises para realizar requisições de rede (HTTP)?",
          options: [
            "XMLHttpRequest",
            "document.write()",
            "localStorage",
            "Fetch API",
            "setTimeout()",
          ],
          answer: 3,
          section: "Programação Front-End",
        },
        {
          n: 40,
          context:
            'Um desenvolvedor está trabalhando na experiência do usuário (UX) de um formulário de login. Ele quer garantir que o design da interface do usuário (UI) seja claro e intuitivo, com campos de entrada bem definidos, rótulos visíveis e um botão de "Entrar" que se destaque.',
          question:
            "Qual é a principal diferença entre UX (User Experience) e UI (User Interface)?",
          options: [
            "UI se refere à aparência visual do produto, enquanto UX se refere à sensação geral e à facilidade de uso do produto.",
            "UX é o processo de escrever o código HTML e CSS, enquanto UI é o design feito no Photoshop.",
            "Não há diferença, os termos são intercambiáveis e significam a mesma coisa.",
            "UI é sobre a pesquisa com usuários e testes de usabilidade, enquanto UX é sobre a escolha da paleta de cores e tipografia.",
            "UX se aplica apenas a aplicativos móveis, enquanto UI se aplica a sites.",
          ],
          answer: 0,
          section: "Programação Front-End",
        },
        {
          n: 41,
          context:
            "Uma equipe de desenvolvimento está decidindo a abordagem para criar um novo aplicativo móvel. Eles precisam que o aplicativo tenha o máximo de desempenho e acesso total aos recursos nativos do dispositivo (como câmera, GPS e acelerômetro). O aplicativo será desenvolvido separadamente para cada plataforma, usando as linguagens e ferramentas oficiais: Kotlin para Android e Swift para iOS.",
          question:
            "Como é chamada essa abordagem de desenvolvimento de aplicativos?",
          options: [
            "Desenvolvimento Híbrido",
            "Desenvolvimento Nativo",
            "Progressive Web App (PWA)",
            "Desenvolvimento Multiplataforma",
            "Web App Responsivo",
          ],
          answer: 1,
          section: "Programação para Dispositivos Móveis",
        },
        {
          n: 42,
          context:
            'Um desenvolvedor de aplicativos Android está criando uma tela de login. Ele precisa organizar os elementos da interface, como campos de texto para e-mail e senha, e um botão de "Entrar". Ele utiliza um componente de layout que empilha os elementos verticalmente, um abaixo do outro.',
          question:
            "Qual componente de leiaute (layout) é comumente utilizado em plataformas móveis para organizar os elementos em uma única linha, seja horizontal ou vertical?",
          options: [
            "Grid Layout (Leiaute em Grade)",
            "Relative Layout (Leiaute Relativo)",
            "Linear Layout (Leiaute Linear)",
            "Frame Layout (Leiaute de Quadro)",
            "Constraint Layout (Leiaute de Restrição)",
          ],
          answer: 2,
          section: "Programação para Dispositivos Móveis",
        },
        {
          n: 43,
          context:
            "Um aplicativo de delivery precisa armazenar pequenas quantidades de dados de forma persistente no dispositivo do usuário, como a preferência de tema (claro ou escuro) ou o token de autenticação. Esses dados precisam estar disponíveis mesmo que o aplicativo seja fechado e reaberto.",
          question:
            "Qual mecanismo de persistência de dados em dispositivos móveis é ideal para armazenar pares de chave-valor simples?",
          options: [
            "Banco de dados SQLite",
            "Armazenamento em arquivo (File Storage)",
            "SharedPreferences (Android) ou UserDefaults (iOS)",
            "Armazenamento em nuvem (Cloud Storage)",
            "Variáveis de instância",
          ],
          answer: 2,
          section: "Programação para Dispositivos Móveis",
        },
        {
          n: 44,
          context:
            "Um aplicativo de notícias precisa buscar as últimas manchetes de um servidor web. A busca de dados na rede é uma operação que pode demorar e, se executada na thread principal da interface do usuário (UI Thread), pode fazer com que o aplicativo trave ou pare de responder.",
          question:
            "Qual conceito de programação é essencial para executar tarefas de longa duração, como requisições de rede ou acesso a banco de dados, sem bloquear a interface do usuário em aplicativos móveis?",
          options: [
            "Herança",
            "Encapsulamento",
            "Polimorfismo",
            "Programação assíncrona (ou multithreading)",
            "Singleton",
          ],
          answer: 3,
          section: "Programação para Dispositivos Móveis",
        },
        {
          n: 45,
          context:
            "Um desenvolvedor finalizou a criação de seu aplicativo Android. Agora, ele precisa empacotar todos os arquivos da aplicação (código, recursos, manifesto) em um único arquivo que possa ser distribuído e instalado nos dispositivos dos usuários, por exemplo, através da Google Play Store.",
          question:
            "Qual é o formato do pacote de arquivo usado para distribuir e instalar aplicações móveis no sistema operacional Android?",
          options: [".EXE", ".IPA", ".DMG", ".JAR", ".APK ou .AAB"],
          answer: 4,
          section: "Programação para Dispositivos Móveis",
        },
        {
          n: 46,
          context:
            "Um engenheiro está desenvolvendo um sistema de automação residencial. Ele utiliza um dispositivo que lê a temperatura de um sensor e, com base nesse valor, decide se deve ou não ligar o ar condicionado.",
          question:
            "No contexto de IoT, como são chamados, respectivamente, o dispositivo que mede uma grandeza física (temperatura) e o dispositivo que executa uma ação no mundo real (ligar o ar condicionado)?",
          options: [
            "Atuador e Sensor",
            "Sensor e Atuador",
            "Microcontrolador e Microprocessador",
            "Gateway e Roteador",
            "Protocolo e Firmware",
          ],
          answer: 1,
          section: "Internet das Coisas (IoT)",
        },
        {
          n: 47,
          context:
            "Um entusiasta de eletrônica está construindo um projeto simples para piscar um LED. Ele escolhe uma plataforma de prototipagem de hardware de código aberto que consiste em uma placa com um microcontrolador e pinos de entrada/saída, que pode ser facilmente programada através de uma IDE simplificada usando uma linguagem baseada em C++.",
          question:
            "Qual plataforma popular de hardware livre é amplamente utilizada para projetos de IoT e eletrônica interativa, correspondendo à descrição?",
          options: ["Raspberry Pi", "Arduino", "ESP32", "Node.js", "Python"],
          answer: 1,
          section: "Internet das Coisas (IoT)",
        },
        {
          n: 48,
          context:
            'Uma equipe de QA (Quality Assurance) está testando um formulário de cadastro. Eles precisam verificar se o sistema se comporta corretamente quando o usuário insere dados válidos (um e-mail no formato correto) e também quando insere dados inválidos (um e-mail sem "@").',
          question:
            "Como são chamados os testes que focam em verificar se as funcionalidades do sistema atendem aos requisitos especificados, validando as entradas e saídas esperadas?",
          options: [
            "Testes de Performance",
            "Testes de Usabilidade",
            "Testes Funcionais",
            "Testes de Segurança",
            "Testes de Estresse",
          ],
          answer: 2,
          section: "Teste de Software",
        },
        {
          n: 49,
          context:
            "Um gerente de projetos está iniciando um novo desenvolvimento de software. O cliente tem uma ideia clara do que quer, e os requisitos são bem definidos e improváveis de mudar. O gerente decide adotar uma metodologia de desenvolvimento sequencial, onde cada fase (requisitos, design, implementação, teste, implantação) deve ser concluída antes que a próxima comece.",
          question:
            "Qual metodologia clássica de desenvolvimento de software é caracterizada por esse fluxo sequencial e em cascata?",
          options: [
            "Scrum",
            "Kanban",
            "XP (Extreme Programming)",
            "Cascata (Waterfall)",
            "Prototipação",
          ],
          answer: 3,
          section: "Projetos de Software",
        },
        {
          n: 50,
          context:
            "Uma equipe Ágil está utilizando o Scrum. Ao final de uma Sprint de duas semanas, eles se reúnem para mostrar o incremento do produto que foi concluído para o Product Owner e outras partes interessadas. O objetivo é obter feedback sobre o trabalho realizado e adaptar o Product Backlog, se necessário.",
          question:
            "Qual evento do Scrum é realizado ao final da Sprint para inspecionar o incremento e adaptar o Product Backlog?",
          options: [
            "Daily Scrum (Reunião Diária)",
            "Sprint Planning (Planejamento da Sprint)",
            "Sprint Retrospective (Retrospectiva da Sprint)",
            "Sprint Review (Revisão da Sprint)",
            "Backlog Refinement (Refinamento do Backlog)",
          ],
          answer: 3,
          section: "Projetos de Software",
        },
      ];
      const $ = (id) => document.getElementById(id);
      let index = 0,
        selected = null,
        locked = false,
        answers = [];
      function show(id) {
        ["intro", "quiz", "result"].forEach((x) =>
          $(x).classList.toggle("hidden", x !== id),
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      function start() {
        index = 0;
        selected = null;
        locked = false;
        answers = [];
        show("quiz");
        render();
      }
      function render() {
        const q = QUESTIONS[index];
        selected = null;
        locked = false;
        $("counter").textContent =
          `Questão ${index + 1} de ${QUESTIONS.length}`;
        $("partial").textContent =
          `${answers.filter((v, i) => v === QUESTIONS[i].answer).length} acertos`;
        $("progress").style.width = `${(index / QUESTIONS.length) * 100}%`;
        $("section").textContent = q.section;
        $("question").textContent = q.question;
        $("context").textContent = q.context;
        $("choices").replaceChildren();
        q.options.forEach((option, i) => {
          const b = document.createElement("button");
          b.className = "choice";
          b.type = "button";
          const l = document.createElement("span");
          l.className = "letter";
          l.textContent = "ABCDE"[i];
          const t = document.createElement("span");
          t.textContent = option;
          b.append(l, t);
          b.onclick = () => {
            if (locked) return;
            selected = i;
            document
              .querySelectorAll(".choice")
              .forEach((el, j) => el.classList.toggle("selected", i === j));
            $("confirm").disabled = false;
          };
          $("choices").append(b);
        });
        $("feedback").className = "feedback hidden";
        $("confirm").classList.remove("hidden");
        $("confirm").disabled = true;
        $("next").classList.add("hidden");
        $("hint").textContent = "Escolha uma alternativa para continuar.";
      }
      function confirm() {
        if (selected === null || locked) return;
        locked = true;
        const q = QUESTIONS[index];
        answers.push(selected);
        const ok = selected === q.answer;
        document.querySelectorAll(".choice").forEach((b, i) => {
          b.disabled = true;
          b.classList.remove("selected");
          if (i === q.answer) b.classList.add("correct");
          else if (i === selected) b.classList.add("wrong");
        });
        $("feedback").className = "feedback " + (ok ? "good" : "bad");
        $("feedback").textContent = ok
          ? "✓ Resposta correta!"
          : `✕ Resposta incorreta. Alternativa correta: ${"ABCDE"[q.answer]}) ${q.options[q.answer]}`;
        $("confirm").classList.add("hidden");
        $("next").classList.remove("hidden");
        $("next").textContent =
          index === QUESTIONS.length - 1
            ? "Ver resultado final →"
            : "Próxima questão →";
        $("hint").textContent = "Resposta registrada.";
        $("partial").textContent =
          `${answers.filter((v, i) => v === QUESTIONS[i].answer).length} acertos`;
        $("progress").style.width =
          `${((index + 1) / QUESTIONS.length) * 100}%`;
      }
      function finish() {
        show("result");
        const hits = answers.filter((v, i) => v === QUESTIONS[i].answer).length;
        const note = (hits * 10) / QUESTIONS.length;
        $("score").textContent = `${note.toFixed(1).replace(".", ",")} / 10`;
        $("hits").textContent = hits;
        $("misses").textContent = QUESTIONS.length - hits;
        $("percent").textContent =
          `${Math.round((hits / QUESTIONS.length) * 100)}%`;
        $("summary").textContent =
          hits >= 40
            ? "Excelente desempenho! Continue revisando os conteúdos."
            : hits >= 30
              ? "Bom trabalho! Revise os assuntos em que teve dificuldades."
              : "Continue praticando! Reveja as questões e tente novamente.";
        $("review").replaceChildren();
        QUESTIONS.forEach((q, i) => {
          const d = document.createElement("div");
          d.className = "reviewitem";
          const title = document.createElement("b");
          title.textContent = `${answers[i] === q.answer ? "✓" : "✕"} Questão ${i + 1} — ${q.section}`;
          const desc = document.createElement("div");
          desc.textContent = `Sua resposta: ${"ABCDE"[answers[i]]} | Correta: ${"ABCDE"[q.answer]} — ${q.options[q.answer]}`;
          d.append(title, desc);
          $("review").append(d);
        });
        $("review").classList.add("hidden");
        $("toggleReview").textContent = "Ver revisão das questões";
      }
      $("start").onclick = start;
      $("restart").onclick = start;
      $("confirm").onclick = confirm;
      $("next").onclick = () => {
        if (!locked) return;
        if (index === QUESTIONS.length - 1) finish();
        else {
          index++;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
      $("toggleReview").onclick = () => {
        const hidden = $("review").classList.toggle("hidden");
        $("toggleReview").textContent = hidden
          ? "Ver revisão das questões"
          : "Ocultar revisão";
      };
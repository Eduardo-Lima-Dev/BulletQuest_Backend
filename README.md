<div align="center">
  <h1>BulletQuest</h1>
  <h3>Sistema de Gerenciamento de Tarefas Gamificado</h3>
  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Em%20Desenvolvimento-FF5722?style=for-the-badge" alt="Em Desenvolvimento" />
  </p>
</div>

## 📋 Sobre o Projeto

BulletQuest é uma plataforma de gerenciamento de tarefas gamificada que ajuda os usuários a se manterem organizados e motivados. O sistema transforma tarefas diárias em desafios, atribuindo pontuações específicas para cada atividade completada.

### Principais Funcionalidades
- Sistema de tarefas com pontuação baseada em dificuldade e prioridade
- Ranking de usuários baseado em pontuação
- Sistema de recompensas por tarefas concluídas
- Dashboard para visualização de progresso

## 🚀 Tecnologias Utilizadas

- **Backend**: Node.js,Express,Sequelize,TypeScript
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT
- **Documentação API**: Swagger

## 🔧 Requisitos

- Node.js (v14.x ou superior)
- PostgreSQL (v12.x ou superior)
- Yarn

## ⚙️ Instalação e Configuração

1. **Clone o repositório**
```bash
git clone https://github.com/Eduardo-Lima-Dev/bulletquest_backend.git
cd bulletquest_backend
```

2. **Instale as dependências**
```bash
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
DATABASE_URL=url
JWT_SECRET=secret
```

4. **Execute as migrações do banco de dados**
```bash
...
```

5. **Inicie o servidor de desenvolvimento**
```bash
yarn dev
```

O servidor estará disponível em `http://localhost:3000`.

## 📦 Estrutura do Projeto

```
src/
├── config/            # Configuração (DB, .env, etc)
├── controllers/       # Recebe req/res, chama services
├── services/          # Lógica da aplicação
├── models/            # Definições Sequelize
├── middlewares/       # Interceptadores (ex: auth, erros)
├── routes/            # Define endpoints
├── utils/             # Funções auxiliares
└── index.ts           # Arquivo de bootstrap (express app)
```

## 🌲 Padrão de Branches

### Nomenclatura
- **✨ Feature** - Para novas funcionalidades
- **🐛 Bugfix** - Para correção de bugs
- **🚨 Hotfix** - Para correções urgentes
- **🚀 Release** - Para novas versões
- **📚 Docs** - Para documentação

### Exemplos
#### Nova Funcionalidade
```bash
git checkout -b Feature-Criacao-Tela-de-Login
```
#### Correção de Bug
```bash
git checkout -b Bugfix-Erro-Upload-Imagem
```
#### Correção Urgente
```bash
git checkout -b Hotfix-Falha-Seguranca-Login
```
#### Nova Versão
```bash
git checkout -b Release-v1.0.0
```
#### Documentação
```bash
git checkout -b Docs-Atualizacao-README
```

## 📝 Padrão de Commits

### Estrutura do Commit
```
<emoji> <tipo>(<escopo>): <descrição>
```

### Exemplo
```
✨ feat(auth): implementar autenticação com Firebase
```

### Prefixos (tipos)
- **✨ feat**: Nova funcionalidade
- **🔨 refac**: Refatoração
- **🐛 fix**: Correção de bugs
- **📚 docs**: Documentação
- **💅 style**: Estilo e formatação

### Escopos Comuns
- **auth** - Autenticação
- **admin** - Painel administrativo
- **tasks** - Gerenciamento de tarefas
- **users** - Gerenciamento de usuários
- **ui** - Interface do usuário
- **api** - Endpoints da API
- **db** - Banco de dados
- **tests** - Testes

### Exemplos de Commits

#### Nova Funcionalidade
```bash
git commit -m "✨ feat(auth): implementar login com Google"
```

#### Refatoração
```bash
git commit -m "🔨 refac(api): reorganizar estrutura de rotas"
```

#### Correção de Bug
```bash
git commit -m "🐛 fix(ui): corrigir validação de formulário"
```

#### Documentação
```bash
git commit -m "📚 docs(api): atualizar documentação dos endpoints"
```

#### Estilo
```bash
git commit -m "💅 style(ui): ajustar padrões de código"
```

## 🔄 Fluxo de Trabalho

1. Crie uma nova branch a partir da main:
```bash
git checkout main
git pull origin main
git checkout -b Feature-Nova-Funcionalidade
```

2. Faça seus commits seguindo o padrão estabelecido

3. Envie para o repositório:
```bash
git push origin Feature-Nova-Funcionalidade
```

4. Abra um Pull Request para a ```main```

## 📖 Documentação da API

> A documentação detalhada da API estará disponível em `/docs` quando o servidor estiver em execução.

## 🧪 Testes

### Executar todos os testes
```bash
...
```

### Executar testes com relatório de cobertura
```bash
...
```

## 🚀 Instruções de Implantação

> Esta seção será preenchida durante o desenvolvimento.

## 👥 Colaboradores

- **Damião** - Desenvolvedor Principal - [damiao28.contato@gmail.com](mailto:damiao28.contato@gmail.com)

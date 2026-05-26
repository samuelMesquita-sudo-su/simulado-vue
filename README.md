# VitóriaCar — Sistema de Ordens de Serviço
### Avaliação Prática — Desenvolvimento Front-End com Vue.js

---

## 📋 Contexto

A oficina mecânica **VitóriaCar** precisa de um sistema para organizar as ordens de
serviço dos veículos que chegam para manutenção. Hoje, tudo é feito em papel, o que
gera desorganização e perda de informações.

Você foi contratado como desenvolvedor front-end para criar uma aplicação web que
permita à equipe da oficina **visualizar, cadastrar e acompanhar** as ordens de
serviço de forma simples e eficiente.

---

## 🛠️ O que será desenvolvido

Uma aplicação Vue.js com quatro páginas, conectada a uma API simulada (json-server),
que permite:

- Ver um painel inicial com o resumo das ordens por status
- Listar todas as ordens de serviço cadastradas
- Cadastrar uma nova ordem de serviço
- Ver os detalhes de uma ordem específica

---

## 🗂️ Entidades do Sistema

### Cliente
| Campo     | Tipo   | Descrição                    |
|-----------|--------|------------------------------|
| id        | number | Identificador único          |
| nome      | string | Nome completo do cliente     |
| telefone  | string | Telefone de contato          |

### Veículo
| Campo      | Tipo   | Descrição                        |
|------------|--------|----------------------------------|
| id         | number | Identificador único              |
| placa      | string | Placa do veículo                 |
| modelo     | string | Modelo do veículo                |
| ano        | number | Ano de fabricação                |
| clienteId  | number | ID do cliente dono do veículo    |

### Ordem de Serviço
| Campo         | Tipo   | Descrição                                            |
|---------------|--------|------------------------------------------------------|
| id            | number | Identificador único                                  |
| veiculoId     | number | ID do veículo                                        |
| clienteId     | number | ID do cliente                                        |
| descricao     | string | Descrição do serviço a ser realizado                 |
| status        | string | `Aguardando`, `Em andamento` ou `Concluído`          |
| dataAbertura  | string | Data de abertura da ordem (formato: `AAAA-MM-DD`)    |

---

## 📄 Requisitos Funcionais

### RF01 — Painel Inicial (`/`)
- Exibir três cards, um para cada status: **Aguardando**, **Em andamento** e **Concluído**
- Cada card deve mostrar o nome do status e a **quantidade** de ordens naquele status
- Os dados devem ser carregados da API

### RF02 — Listagem de Ordens (`/ordens`)
- Exibir todas as ordens de serviço cadastradas
- Para cada ordem, mostrar: placa do veículo, modelo do veículo, descrição do
  serviço, status e data de abertura
- Cada ordem deve ter um botão ou link para acessar seus detalhes
- Deve haver um botão para navegar até a página de cadastro de nova ordem

### RF03 — Detalhes da Ordem (`/ordens/:id`)
- Exibir todas as informações da ordem selecionada
- Exibir também os dados do **veículo** e do **cliente** vinculados à ordem
- Deve haver um botão para voltar à listagem

### RF04 — Nova Ordem de Serviço (`/ordens/nova`)
- Exibir um formulário com os campos:
  - **Veículo**: `select` com os veículos cadastrados (exibir placa + modelo)
  - **Descrição do serviço**: `textarea`
  - **Status**: `select` com as opções `Aguardando`, `Em andamento`, `Concluído`
  - **Data de abertura**: campo de data
- Ao submeter o formulário, enviar os dados via **POST** para a API
- Após o cadastro com sucesso, redirecionar para a listagem (`/ordens`)

---

## 🧩 Componentes esperados

| Componente        | Descrição                                             |
|-------------------|-------------------------------------------------------|
| `NavBar.vue`      | Barra de navegação presente em todas as páginas       |
| `OrdemCard.vue`   | Card que exibe o resumo de uma ordem na listagem      |
| `StatusBadge.vue` | Badge que exibe o status da ordem                     |

---

## 💻 Tecnologias utilizadas

| Tecnologia    | Finalidade                              |
|---------------|-----------------------------------------|
| Vue.js 3      | Framework principal (Composition API)  |
| TypeScript    | Tipagem estática                        |
| Vue Router 4  | Navegação entre páginas                 |
| Axios         | Requisições HTTP                        |
| Bootstrap 5   | Estilização                             |
| json-server   | API simulada                            |

---

## 🏆 Critérios de Avaliação

| #  | Critério                                                                 | Pontuação |
|----|--------------------------------------------------------------------------|-----------|
| 1  | **Componentização** — criação e uso correto de componentes com props     | 1,0 pt    |
| 2  | **Configuração do Vue Router** — definição correta das rotas             | 1,0 pt    |
| 3  | **Navegação entre páginas** — uso de `router-link` e/ou `router.push`   | 0,5 pt    |
| 4  | **Consumo de API — Listagem** — GET para listar ordens e exibir dados    | 1,5 pt    |
| 5  | **Consumo de API — Detalhes** — GET por ID e exibição dos dados          | 1,0 pt    |
| 6  | **Consumo de API — Cadastro** — POST para registrar nova ordem           | 1,5 pt    |
| 7  | **Formulário e reatividade** — uso de `v-model` e envio dos dados        | 1,5 pt    |
| 8  | **Estilização com Bootstrap** — interface organizada e responsiva        | 1,0 pt    |
| 9  | **Organização e boas práticas** — estrutura de pastas e legibilidade     | 1,0 pt    |
|    | **Total**                                                                | **10,0**  |

---

## 📁 Estrutura de Pastas Esperada

```
vitoriacar/
├── public/
├── src/
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── OrdemCard.vue
│   │   └── StatusBadge.vue
│   ├── pages/
│   │   ├── HomePage.vue
│   │   ├── OrdensPage.vue
│   │   ├── NovaOrdemPage.vue
│   │   └── DetalhesOrdemPage.vue
│   ├── services/
│   │   └── api.ts
│   ├── router/
│   │   ├── Cliente.ts
│   │   ├── Ordem.ts
│   │   └── Veiculo.ts
│   ├── interfaces/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── db.json
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## ▶️ Como rodar o projeto


```bash


# 1. Instalar as dependências
npm install

# 2. Iniciar a API simulada (em um terminal)
npm run api

# 3. Iniciar o servidor de desenvolvimento (em outro terminal)
npm run dev

```


A aplicação estará disponível em `http://localhost:5173`
A API estará disponível em `http://localhost:3001`

---

## 📤 Instruções de Entrega

1. Crie um repositório **público** no GitHub com o nome:
   `vitoriacar-seunome` (ex.: `vitoriacar-joaosilva`)
2. Suba todos os arquivos do projeto (**não inclua a pasta `node_modules`**)
3. O README do seu repositório deve conter:
   - Seu **nome completo**
4. Envie o **link do repositório** até a o fim da aula

---

## ⚠️ Observações

- Esta é uma avaliação **individual**. Não é permitido compartilhar ou copiar
  código de colegas durante a realização da prova.
- Consultas à **documentação oficial** do Vue.js, TypeScript, Bootstrap e Axios
  são permitidas.
- O projeto deve rodar corretamente com os comandos `npm install`,
  `npm run api` e `npm run dev`.
- Utilize o arquivo `db.json` fornecido como base de dados.
  **Não altere a estrutura do arquivo.**
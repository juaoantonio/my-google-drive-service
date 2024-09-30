# Instruções para Configuração do Projeto no Google Cloud Console

Siga os passos abaixo para configurar um novo projeto e habilitar a Google Drive API:

---

## 1. Criar um Novo Projeto

- **Acessar o Google Cloud Console:**
  - Vá para o [Google Cloud Console](https://console.cloud.google.com).
- **Iniciar a criação de um novo projeto:**
  - Clique em **"Selecionar um projeto"** no topo da página.
  - Selecione **"Novo Projeto"**.
- **Definir detalhes do projeto:**
  - Insira um **nome** para o projeto.
  - Clique em **"Criar"** para finalizar.

---

## 2. Habilitar a Google Drive API

- **Navegar até as APIs:**
  - No menu lateral, selecione **"APIs e Serviços"**.
- **Ativar a API do Google Drive:**
  - Clique em **"Ativar APIs e Serviços"** no topo da página.
  - Procure por **"Google Drive API"**.
  - Selecione a API e clique em **"Ativar"**.

---

## 3. Configurar a Tela de Consentimento OAuth 2.0

- **Acessar a configuração de consentimento:**
  - No menu lateral, vá para **"APIs e Serviços"** > **"Tela de consentimento OAuth"**.
- **Iniciar configuração:**
  - Selecione o tipo de usuário como **"Externo"**.
  - Clique em **"Criar"**.
- **Preencher informações necessárias:**
  - Forneça os detalhes do aplicativo (nome, logotipo, informações de contato, etc.).
- **Salvar configurações:**
  - Após preencher todas as informações, clique em **"Salvar"**.

---

## 4. Criar Credenciais OAuth 2.0

- **Ir para a seção de credenciais:**
  - No menu lateral, selecione **"APIs e Serviços"** > **"Credenciais"**.
- **Iniciar criação de credenciais:**
  - Clique em **"Criar Credenciais"** e escolha **"ID do Cliente OAuth"**.
- **Configurar tipo de aplicativo:**
  - Selecione **"Aplicativo da Web"** como o tipo de aplicativo.
- **Definir URIs autorizados:**
  - Adicione as **URIs de redirecionamento autorizadas** correspondentes aos hosts válidos do seu aplicativo.
- **Finalizar criação:**
  - Clique em **"Criar"** para gerar o **Client ID** e o **Client Secret**.

---

## 5. Configurar Variáveis de Ambiente

- **Obter o Client ID:**
  - Após a criação, serão exibidos o **Client ID** e o **Client Secret**.
- **Definir variável de ambiente:**
  - Utilize o **Client ID** para definir a variável de ambiente `VITE_GOOGLE_CLIENT_ID`.
  - Consulte o arquivo `.env.example` no projeto para referência sobre como configurar esta variável.

---

Pronto! Agora você configurou com sucesso o projeto no Google Cloud Console e está pronto para integrar a Google Drive API ao seu aplicativo.

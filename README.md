# Criando um microsserviço serverless para validação de CPF
## DESCRIÇÃO
Este projeto tem como objetivo desenvolver um microsserviço eficiente, escalável e econômico para validação de CPFs, utilizando arquitetura serverless. A aplicação será construída com base em princípios modernos de computação em nuvem, garantindo alta disponibilidade, baixo custo operacional e facilidade de manutenção.
# Passo a Passo para Iniciar o Projeto

Siga as instruções abaixo para configurar e executar o projeto baseado nos scripts fornecidos no `package.json`.

---

## **Pré-requisitos**
1. Certifique-se de ter as seguintes ferramentas instaladas:
   - [Node.js](https://nodejs.org/) (LTS recomendado)
   - [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local) (versão compatível com seu projeto)
   - Um gerenciador de pacotes como `npm`.

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

---

## **Scripts Disponíveis**

### **1. Build**
Compila o código TypeScript para JavaScript, gerando os arquivos na pasta `dist`.

```bash
npm run build
```

### **2. Watch**
Inicia o TypeScript em modo de observação, recompilando o código automaticamente sempre que há mudanças nos arquivos.

```bash
npm run watch
```

### **3. Clean**
Remove a pasta `dist` para garantir que o build seja limpo.

```bash
npm run clean
```

### **4. Prestart**
Limpa a pasta `dist` e compila o código antes de iniciar a aplicação. Esse script é executado automaticamente antes do `start`.

```bash
npm run prestart
```

### **5. Start**
Inicia o servidor local das Azure Functions.

```bash
npm run start
```

### **6. Test**
Placeholder para executar testes. Atualmente, este script exibe apenas uma mensagem no terminal.

```bash
npm run test
```

---

## **Passos para Iniciar o Projeto**

1. **Limpar Build Existente (Opcional):**
   Execute o comando abaixo para garantir que os arquivos antigos sejam removidos.
   ```bash
   npm run clean
   ```

2. **Compilar o Projeto:**
   Compile o código TypeScript para JavaScript.
   ```bash
   npm run build
   ```

3. **Iniciar o Servidor Local:**
   Execute o servidor local das Azure Functions:
   ```bash
   npm run start
   ```

4. **Modo de Desenvolvimento (Opcional):**
   Para monitorar mudanças no código e recompilar automaticamente:
   ```bash
   npm run watch
   ```

---

## **Dicas Adicionais**
- Certifique-se de que as Azure Functions Core Tools estejam configuradas corretamente.
- Verifique se há scripts adicionais ou configurações específicas no projeto para personalizar o comportamento.

Agora, você está pronto para desenvolver e testar suas Azure Functions! 🎉

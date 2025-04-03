# 📌 Como Usar o Projeto

## 🚀 Configuração e Execução

### 1️⃣ Backend
1. Abra a pasta do backend.
2. No caminho das pastas, abra o terminal (CMD).
3. Execute o comando abaixo para iniciar o servidor com o banco de dados:
   ```sh
   yarn dev
   ```

### 2️⃣ Frontend
1. No diretório do frontend, abra o terminal (CMD).
2. Execute o comando abaixo para iniciar o projeto Expo:
   ```sh
   npx expo start
   ```

---

## 📚 Roteiro React Native

### 🔽 Downloads Necessários
- [Insomnia](https://app.insomnia.rest/app/dashboard/organizations)
- [Backend Finanças](https://github.com/devfraga/backend-financas)

---

## 📌 Criando um Projeto Expo

### 🔹 Passos:
1. Verifique se o **Node.js** está instalado.
2. Abra o terminal.
3. Execute o comando:
   ```sh
   npx create-expo-app@latest
   ```
4. Escolha um nome para o projeto.
5. Selecione um template (recomendado: **Blank**).
6. Após a criação, acesse a pasta do projeto:
   ```sh
   cd nome-do-seu-projeto
   ```
7. Inicie o servidor de desenvolvimento do Expo:
   ```sh
   npx expo start
   ```
8. Escaneie o QR Code com o app **Expo Go** para rodar no celular.

---

## 📦 Instalação de Bibliotecas Essenciais

### 🔹 React Navigation
```sh
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

### 🔹 Drawer Navigation
```sh
npx expo install @react-navigation/drawer
```

### 🔹 Gesture Handler (Necessário para o Drawer)
```sh
npx expo install react-native-gesture-handler react-native-reanimated
```

🔸 **Configuração do `babel.config.js` (caso necessário)**
Se não existir o arquivo, gere com:
```sh
npx expo customize
```
Selecione `babel.config.js` e adicione dentro da chave `plugins`:
```js
'react-native-reanimated/plugin'
```

### 🔹 Outras Bibliotecas Importantes

| Biblioteca | Comando |
|------------|---------|
| **Axios** | `npx expo install axios` |
| **Async Storage** | `npx expo install @react-native-async-storage/async-storage` |
| **Icons (Vector Icons)** | `npx expo install @react-native-vector-icons` |
| **Date-fns (Data e Hora)** | `npx expo install date-fns` |
| **Calendário** | `npx expo install react-native-calendars` |

---

## 💻 Backend Finanças (API)

### 🔹 Passos para Configuração
1. Clone o repositório:
   ```sh
   git clone https://github.com/devfraga/backend-financas.git
   ```
2. Instale as dependências:
   ```sh
   yarn install  # ou npm install
   ```
3. Sincronize o banco de dados:
   ```sh
   npx prisma migrate dev
   ```
   📌 Após esse comando, será criado um arquivo `dev.db` dentro da pasta `prisma`.

4. Inicie o servidor backend:
   ```sh
   yarn dev  # ou npm run dev
   ```

5. A API rodará na porta **3333**:
   ```sh
   http://localhost:3333/login
   ```

---

## 🔥 Agora você está pronto para desenvolver! 🚀

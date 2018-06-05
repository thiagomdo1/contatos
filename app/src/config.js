// const baseURL = "http://localhost/contatos/cms/public/"
const baseURL = "http://varsistemas.com.br/contatos/cms/public/"

const config = {
  endpoints: {
    readContatos: baseURL + "api/contatos",
    createContato: baseURL + "api/contatos",
    readContato: baseURL + "api/contatos/",
    updateContato: baseURL + "api/contatos/",
    deleteContato: baseURL + "api/contatos/",
  }
}

export default config;
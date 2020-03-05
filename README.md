# SmartMei challenge with Express

API construida em nodeJS utilizando Express.JS

Para testar você deve utilizar um client rest como por exemplo Postman ou Insomnia.

![Alt text](/docs/example.png?raw=true "Example")

POST /crawler
```json
{
	"url": "https://www.smartmei.com.br"
}
Response:
{
  "plano": "PROFISSIONAL",
  "transferencia": "R$ 7,00",
  "cobranca": "R$ 5,00 por boleto pago.",
  "mensalidade": "R$ 15,00 *pagando R$45,00/trimestre"
}
```

# Teste Unitário
Esse teste permite saber se a aplicação quebrou em algum momento e pode ser configurada no CI/CD do git para rodar automaticamente no commit e gestor/dev já recebe um alerta que algo não saiu como esperado.
Rode o teste com:
```bash
npm run test
```

![Alt text](/docs/test-sample.png?raw=true "Example test")
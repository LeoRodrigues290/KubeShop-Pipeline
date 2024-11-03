const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao KubeShop! Em breve, nossa loja estará disponível.');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});

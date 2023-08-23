//importar o pacote express
const express = require('express');

//instancia o express na variavel app
const app = express();

// definir a porta do servidor
const PORT = 3000;

app.get('/api/teste', (request, response) => {
    response.send('CHUPA que a CANA é grossa');
});

// testar o servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`));
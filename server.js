import app from './src/app.js'

//const http = require ("http");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
});


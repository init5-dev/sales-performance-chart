import express from 'express'
import '../db/connection.mjs'

const app = express();
const SERVER_PORT = 3000

app.set('port', SERVER_PORT);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors()); //Em produção definir a origem do acesso
/**
 * app.use(cors({
 *    origin: 'http://meuapp.com'
 * }))
 */
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) /users?name=Bruno&idade=30
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

/**
 * - Entidades:
 * ONG
 * Caso (incident)
 *
 * - Funcionalidades:
 * Login de ONG
 * Logout de ONG
 * Cadastro de ONG
 * Cadastrar novos casos
 * Deletar casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 */

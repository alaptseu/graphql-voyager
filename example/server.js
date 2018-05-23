const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./schema');

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:56325',
//   credentials: true,

// }

app.use(cors());
app.use(express.static(__dirname));
app.use('/graphql', graphqlHTTP(() => ({ schema })));

app.listen(0, function() {
  const port = this.address().port;
  console.log(`Started on http://localhost:${port}/`);
});

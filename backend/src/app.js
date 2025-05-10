const express = require('express');
const sequelize = require('./config/database');
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/produtos', produtoRoutes);
app.use('/api/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
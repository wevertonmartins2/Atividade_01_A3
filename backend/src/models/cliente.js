const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  endereco: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: true,
    unique: true,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'clientes',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci',
});

module.exports = Cliente;
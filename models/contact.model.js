// Importar Sequelize y la instancia de conexión
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Definir el modelo de contacto
const Contact = sequelize.define('Contact', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: /^\+?[1-9]\d{1,14}$/i,
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'contacts',
});

// Exportar el modelo
module.exports = Contact;
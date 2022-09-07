'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Region,{as: 'Region'});
      this.belongsToMany(Pais, { through: 'OrigenDestino' , as: "Frontera" });
      // this.belongsToMany(Pais, { through: Frontera, uniqueKey: 'paisDestinoId' });
    }
  }
  Pais.init({
    nombre: DataTypes.STRING,
    capital: DataTypes.STRING,
    poblacion: DataTypes.INTEGER,
    idioma: DataTypes.STRING,
    moneda: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pais',
  });
  return Pais;
};
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

let db = {};

// Import models from dir
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0 && (file !== 'index.js'));
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// For each model imported, check if it's associated with another model
Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

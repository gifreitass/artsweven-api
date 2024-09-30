'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';

const models = {};
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const basename = path.basename(filename);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(dirname, './tmp.db'),
});

(async () => {
  const files = fs
    .readdirSync(dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'));

  await Promise.all(files.map(async (file) => {
    const module = await import(path.join(dirname, file));
    const model = module.default(sequelize, Sequelize);
    models[model.name] = model;
  }));

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
})();

export default { models, sequelize, Sequelize };

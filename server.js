const sequelize = require('./config/connection')

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
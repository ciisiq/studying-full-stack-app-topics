// Imports
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./router');
const sequelize = require('./models/db');
const cors = require('@koa/cors');

// Instance
const app = new Koa();
const PORT = 3005;

// Middleware
app.use(cors());
app.use(bodyparser());
app.use(router.routes());

// Starting Server
(async () => {
  try {
    await sequelize.sync();
    console.log('DB Connected 📚');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🎉`);
    });
  } catch (error) {
    console.log('Error', error);
  }
})();

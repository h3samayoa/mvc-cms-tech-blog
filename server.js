const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({
    helpers
});
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', hbs.engine);
app.set('view-engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})


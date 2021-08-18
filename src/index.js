const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

//static
app.use(express.static(path.join(__dirname, 'public')));

//http logger
app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b,
            formatCash: (a) => {
                var str = a.toString();
                return str.split('').reverse().reduce((prev, next, index) => {
                    return ((index % 3) ? next : (next + '.')) + prev
                    })
                }
        }
    
    }),
);

app.use(methodOverride('_method'))


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const logger = require('morgan');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

routes(app);
//app.use('/main',routes);

app.listen(port, ()=>{console.log(`Server is running on port : ${port}`)});

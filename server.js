const express = require ("express");
const {getHome , getParamstest , getStockPrices , middlewareInterceptor , postTest} = require('./routes');
const PORT = 5353
const cors = require('cors');

const app = express();



//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(middlewareInterceptor);


//ROUTES
app.get('/' , getHome);

app.get('/api/stock' , getStockPrices);

app.get('/api/testParams/:bananaKeywork' , getParamstest);

app.post('/api/test' , postTest);

app.listen(PORT, () => console.log(`Server has started on PORT : ${PORT}`));
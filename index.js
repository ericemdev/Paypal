require('dotenv').config();
const express = require('express');
const paypal = require('./paypal');
const cors = require('cors');


const app = express();
app.use(cors());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pay');
});

app.post('/pay', async (req, res) => {
    try {
        const approvalUrl = await paypal.createOrder();
        res.redirect(approvalUrl);
    } catch (error) {
        console.error(error);
        res.redirect('/error');
    }
});
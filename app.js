const express = require('express')
const app = express()
let PORT = process.env.PORT || 4200;


app.use(express.static(__dirname + '/dist/online-shop-frontend'));
    app.listen(PORT, () => {
    console.log(`Online Shopping backend is listening at PORT: ${PORT}`)
});
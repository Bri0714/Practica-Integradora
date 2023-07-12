const mongoose = require('mongoose');

url = 'mongodb://localhost:27017';

class ManagerMongo {
    constructor(url) {
        this.url = url;
    }

    connect() {
        return mongoose.connect(this.url + '/ecommerce', { useUnifiedTopology: true, useNewUrlParser: true })
            .then(connect => {
                console.log('conexion exitosa');
                return connect;
            })
            .catch(err => { console.log(err) })
    }
}

module.exports = ManagerMongo;

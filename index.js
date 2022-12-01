require('dotenv').config();

const express = require('express');
const { dbConnection } = require('./database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.bookPath = '/api/books';
        
        this.conectarDB();
        
        this.middleware();

        this.listen();

        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middleware() {

        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    routes() {

        this.app.use(this.bookPath, require('./routes/book'));
    }

    listen() {

        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${ this.port }`);
        });
    }
}

const server = new Server();
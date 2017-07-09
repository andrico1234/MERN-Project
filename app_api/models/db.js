const mongoose = require('mongoose');
const dbUri = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost:27017/cafecrawl';

mongoose.Promise = global.Promise;
mongoose.connect(dbUri);

mongoose.connection.on('connected', () => {

    console.log(`Mongoose successfully connected to ${dbUri}`);
});

mongoose.connection.on('error', (err) => {

    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {

    console.log('Mongoose disconnected');
});

var gracefulExit = (message) => {

    return new Promise((res) => {

        console.log(`Mongoose disconnected through ${message}`);
        res();
    });
};

process.once('SIGUSR2', () => {

    gracefulExit('nodemon restart').then(() => {

        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {

    gracefulExit('Node app shutdown').then(() => {

        process.exit(0);
    });
});

process.on('SIGTERM', () => {

    gracefulExit('Heroku App Shutdown').then(() => {

        process.exit(0);
    });
});

require('./locations');
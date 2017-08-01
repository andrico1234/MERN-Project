const server = process.env.NODE_ENV === 'production' ? 'https://brockley-mern.herokuapp.com/' : 'http://localhost:3000';
const apiOptions = {
    server
};

module.exports = {
    apiOptions
};
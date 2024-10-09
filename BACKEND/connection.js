const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mywebsite',
    charset: 'utf8'
};

(async function() {
    try {
        const connection = await mysql.createConnection(config);
        console.log('Успішно підключено до бази даних');
    } catch (error) {
        console.error('Помилка підключення до бази даних:', error.message);
    }
})();

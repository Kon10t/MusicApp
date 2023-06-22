import mysql from 'mysql2';
// const os = require("os");
// const userName = os.userInfo().username;

// const hostname = '127.0.0.1';
// const port = 3037;

// Создание подключения к базе данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'users',
  password: 'root'
})

// Выполнение запроса SELECT
connection.query(
  'SELECT * FROM audio_files',
    function(err, results, fields) {
      console.log(results); // Вывод полученных данных
    }
);

// Закрытие подключения к базе данных
// connection.end();

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(userName);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

export default connection;
const http = require('http');

// Создаем HTTP сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовки ответа
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Отправляем ответ клиенту
  res.end('Привет, мир!\n');
});

// Задаем порт, на котором будет работать сервер
const port = 3000;

// Запускаем сервер и слушаем указанный порт
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

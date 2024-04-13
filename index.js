const express = require('express');

const app = express();
const port = 3000;

// Маршрут обработки корневого URL
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

// Слушаем указанный порт
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

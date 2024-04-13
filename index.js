const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Маршрут обработки корневого URL
app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.get('/get/completed', (req, res) => {
    // Читаем файл example.json
    fs.readFile('json/completed.json', 'utf8', (err, data) => {
        if (err) {
        console.error('Ошибка чтения файла:', err);
        res.status(500).send('Произошла ошибка на сервере');
        return;
        }
        // Отправляем содержимое файла как JSON
        res.json(JSON.parse(data));
    });
});

app.get('/get/inprocces', (req, res) => {
    // Читаем файл example.json
    fs.readFile('json/inprocces.json', 'utf8', (err, data) => {
        if (err) {
        console.error('Ошибка чтения файла:', err);
        res.status(500).send('Произошла ошибка на сервере');
        return;
        }
        // Отправляем содержимое файла как JSON
        res.json(JSON.parse(data));
    });
});

// Слушаем указанный порт
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

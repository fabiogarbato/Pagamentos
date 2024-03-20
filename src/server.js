const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'App.js'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Frontend rodando na porta ${PORT}`);
});

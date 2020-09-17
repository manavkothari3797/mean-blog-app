const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/MeanBlog'));
app.get('/*', (req, res) => {
    res.sendFile(path.join((__dirname, '/dist/MeanBlog/index.html')));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('SERVER RUNNING...');
});

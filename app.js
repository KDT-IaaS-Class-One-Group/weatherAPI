const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 정적 파일들을 제공하기 위한 설정
app.use(express.static(path.join(__dirname, 'public')));

// 메인 라우팅
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server구동 중~ http://localhost:${PORT}`);
});

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

const Item = mongoose.model('Item', itemSchema);

app.get('/items', (req, res) => {
    Item.find({}, (err, items) => {
        if (err) {
            console.error('데이터 조회 중 오류:', err);
        } else {
            res.json(items);
        }
    });
});
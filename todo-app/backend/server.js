const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use('/api/todos', todosRouter);


mongoose.connect('mongodb://127.0.0.1:27017/todoapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => console.error('Could not connect to MongoDB...', err));


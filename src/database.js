const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/it_is_not_pinteres', {
    useNewUrlParser: true
}).then(db => console.log('DB is connected')). catch(err => console.log(err));
const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["low","medium","high"],
        requred: true
    }
})

module.exports = mongoose.model('Task', taskSchema);
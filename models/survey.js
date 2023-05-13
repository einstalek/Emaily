const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require("./recipient");

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: "user"},
    dateSent: Date,
    dateLastResponded: Date
});

mongoose.model('surveys', surveySchema);
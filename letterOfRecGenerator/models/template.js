var db = require('../db');

var Schema = db.Schema;

var TemplateSchema = new Schema({
    text: String,
    questions: [{
        number: Number,
        question: String,
        tag: String
    }],
    letterheadImg: {
        data: Buffer,
        contentType: String
    }
});

var Template = db.model('Template', TemplateSchema);

module.exports = Template;
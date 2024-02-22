const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    firstname: {type: String, required: true },
    lastname: {type: String, /*required: true*/ },
    email: { type: String, /*required: true*/ },
    phone: { type: String, /*required: true*/ },
    compname: { type: String, /*required: true*/ },
    category: { type: String, /*required: true*/ },
    compwebsite: { type: String, /*required: true*/ },
    country: { type: String, /*required: true*/ },
    city: { type: String, /*required: true*/ },
    img: {
        data: Buffer,
        contentType: String,
        
    },
})

module.exports = CompanyModel = mongoose.model('Company', companySchema);
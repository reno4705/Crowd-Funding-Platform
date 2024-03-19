const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    firstname: {type: String },
    lastname: {type: String },
    email: { type: String },
    phoneNumber: { type: String },
    companyName: { type: String },
    category: { type: String },
    compwebsite: { type: String },
    country: { type: String },
    city: { type: String },
    img: { type: String
        // path: String,
        // data: Buffer,
        // contentType: String,
    },
}
)

module.exports = CompanyModel = mongoose.model('Company', companySchema);
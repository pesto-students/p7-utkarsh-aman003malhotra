const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:["income","expense", "saving"],
    },
    value:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        enum:["asset","equity", "fixed_income", "alternatives"],
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        red:'User'
    },
    document:{
        type:'String',

    }
}, { timestamps: true })

const Investment = mongoose.model("Investments", InvestmentSchema);

module.exports = Investment;
var schema = new Schema({
    scriptBuy: {
        type: Schema.Types.ObjectId,
        ref: 'Script'
    },
    scriptSell: {
        type: Schema.Types.ObjectId,
        ref: 'Script'
    },
    status: String,
    transaction1: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    },
    transaction2: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    },
    completionTime: Date,
    quantity: Number,
    ratio: Number,
    profit: Number,
    hasNotified: Boolean
});

schema.plugin(deepPopulate, {
    populate: {
        'scriptBuy': {
            select: ""
        },
        'scriptSell': {
            select: ""
        },
        'transaction1': {
            select: ""
        },
        'transaction2': {
            select: ""
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Process', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "scriptBuy scriptSell transaction1 transaction2", "scriptBuy scriptSell transaction1 transaction2"));
var model = {};
module.exports = _.assign(module.exports, exports, model);
var schema = new Schema({
    market: {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
    script: {
        type: Schema.Types.ObjectId,
        ref: 'Script'
    },
    transactionId: String,
    quantity: Number,
    rate: Number,
    status: String,
    completionTime: Date,
    quantityCompleted: Number,
    marketSell: {
        type: Schema.Types.Mixed
    }
});

schema.plugin(deepPopulate, {
    populate: {
        'market': {
            select: ""
        },
        'script': {
            select: ""
        },
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Transaction', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "market script", "market script"));
var model = {};
module.exports = _.assign(module.exports, exports, model);
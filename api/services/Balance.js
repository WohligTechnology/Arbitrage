var schema = new Schema({
    market: {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
    data: [{
        currency: {
            type: Schema.Types.ObjectId,
            ref: 'Currency'
        },
        value: Number
    }]
});

schema.plugin(deepPopulate, {
    populate: {
        'market': {
            select: ""
        },
        'data.currency': {
            select: "name"
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Balance', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "market data.currency", "market data.currency"));
var model = {};
module.exports = _.assign(module.exports, exports, model);
var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    marketName: [{
        market: {
            type: Schema.Types.ObjectId,
            ref: 'Market'
        },
        name: String
    }],
});

schema.plugin(deepPopulate, {
    populate: {
        'marketName.market': {
            select: ""
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Currency', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "marketName.market", "marketName.market"));
var model = {};
module.exports = _.assign(module.exports, exports, model);
var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    key: {
        type: String
    },
    secret: String,
    transactionCommission: Number
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Market', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
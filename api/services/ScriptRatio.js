var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    market1: {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
    market2: {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
    script: {
        type: Schema.Types.ObjectId,
        ref: 'Script'
    },
    buySellRatio: Number,
    sellBuyRatio: Number
});

schema.plugin(deepPopulate, {
    populate: {
        'market1': {
            select: ""
        },
        'market2': {
            select: ""
        },
        'script': {
            select: ""
        },
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('ScriptRatio', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "market1 market2 script", "market1 market2 script"));
var model = {};
module.exports = _.assign(module.exports, exports, model);
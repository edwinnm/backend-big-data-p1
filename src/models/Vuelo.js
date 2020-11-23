const {Schema , model} = require('mongoose');

const vueloSchema = new Schema({
    Year: {type:String},
    Month: {type:String},
    DayofMonth: {type:String},
    DayOfWeek: {type:String},
    DepTime: {type:String},
    CRSDepTime: {type:String},
    ArrTime: {type:String},
    CRSArrTime: {type:String},
    UniqueCarrier: {type:String},
    FlightNum: {type:String},
    TailNum: {type:String},
    ActualElapsedTime: {type:String},
    CRSElapsedTime: {type:String},
    AirTime: {type:String},
    ArrDelay: {type:String},
    DepDelay: {type:String},
    Origin: {type:String},
    Dest: {type:String},
    Distance: {type:String},
    TaxiIn: {type:String},
    TaxiOut: {type:String},
    Cancelled: {type:String},
    CancellationCode: {type:String},
    Diverted: {type:String},
    CarrierDelay: {type:String},
    WeatherDelay: {type:String},
    NASDelay: {type:String},
    SecurityDelay: {type:String},
    LateAircraftDelay  : {type:String}
},{collection : 'c00'});

module.exports = model('Vuelo',vueloSchema);
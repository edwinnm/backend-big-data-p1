const {Schema , model} = require('mongoose');

const vueloSchema = new Schema({
    Year: {type:Number},
    Month: {type:Number},
    DayofMonth: {type:Number},
    DayOfWeek: {type:Number},
    DepTime: {type:Number},
    CRSDepTime: {type:Number},
    ArrTime: {type:Number},
    CRSArrTime: {type:Number},
    UniqueCarrier: {type:String},
    FlightNum: {type:Number},
    TailNum: {type:String},
    ActualElapsedTime: {type:Number},
    CRSElapsedTime: {type:Number},
    AirTime: {type:Number},
    ArrDelay: {type:Number},
    DepDelay: {type:Number},
    Origin: {type:String},
    Dest: {type:String},
    Distance: {type:Number},
    TaxiIn: {type:Number},
    TaxiOut: {type:Number},
    Cancelled: {type:Number},
    CancellationCode: {type:String},
    Diverted: {type:Number},
    CarrierDelay: {type:Number},
    WeatherDelay: {type:Number},
    NASDelay: {type:Number},
    SecurityDelay: {type:Number},
    LateAircraftDelay  : {type:Number}
},{collection : 'c00'});

module.exports = model('Vuelo',vueloSchema);
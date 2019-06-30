var rainfall = require('bindings')('heavyProcessing')

var makeup = function(max) {
    return Math.round(max * Math.random() * 100)/100;
}

// Build some dummy locations
var locations = []
for (var i = 0; i < 10; i++ ) {
    var loc = {
        latitude: makeup(180), 
        longitude: makeup(180), 
        samples : [
            {date: "2015-07-20", rainfall: makeup(3)}, 
            {date: "2015-07-21", rainfall: makeup(3)}, 
            {date: "2015-07-22", rainfall: makeup(3)}, 
            {date: "2015-07-23", rainfall: makeup(3)}
        ]
    }
    locations.push(loc);
}

// Invoke the Addon
var results = rainfall.calculate_results(locations);

// Report the results from C++
var i = 0;
results.forEach(function(result){
    console.log("Result for Location " + i);
    console.log("--------------------------");
    console.log("\tLatitude:         " + locations[i].latitude.toFixed(2));
    console.log("\tLongitude:        " + locations[i].longitude.toFixed(2));
    console.log("\tMean Rainfall:    " + result.mean.toFixed(2) + "cm");
    console.log("\tMedian Rainfall:  " + result.median.toFixed(2) + "cm");
    console.log("\tStandard Dev.:    " + result.standard_deviation.toFixed(2) + "cm");
    console.log("\tNumber Samples:   " + result.n);
    console.log();
    i++;
})
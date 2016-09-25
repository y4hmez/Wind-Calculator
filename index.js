var Vector = require('./vector');

module.exports = function(context, req) {
                
    try {

        var input = req.body;
        context.log(input);

        var groundtrack = Vector(input.groundtrack.direction, input.groundtrack.speed);
        context.log("Gnd Dir: " + groundtrack.deg + " Gnd Spd: " + groundtrack.speed);

        var heading = Vector(input.heading.direction, input.heading.speed);
        context.log("Hdg Dir: " + heading.deg + " Hdg Spd: " + heading.speed);

        var wind = groundtrack.subtract(heading);
        var windStr = "Wnd Dir: " + wind.deg + " Wnd Spd: " + wind.speed 
        context.log(windStr);

        context.res = {
                status: 200, /* Defaults to 200 */
                body: windStr
            }
    
        context.done();
    }
    catch (e) {    
        context.log(e);
        context.res = {
                status: 500, 
                body: "Well that didn't work.. " + e
            }
        context.done();  
    }
    
    
};

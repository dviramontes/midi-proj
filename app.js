var midi = require('midi');
var colors = require('colors');
var _ = require('lodash-node');

var output = new midi.output();

console.log("%d", output.getPortCount(), "available ports".yellow);
console.log("available devices by name:".yellow);

_.times(output.getPortCount(), function(n) {
    console.log(n + " " + output.getPortName(n));
    // if (output.getPortName(n) === "MIDI Monitor (spy)") {
    if (output.getPortName(n) === "Launchpad") {
        output.openPort(n);
        callback();
    }

});

function callback() {
    // channel on|off ,note ,vel
    //1

    output.sendMessage([144, 51, 127]);
    output.sendMessage([128, 51, 0]);
    //2
    output.sendMessage([144, 52, 127]);
    output.sendMessage([128, 52, 0]);
    //3
    output.sendMessage([144, 68, 127]);
    output.sendMessage([128, 68, 0]);
    //4
    output.sendMessage([144, 68, 127]);
    output.sendMessage([128, 68, 0]);
    output.closePort();


    // output.sendMessage([144,55,0]);
}


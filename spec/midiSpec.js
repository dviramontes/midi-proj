var colors = require("colors");
var _ = require("lodash-node");

describe("midi library loaded", function() {
    it("should be able to create new midi function", function() {
        expect(libs.midi).toBeDefined();
    });
});

describe("there should be an instrument connected", function() {
    it("should be called Launchpad", function() {
        var midi = libs.midi;
        var output = new midi.output();
        expect(output.getPortName(1)).toBe("Launchpad");
        // _.times(output.getPortCount(), function(n) {

        // });
    });
});

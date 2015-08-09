"use strict";

var { ToggleButton } = require("sdk/ui/button/toggle");
var simplePrefs = require("sdk/simple-prefs");
var prefsService = require("sdk/preferences/service");
const scalingPrefName = "layout.css.devPixelsPerPx";
const fxdpiPrefEnabled = "hidpi";
const fxdpiPrefEnabledFactor = "factor";


var button = ToggleButton({
	id: "fxdpi-button",
	label: "HiDPI mode",
	icon: "./icon.svg",
	onChange: function(state) {
		// ToggleButton supports global, window and tab state. It
		// automatically sets the window state on click.
		// What we do here is copy the checked property from the given
		// (probably window) state to the global state and delete the
		// window state.
		button.checked = state.checked;
		button.state("window", null);

		simplePrefs.prefs[fxdpiPrefEnabled] = state.checked;
	}
});

function updateHiDPI() {
	var enabled = simplePrefs.prefs[fxdpiPrefEnabled];

	if (enabled) {
		//console.log("enable HiDPI");
		var factor = simplePrefs.prefs[fxdpiPrefEnabledFactor];
		prefsService.set(scalingPrefName, factor);
		button.label = "Disable HiDPI mode";
	} else {
		//console.log("disable HiDPI");
		prefsService.reset(scalingPrefName);
		button.label = "Enable HiDPI mode";
	}
	button.checked = enabled;
}


// update HiDPI mode on extension prefs change
simplePrefs.on("", updateHiDPI);

// initialize from prefs when extension is loaded
exports.main = function(options, callbacks) {
	updateHiDPI();
};

// reset scaling to default when extension is unloaded
exports.onUnload = function(reason) {
	prefsService.reset(scalingPrefName);
};


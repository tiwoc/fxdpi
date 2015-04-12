# fxdpi – One-click HiDPI mode toggle for Firefox

Adds a button to firefox that toggles HiDPI mode on and off. This will scale the whole browser (both web site content and the Firefox user interface), which is useful on high resolution displays where text would be too small to be read without scaling.

## How to install

If you simply want to run the latest release, just download from the [Releases](https://github.com/tiwoc/fxdpi/releases) page of this repository. Then open the XPI file in Firefox and skip the following instructions.

If you don't want to go the easy route:

* [Install and activate the Firefox SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation)
* `cd` to a clone of this repository
* Run `cfx xpi`


## How it works

fxdpi changes the `layout.css.devPixelsPerPx` setting. The default is 1.4 because this is what I prefer on my 14" full HD laptop screen. You can change this to a value that can be configured in the addon settings.

## Meta data

Author: Daniel Seither

License: MIT

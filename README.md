# fxdpi – One-click HiDPI mode toggle for Firefox

Adds a button to Firefox that toggles HiDPI mode on and off. This will scale the whole browser (both web site content and the Firefox user interface), which is useful on high resolution displays where text would be too small to be read without scaling.

## How to install

If you simply want to run the latest release and get automatic updates, just install it from the [Firefox Addons directory](https://addons.mozilla.org/en-US/firefox/addon/fxdpi/).

If you don't want to go the easy route:

* [Install and activate the Firefox SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation)
* `cd` to a clone of this repository
* Run `cfx xpi`
* Open the xpi file with Firefox

## How it works

fxdpi changes the `layout.css.devPixelsPerPx` setting. The default is 1.4 because this is what I prefer on my 14" full HD laptop screen. You can change this value in the addon settings.

## Meta data

Author: Daniel Seither

License: MIT

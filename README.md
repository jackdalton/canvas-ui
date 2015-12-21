# canvas-ui

[![Join the chat at https://gitter.im/jackdalton/canvas-ui](https://badges.gitter.im/jackdalton/canvas-ui.svg)](https://gitter.im/jackdalton/canvas-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
This is a HTML5 canvas UI test. It simply renders page objects from an array, `pageObjects`, which contains objects with the following structure:

    {
        x: x-location,
        y: y-location,
        width: width,
        height: height,
        text: "Object text",
        click: function() {
            // click actions
        }
    }

This is just an experiment, and it is quite impractical. Mess with it if you want. Improve it.

View it [here](http://jackdalton.github.io/canvas-ui).

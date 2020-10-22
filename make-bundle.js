var browserify = require("browserify");

var tsify = require("tsify");
var fs = require("fs");

// https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html#browserify

// Windows: https://github.com/PiotrDabkowski/Js2Py/issues/125

// https://github.com/PiotrDabkowski/Js2Py/blob/master/js2py/node_import.py

browserify({debug: true,standalone: "plugin1"})
    .on('error',console.error.bind(console))
    .add("./src/expose.ts")
    .plugin(tsify)
    .bundle(function (err, data) {
        if (err) {
             console.log(err); throw new Error(err); 
        }

        fs.writeFile("./bundle/bundle.js",
            require('babel-core')
                .transform(data, { 'presets': require('babel-preset-es2015') }).code, () => { });
    })

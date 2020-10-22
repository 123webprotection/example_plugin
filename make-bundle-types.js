var dts = require('dts-bundle');

dts.bundle({
	name: 'bundle',
    main: 'bundle/expose.d.ts',
    outputAsModuleFolder: true,
    removeSource: true
});
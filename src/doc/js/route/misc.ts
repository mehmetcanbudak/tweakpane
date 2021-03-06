import * as Util from '../util';

declare let Tweakpane: any;

export const MiscRoute = {
	pathname: /^(\/tweakpane)?\/misc\.html$/,

	init: () => {
		const IMEX_PARAMS = {
			color: '#ff8000',
			name: 'exported json',
			size: 10,
		};
		const IMEX_LOG = {
			log: '',
		};

		const markerToFnMap: {
			[key: string]: (container: HTMLElement) => void;
		} = {
			misc: (container) => {
				const PARAMS = {value: 0};
				const pane = new Tweakpane({
					container: container,
					title: 'Global title',
				});
				pane.addInput(PARAMS, 'value', {
					label: 'custom label',
				});
				const f = pane.addFolder({
					title: 'Folder',
				});
				f.addButton({
					title: 'Button1',
				});
				f.addButton({
					title: 'Button2',
				});
				f.addSeparator();
				f.addButton({
					title: 'Button3',
				});
			},

			event: (container) => {
				const consoleElem = Util.selectContainer('eventconsole');
				if (!consoleElem) {
					return;
				}

				const PARAMS = {
					log: '',
					value: 0,
				};

				const consolePane = new Tweakpane({
					container: consoleElem,
				});
				consolePane.addMonitor(PARAMS, 'log', {
					count: 10,
					interval: 0,
					label: 'console',
					lineCount: 5,
				});

				const pane = new Tweakpane({
					container: container,
				});
				pane
					.addInput(PARAMS, 'value', {
						max: 100,
						min: 0,
					})
					.on('change', (value: number) => {
						PARAMS.log = value.toFixed(2);
						consolePane.refresh();
					});
			},

			globalevent: (container) => {
				const consoleElem = Util.selectContainer('globaleventconsole');
				if (!consoleElem) {
					return;
				}

				const PARAMS = {
					boolean: true,
					color: '#0080ff',
					number: 0,
					string: 'text',

					log: '',
				};

				const consolePane = new Tweakpane({
					container: consoleElem,
				});
				consolePane.addMonitor(PARAMS, 'log', {
					count: 10,
					interval: 0,
					label: 'console',
					lineCount: 5,
				});

				const pane = new Tweakpane({
					container: container,
				});
				pane.addInput(PARAMS, 'boolean');
				pane.addInput(PARAMS, 'color');
				pane.addInput(PARAMS, 'number', {
					max: 100,
					min: 0,
				});
				pane.addInput(PARAMS, 'string');
				pane.on('change', (value: number | string) => {
					const v = typeof value === 'number' ? value.toFixed(2) : value;
					PARAMS.log = `changed: ${v}`;
					consolePane.refresh();
				});
			},

			export: (container) => {
				const consoleElem = Util.selectContainer('exportconsole');
				if (!consoleElem) {
					return;
				}

				const consolePane = new Tweakpane({
					container: consoleElem,
				});
				consolePane.addMonitor(IMEX_LOG, 'log', {
					label: 'preset',
					lineCount: 5,
					multiline: true,
				});

				const pane = new Tweakpane({
					container: container,
				});
				pane.addInput(IMEX_PARAMS, 'name');
				pane.addInput(IMEX_PARAMS, 'size', {
					max: 100,
					min: 0,
				});
				pane.addInput(IMEX_PARAMS, 'color');

				const updatePreset = () => {
					const preset = pane.exportPreset();
					IMEX_LOG.log = JSON.stringify(preset, null, 2);
				};

				pane.on('change', updatePreset);
				updatePreset();
			},

			import: (container) => {
				const consoleElem = Util.selectContainer('importconsole');
				if (!consoleElem) {
					return;
				}

				const consolePane = new Tweakpane({
					container: consoleElem,
				});
				consolePane.addMonitor(IMEX_LOG, 'log', {
					label: 'preset',
					lineCount: 5,
					multiline: true,
				});

				const PARAMS = {
					color: '#0080ff',
					log: '',
					name: 'tweakpane',
					size: 50,
				};
				const pane = new Tweakpane({
					container: container,
				});
				pane
					.addButton({
						title: 'Import',
					})
					.on('click', () => {
						pane.importPreset(IMEX_PARAMS);
					});
				pane.addSeparator();
				pane.addInput(PARAMS, 'name');
				pane.addInput(PARAMS, 'size');
				pane.addInput(PARAMS, 'color');
			},

			presetkey: (container) => {
				const consoleElem = Util.selectContainer('presetkeyconsole');
				if (!consoleElem) {
					return;
				}

				const PARAMS = {
					foo: {speed: 1 / 3},
					bar: {speed: 2 / 3},
					preset: '',
				};

				const consolePane = new Tweakpane({
					container: consoleElem,
				});
				consolePane.addMonitor(PARAMS, 'preset', {
					interval: 0,
					label: 'preset',
					lineCount: 4,
					multiline: true,
				});

				const pane = new Tweakpane({
					container: container,
				});
				pane.addInput(PARAMS.foo, 'speed', {
					max: 1,
					min: 0,
				});
				pane.addInput(PARAMS.bar, 'speed', {
					max: 1,
					min: 0,
					presetKey: 'speed2',
				});

				const updatePreset = () => {
					const preset = pane.exportPreset();
					PARAMS.preset = JSON.stringify(preset, null, 2);
					consolePane.refresh();
				};

				pane.on('change', updatePreset);
				updatePreset();
			},

			roottitle: (container) => {
				const PARAMS = {
					bounce: 0.5,
					gravity: 0.01,
					speed: 0.1,
				};
				const pane = new Tweakpane({
					container: container,
					title: 'Parameters',
				});
				pane.addInput(PARAMS, 'speed', {
					max: 1,
					min: 0,
				});
				const f = pane.addFolder({
					title: 'Advanced',
				});
				f.addInput(PARAMS, 'gravity', {
					max: 1,
					min: 0,
				});
				f.addInput(PARAMS, 'bounce', {
					max: 1,
					min: 0,
				});
			},

			label: (container) => {
				const PARAMS = {
					initSpd: 0,
					size: 30,
				};
				const pane = new Tweakpane({
					container: container,
				});
				pane.addInput(PARAMS, 'initSpd', {
					label: 'Initial speed',
				});
				pane.addInput(PARAMS, 'size', {
					label: 'Force field\nradius',
				});
			},

			insert: (container) => {
				const pane = new Tweakpane({
					container: container,
				});
				pane.addButton({title: 'Run'});
				pane.addButton({title: 'Stop'});
				pane.addButton({title: '**Reset**', index: 1});
			},

			hidden: (container) => {
				const PARAMS = {
					seed: 0.1,
				};
				const pane = new Tweakpane({
					container: container,
				});

				const f = pane.addFolder({title: 'Advanced'});
				f.addInput(PARAMS, 'seed');

				pane
					.addButton({
						index: 0,
						title: 'Toggle',
					})
					.on('click', () => {
						f.hidden = !f.hidden;
					});
			},
		};
		Object.keys(markerToFnMap).forEach((marker) => {
			const initFn = markerToFnMap[marker];
			const container = Util.selectContainer(marker);
			initFn(container);
		});
	},
};

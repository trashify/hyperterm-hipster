'use strict';
const foregroundColor = '#ecf0f1';
const backgroundColor = '#2c3e50';
const red = '#cc6666';
const green = '#b5bd68';
const yellow = '#f0c674';
const blue = '#81a2be';
const magenta = '#b294bb';
const cyan = '#8abeb7';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#22303e',
	cursorColor: '#1abc9c',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#373b41',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}
		.tab_active:before {
			border-color: rgba(236, 240, 241, 0.1);
		}
	`
});

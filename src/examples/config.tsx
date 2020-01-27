import myFirstWidgetLib from '../theme/my-first-widget-lib';

import ButtonExample from './button/ButtonExample';

`!has('docs')`;
import testsContext from './tests';

const tests = typeof testsContext !== 'undefined' ? testsContext : { keys: () => [] };

export const config = {
	name: '@dojo/widgets',
	home: 'src/examples/README.md',
	themes: [
		{ label: 'my-first-widget-lib', theme: myFirstWidgetLib },
		{ label: 'default', theme: {} }
	],
	tests,
	readmePath: (widget: string) => `src/${widget}/README.md`,
	widgetPath: (widget: string, filename: string) => `src/${widget}/${filename || 'index'}.tsx`,
	examplePath: (widget: string, filename: string) =>
		`src/examples/src/widgets/${widget}/${filename || 'index'}.tsx`,
	codesandboxPath: () => '',
	widgets: {
		button: {
			filename: 'Button',
			overview: {
				example: {
					filename: 'ButtonExample',
					module: ButtonExample
				}
			}
		}
    }
};
export default config;

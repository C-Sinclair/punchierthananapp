import { AppRegistry } from 'react-native'
import {
	getStorybookUI,
	configure,
	addParameters
} from '@storybook/react-native'
import { loadStories } from './storyloader'
import { themes } from '@storybook/theming'

addParameters({
	options: {
		theme: themes.dark
	}
})

configure(() => {
	loadStories()
}, module)

const StorybookUI = getStorybookUI({
	port: 7007,
	host: 'localhost',
	onDeviceUI: true,
	resetStorybook: true
})

AppRegistry.registerComponent('RNStorybook', () => StorybookUI)

export { StorybookUI as default }

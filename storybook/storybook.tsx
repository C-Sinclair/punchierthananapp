import React, { useEffect } from "react"
import { getStorybookUI, configure, addParameters } from "@storybook/react-native"
import SplashScreen from "react-native-splash-screen"
import { themes } from '@storybook/theming'
import { loadStories } from './storyloader'

declare var module

configure(() => {
  loadStories()
}, module)

addParameters({
	options: {
		theme: themes.dark
	}
})

const StorybookUI = getStorybookUI({
	port: 7007,
	host: 'localhost',
	onDeviceUI: true,
	resetStorybook: true
})

export const StorybookUIRoot: React.FunctionComponent = () => {
  useEffect(() => {
    SplashScreen.hide()
    // if (typeof __TEST__ === "undefined" || !__TEST__) {
    //   const Reactotron = require("../app/services/reactotron")
    //   const reactotron = new Reactotron.Reactotron()
    //   reactotron.setup()
    // }
  }, [])

  return <StorybookUI />
}

import React from 'react'
import { TabIcon } from './Navigator'
import { storiesOf } from '@storybook/react-native'
import colours from '../themes/Colours'

storiesOf("TabIcon", module)
    .add("Home active", () => (
        <TabIcon name={"Home"} colour={colours.main} />
    ))
    .add("Home inactive", () => (
        <TabIcon name={"Home"} colour={colours.inactive} />
    ))
    .add("Videos active", () => (
        <TabIcon name={"Videos"} colour={colours.main} />
    ))
    .add("Videos inactive", () => (
        <TabIcon name={"Videos"} colour={colours.inactive} />
    ))
    .add("Podcasts active", () => (
        <TabIcon name={"Podcasts"} colour={colours.main} />
    ))
    .add("Podcasts inactive", () => (
        <TabIcon name={"Podcasts"} colour={colours.inactive} />
    ))
    .add("Articles active", () => (
        <TabIcon name={"Articles"} colour={colours.main} />
    ))
    .add("Articles inactive", () => (
        <TabIcon name={"Articles"} colour={colours.inactive} />
    ))
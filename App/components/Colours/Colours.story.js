import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import styled from 'styled-components/native'
import Colours from './Colours'

storiesOf('Colours', module).add('default', () => <MiniApp />)

const Wrapper = styled.ScrollView`
	flex: 1;
	padding: 10px;
`

const TextDisplay = styled.View`
	flex-direction: row;
`

const MiniApp = () => (
	<Wrapper>
		{Object.keys(ColourTypes).map((each, i) => (
			<Colours key={each} Colour={each} key={i}>
				{each}
			</Colours>
		))}
	</Wrapper>
)

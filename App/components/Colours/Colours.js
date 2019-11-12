import * as React from 'react'
import styled from 'styled-components/native'

import ColourTypes from './colourTypes'

const Colour = styled.Text`
	width: 80px;
	height: 20px;
`

const Colours = ({ Colour, children }) => (
	<Colour style={{ backgroundColour: ColourTypes[Colour] }}>
		{children}
	</Colour>
)

export default Colours

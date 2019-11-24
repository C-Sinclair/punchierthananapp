import * as React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '../navigation/useNavigation'

const Articles = () => {
    const nav = useNavigation()
    return (
        <View>
            <Text>Articles Here!</Text>
        </View>
    )
}

export default Articles
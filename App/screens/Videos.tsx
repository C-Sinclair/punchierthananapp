import React from 'react'
import { Button, View, Text } from 'react-native'
import { useNavigation } from '../navigation/useNavigation'

const Videos = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Videos!</Text>
            <Button 
                title="Back Home"
                onPress={() => {
                    navigation.navigate('home')
                }}
                />
        </View>
    )
}

export default Videos
import React from 'react'
import { Button, View, Text } from 'react-native'
import { useNavigation } from '../navigation/useNavigation'

const Home = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Punchier Than An App!</Text>
            <Button 
                title="Videos"
                onPress={() => {
                    navigation.navigate('videos')
                }}
                />
        </View>
    )
}

export default Home
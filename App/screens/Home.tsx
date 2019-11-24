import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'

const Home = () => {
    const [ quote, setQuote ] = useState(quotes[0])
    return (
        <View>
            <Text testID="homeTitle">Punchier Than An</Text>
            <Text testID="quote">{quote.text}</Text>
            <Text testID="quotedFrom">{quote.from}</Text>
            <Button 
                testID=""
                title="Refresh quote"
                onPress={() => setQuote(quotes[1])}
                />
        </View>
    )
}

const quotes = [
    {
        text: "We all know what happened to Gandhi... DEATH BY SNAKES!",
        from: "Gandhi's brother Craig"
    },
    {
        text: "",
        from: ""
    }
]

export default Home
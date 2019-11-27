import React, { useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import colours from '../themes/Colours'

const Home = () => {
    const [quote, setQuote] = useState(quotes[0])
    return (
        <View style={styles.container}>
            <Text testID="homeTitle" style={styles.title}>Punchier Than An</Text>
            <Text testID="quote" style={styles.quote}>{quote.text}</Text>
            <Text testID="quotedFrom" style={styles.from}>{quote.from}</Text>
            <Button
                testID="refresh"
                title="Refresh quote"
                onPress={() => setQuote(quotes[1])}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colours.background
    },
    title: {
        fontSize: 20,
        margin: 10
    },
    quote: {
        fontSize: 16
    },
    from: {
        fontSize: 12,
        textAlign: 'right'
    }
})

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
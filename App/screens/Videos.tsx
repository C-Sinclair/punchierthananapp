import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { StatusBar, View, StyleSheet } from 'react-native'
import VideoGallery from '../components/VideoGallery'
import VideoPlayer from '../components/VideoPlayer'

const Videos = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor="#fff"
                barStyle="dark-content"
                />
            <Router>
                <Stack key="videos">
                    <Scene key="gallery" component={VideoGallery} title="Video Gallery" />
                    <Scene key="watch" component={VideoPlayer} title="View Video" />
                </Stack>
            </Router>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Videos
import React, { FunctionComponent } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

const VideoPlayer: FunctionComponent<{ url: String }> = ({ url }) => {

    return (
        <SafeAreaView style={styles.safeArea}>
            {
                <WebView
                    source={{ uri: `https://www.youtube.com/embed/${url}` }}
                    startInLoadingState={true}
                />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default VideoPlayer
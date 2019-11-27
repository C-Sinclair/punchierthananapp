import React, { FunctionComponent, useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image, Dimensions, ImageURISource, ScrollView, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { YOUTUBE_API_KEY } from 'react-native-dotenv'
import colours from '../themes/Colours';

const MAX_RESULT = 15;
const PLAYLIST_ID = "PL3Hl6lCol8gppjsN2mhw1adA_5rVkQyr0";

const VideoGallery: FunctionComponent = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchVideos()
    }, [])

    const fetchVideos = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${YOUTUBE_API_KEY}`);
        const json = await response.json()
        setVideos(json.items)
    }

    const playVideo = url => {
        Actions.watch({ url })
    }

    const thumbnailUrl = videoId => `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={videos}
                numColumns={2}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => playVideo(item.contentDetails.videoId)}>
                        <View style={{
                            position: 'relative'
                        }}>
                            <Image
                                style={styles.thumbnail}
                                source={{ uri: thumbnailUrl(item.contentDetails.videoId) }}
                            />
                            <Text
                                style={styles.item}
                            >
                                {item.snippet.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scroll: {
        flex: 1,
        backgroundColor: colours.background
    },
    item: {
        padding: 10,
        fontSize: 12,
        height: 44,
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: WIDTH / 2,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#FFF'
    },
    thumbnail: {
        width: WIDTH / 2,
        height: WIDTH / 2,
        resizeMode: 'cover'
    }
})

export default VideoGallery
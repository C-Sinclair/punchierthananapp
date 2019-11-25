import React, { FunctionComponent, useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native'; 
import { Actions } from 'react-native-router-flux'; 
import { YOUTUBE_API_KEY } from 'react-native-dotenv'

const MAX_RESULT = 15; 
const PLAYLIST_ID = "PL3Hl6lCol8gppjsN2mhw1adA_5rVkQyr0"; 

const VideoGallery: FunctionComponent = () => {

    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        fetchVideos()
    }, [])

    const fetchVideos = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${YOUTUBE_API_KEY}`);
        const json = await response.json()
        setVideos(json.items)
        console.log(`Videos fetched: ${json.items}`)
    }

    const playVideo = url => {
        Actions.watch({ url })
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={videos}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => 

                <TouchableOpacity
                    style={styles.demacate}
                    onPress={() => playVideo(item.contentDetails.videoId)}
                    >
                    <Text 
                    style={styles.item} 
                    > 
                    {item.snippet.title} 
                    </Text>
                </TouchableOpacity>
              }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#fff'
    },
    demacate: {
      borderBottomColor: 'blue',
      borderBottomWidth: 2,
      borderRadius:10
    },
    item: {
      padding: 10,
      fontSize: 12,
      height: 44,
    },
})

export default VideoGallery
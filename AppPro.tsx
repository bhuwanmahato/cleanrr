import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
       <View style={styles.container}>
        <Text style={isDarkMode? styles.whiteText : styles.darkText}>
            Hello Bhuwan!!
        </Text>
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // align elements from left to right
        justifyContent: 'center' // align elements from top to bottom
    },
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro
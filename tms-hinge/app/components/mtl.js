import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { Themes } from '../../assets/Themes';


function Mtl() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} objectFit="contain" source={require('../../assets/Profiles/mtl.jpg')}>
            </Image>
            <View style={styles.textPosition}> 
                <Text style={styles.name}> MTL </Text>
                <Text style={styles.location}> 2 miles away </Text>
            </View> 
        </View> 
    )
}

export default Mtl;

const styles = StyleSheet.create({
    container: {
        width: '75%',
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowRadius: Themes.light.shadows.shadowRadius,
    }, 
    image: {
        width: null,
        // width: '100%',
        resizeMode: 'cover',
        height: null,
        // height: '100%',
        aspectRatio: 1/1.1,
        borderRadius: 12.5,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    textPosition: {
        position: "absolute",
        margin: 15,
        justifyContent: "space-between",
        height: '90%',
    },
    name: {
        fontSize: 32,
        color: "white",
        fontFamily:"Sydney",
    },
    location: {
        fontSize: 18,
        color: "white",
        fontFamily:"Sydney"
    },
});

import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';

function Header() {
    return(
        <View style={styles.container}>
            <Image 
            style={styles.icon} source={require('../../assets/Icons/menu_light.png')}>
            </Image>
            <Text style={styles.text}>  ensom </Text>
            <Image 
            style={styles.icon} source={require('../../assets/Icons/sun.png')}>
            </Image>
        </View> 
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        margin: 25
    },  
    icon: {
        ...Platform.select({
            ios: {
              width: 41,
              height: 41,
              margin: 15

            },
            android: {
              width: 54,
              height: 54,
              margin: 15
            }
        })
    },
    text: {
        fontSize: 32,
        fontFamily:"Sydney"
    },
});

import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';

function Tabs() {
    return(
        <View style={styles.container}>                 
                <View style={styles.imageCaptionPair}> 
                    <Image 
                    style={styles.icon} source={require('../../assets/Icons/discover_dark.png')}>
                    </Image>   
                    <Text style={styles.text}> Discover </Text>   
                </View>

                <View style={styles.imageCaptionPair}> 
                    <Image 
                    style={styles.icon} source={require('../../assets/Icons/heart_light.png')}>
                    </Image>   
                    <Text style={styles.text}> Matches </Text>   
                </View>

                <View style={styles.imageCaptionPair}> 
                    <Image 
                    style={styles.icon} source={require('../../assets/Icons/messages_light.png')}>
                    </Image>   
                    <Text style={styles.text}> DMs </Text>   
                </View>
        </View>
    )
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        width: '100%',
        height: '10%',
        position: 'absolute',
        bottom: 0,
        paddingLeft: '12.5%',
        paddingRight: '12.5%',
        paddingTop: 20,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    imageCaptionPair: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 5
    },
    text: {
        fontSize:18,
        color: "white",
    }
});

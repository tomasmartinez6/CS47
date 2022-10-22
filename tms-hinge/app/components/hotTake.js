import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';

function hotTake() {
    return(
    <View style={styles.container}> 
        <Text style={styles.title}> My hottest take </Text>
        <View style={styles.header}> 
            <Image style={styles.playButton} source={require('../../assets/Icons/player_light.png')}>
            </Image>
            <Image style={styles.sound} source={require('../../assets/Icons/audio_waveform_light.png')}>
            </Image>
        </View>
    </View>
    )
}

export default hotTake;

const styles = StyleSheet.create({
    container: {
      borderColor: 'black',
      backgroundColor: "white",
      borderRadius: 20,
      padding: 8,
      width: '75%',
      height: "15%",
      margin: 15,
      shadowColor: Themes.light.shadows.shadowColor,
      shadowOpacity: Themes.light.shadows.shadowOpacity,
      shadowOffset: Themes.light.shadows.shadowOffset,
      shadowRadius: Themes.light.shadows.shadowRadius,
    },
    playButton: {
      marginRight: 10,
      resizeMode: 'contain',
      flex: 1
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4,
      marginRight: 'auto',
      marginLeft: 'auto',
      width: "90%",
      height: "70%"
    },
    sound: {
      paddingLeft: '5%',
      resizeMode: 'contain',
      flex: 5,
      width: "100%"
    },
    title: {
      fontSize: 20,
      marginLeft: 10,
      marginTop: 10,
      fontFamily:"Sydney"
    },
  });
  
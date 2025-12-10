import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import coffeeup from '../../assets/images/coffeeup.jpg'


const app = () => {
  return (
    <View style={styles.container}>
       <ImageBackground source={coffeeup} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
        <Text style={styles.subtext}>Welcome To Samworld Coffee!</Text>
      </ImageBackground>
    </View>
  
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
},
text: {
  color: 'white',
  fontSize: 42,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
subtext: {
  color: "white",
  fontSize: 20,
  textAlign: 'center',
},
image: {
  width: '100%',
  height: '100%',
  flex: 1,
  justifyContent: 'center',
  resizeMode: 'cover',
},
innerContainer: {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
},
})
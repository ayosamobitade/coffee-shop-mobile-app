import { Link } from 'expo-router'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import coffeeup from '../../assets/images/coffeeup.jpg'


const app = () => {
  return (
    <View style={styles.container}>
       <ImageBackground source={coffeeup} resizeMode="cover" style={styles.image}>
        <View style={styles.businessNameContainer}>
        <Text style={styles.title}>Coffee Shop</Text>
        <Text style={styles.subTitle}>Welcome To Samworld Coffee!</Text>
        </View>

        <Link style={{marginHorizontal: 'auto'}} asChild href="/contact">
        <Pressable style={styles.button}>
       <Text style={styles.buttonText}>Contact Us</Text>
        </Pressable>
        </Link>
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
businessNameContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 160,
},
title: {
  color: 'white',
  fontSize: 42,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
subTitle: {
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
link : {
  color: 'white',
  fontSize: 42,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 20,
  padding: 4,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  textDecorationLine: 'underline',
},
button: {
  height: 60,
  borderRadius: 20,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  padding: 6,
  justifyContent: 'center',
},
buttonText : {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 4,
},
})
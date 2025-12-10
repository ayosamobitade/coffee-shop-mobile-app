import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact us</Text>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})
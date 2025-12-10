import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>SamWorld Coffee</Text>
      <Text style={styles.subheader}>We’d love to hear from you!</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Address</Text>
        <Text style={styles.text}>36 Zone 3 Road A Paara, Ibadan, Nigeria</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Phone</Text>
        <Text style={styles.text}>+234 806 270 6237</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.text}>support@samworldcoffee.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Opening Hours</Text>
        <Text style={styles.text}>Mon–Fri: 7:00am – 9:00pm</Text>
        <Text style={styles.text}>Sat: 8:00am – 10:00pm</Text>
        <Text style={styles.text}>Sun: 10:00am – 7:00pm</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Your Message"
          placeholderTextColor="#aaa"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#5a3d2b",
  },
  subheader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    color: "#8b5e3b",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5a3d2b",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginTop: 3,
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#c9a27c",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  textarea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#5a3d2b",
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

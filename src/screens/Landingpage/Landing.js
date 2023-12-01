import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();

  const onPressStart = () => {
    // Navigate to the login or home screen, replace "Login" with your desired screen name
    navigation.navigate("Login");
  };

  const coffeeQuotes = [
    "meow",
  ];

  // Get a random coffee quote
  const randomQuote = coffeeQuotes[Math.floor(Math.random() * coffeeQuotes.length)];

  return (
    <ImageBackground
      source={require("../../../assets/images/background.jpg")} // Replace with your image source
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to meow App</Text>
        <Text style={styles.quote}>{`"${randomQuote}"`}</Text>
        <TouchableOpacity style={styles.button} onPress={onPressStart}>
          <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>
        <View style={styles.emptySpace} /> {/* Adds empty space */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end", // Aligns content at the bottom
  },
  container: {
    backgroundColor: "rgba(248, 241, 230, 0.6)", // Coffee-themed background color with opacity
    paddingHorizontal: 20,
    paddingBottom: 50, // Adjust this value to control the space between button and bottom
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A2F18", // Dark brown text color
    marginBottom: 10,
  },
  quote: {
    fontStyle: "italic",
    fontSize: 18,
    color: "#4A2F18", // Dark brown text color
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#D4A55D", // Light brown button color
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A2F18", // Dark brown button text color
  },
  emptySpace: {
    marginBottom: 20, // Adds space between button and bottom
  },
});

export default LandingPage;

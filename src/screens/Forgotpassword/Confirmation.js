import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider as PaperProvider, Button as PaperButton, DefaultTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const coffeeTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4A2F18", // Dark brown for primary elements
    accent: "#D4A55D", // Light brown for accents
    background: "#F8F1E6", // Beige background color
    text: "#000000", // Black text color
  },
};

const Confirmation = () => {
  const navigation = useNavigation();

  const onBackToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <PaperProvider theme={coffeeTheme}>
      <View style={styles.container}>
        <Text style={styles.text}>Your password has been reset successfully</Text>
        <Text style={styles.text}>Now Login with your new password</Text>
        <PaperButton
          mode="contained"
          style={styles.primaryButton}
          onPress={onBackToLogin}
        >
          Log In
        </PaperButton>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F8F1E6", // Beige background color
    borderRadius: 5,
  },
  text: {
    marginVertical: 10,
    color: "#4A2F18", // Dark brown text color
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: "#4A2F18", // Dark brown for primary button
  },
});

export default Confirmation;

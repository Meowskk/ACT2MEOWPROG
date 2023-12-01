import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider as PaperProvider, Button as PaperButton, DefaultTheme } from "react-native-paper";
import Input from "../../components/Inputs/input";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

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

const Forgotpassword = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const EMAIL_REGEX = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

  const onContinuePressed = () => {
    navigation.navigate("Reset Confirmation");
  };

  return (
    <PaperProvider theme={coffeeTheme}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password?</Text>
        <Input
          name="Enter Email"
          placeholder="Enter Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <PaperButton
          mode="contained"
          style={styles.primaryButton}
          onPress={handleSubmit(onContinuePressed)}
        >
          Continue
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
  title: {
    fontSize: 25,
    fontWeight: "300",
    color: "#4A2F18", // Dark brown text color
    marginBottom: 20,
  },
  primaryButton: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#4A2F18", // Dark brown for primary button
  },
});

export default Forgotpassword;

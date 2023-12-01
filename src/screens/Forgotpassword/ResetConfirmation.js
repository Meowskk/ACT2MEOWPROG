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

const ResetConfirmation = () => {
  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();
  const pass = watch("new-pass");

  const code = 1234567890;

  const onResetPass = () => {
    navigation.navigate("Confirmation");
  };

  return (
    <PaperProvider theme={coffeeTheme}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Your Password</Text>
        <Text style={styles.text}>
          We have sent a four digit code on your phone/email
        </Text>
        <Input
          name="Four digit code"
          placeholder="Four digit code"
          control={control}
          rules={{
            required: "4-digit code required",
            maxLength: { value: 4, message: "Code should 4 digit max" },
            pattern: {
              value: /^[0-9]*$/,
              message:
                "Please enter a valid 4-digit code containing only numbers",
            },
          }}
        />
        <Input
          name="new-pass"
          placeholder="New password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <Input
          name="Confirm password"
          placeholder="Confirm password"
          control={control}
          secureTextEntry
          rules={{
            validate: (value) => value === pass || "Password do not match",
          }}
        />
        <PaperButton
          mode="contained"
          style={styles.primaryButton}
          onPress={handleSubmit(onResetPass)}
        >
          Reset Password
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
  text: {
    marginVertical: 10,
    color: "#4A2F18", // Dark brown text color
  },
  primaryButton: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#4A2F18", // Dark brown for primary button
  },
});

export default ResetConfirmation;

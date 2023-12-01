import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Provider as PaperProvider, Button as PaperButton, DefaultTheme } from "react-native-paper";
import Input from "../../components/Inputs/input";
import Logo from "../../../assets/images/logo.jpg";
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

const Register = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const pass = watch("password");

  const onBackToLogin = () => {
    navigation.navigate("Login");
  };

  const onRegisterPressed = () => {
    navigation.navigate("Login");
  };

  const EMAIL_REGEX = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

  return (
    <PaperProvider theme={coffeeTheme}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={Logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Create an account</Text>

        <Input
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 4,
              message: "Username should be at least 4 characters minimum",
            },
            maxLength: {
              value: 24,
              message: "Username should be only 24 characters long",
            },
          }}
        />

        <Input
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />

        <Input
          name="password"
          placeholder="Password"
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
          name="confirm-password"
          placeholder="Confirm Password"
          control={control}
          secureTextEntry
          rules={{
            validate: (value) => value === pass || "Password do not match",
          }}
        />

        <PaperButton
          mode="contained"
          style={styles.primaryButton}
          onPress={handleSubmit(onRegisterPressed)}
        >
          Register
        </PaperButton>

        <PaperButton
          style={styles.LoginButton}
          onPress={onBackToLogin}
        >
          <Text style={styles.LoginText}>Already have an Account? <Text style={{ textDecorationLine: "underline" }}>Login</Text> here.</Text>
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
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 70,
  },
  primaryButton: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#4A2F18", // Dark brown for primary button
  },
  LoginButtonButton: {
    width: "100%",
    marginTop: 10,
    borderColor: "#4A2F18", // Dark brown border color
    borderWidth: 1,
  },  

  LoginText: {
    fontWeight: "bold",
    color: "#4A2F18", // Dark brown text color

  },


});

export default Register;

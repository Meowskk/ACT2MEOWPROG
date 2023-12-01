import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { Provider as PaperProvider, Button as PaperButton, DefaultTheme } from "react-native-paper";
import Input from "../../components/Inputs/input";
import Logo from "../../../assets/images/logo.jpg";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

// Define the themed colors
const MEOWTHEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#476930", // Dark greeb for primary elements
    accent: "#019875", // Light brown for accents
    background: "#DFF5CE", // Beige background color
    text: "#000000", // Black text color
  },
};

const LogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onLoginPress = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onDontHaveAccountPressed = () => {
    navigation.navigate("Register");
  };

  return (
    <PaperProvider theme={MEOWTHEME}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={Logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Log In</Text>

        <Input
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
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

        <PaperButton
          mode="contained"
          style={styles.primaryButton}
          onPress={handleSubmit(onLoginPress)}
        >
          Log In
        </PaperButton>

        <PaperButton
          mode="outlined"
          style={styles.tertiaryButton}
          onPress={onForgotPasswordPressed}
        >
          Forgot Password?
        </PaperButton>

        <PaperButton
          style={styles.registerButton}
          onPress={onDontHaveAccountPressed}
        >
          <Text style={styles.registerText}>Don't have an account? <Text style={{ textDecorationLine: "underline" }}>Register</Text> here.</Text>
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
  tertiaryButton: {
    width: "100%",
    marginTop: 10,
    borderColor: "#4A2F18", // Dark brown border color
    borderWidth: 1,
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    fontWeight: "bold",
    color: "#4A2F18", // Dark brown text color
  },
});

export default LogIn;

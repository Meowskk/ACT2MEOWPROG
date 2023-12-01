import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoffeeHomePage = () => {
  const navigation = useNavigation();

  const coffeeTypes = [
    {
      id: "1",
      name: "Espresso",
      image: require("../../../assets/images/espresso.png"),
    },
    {
      id: "2",
      name: "Latte",
      image: require("../../../assets/images/latte.png"),
    },
    {
      id: "3",
      name: "Cappuccino",
      image: require("../../../assets/images/cappuccino.jpg"),
    },
    {
      id: "4",
      name: "Americano",
      image: require("../../../assets/images/americano.png"),
    },
    // Add more coffee types as needed
  ];

  const navigateToCoffeeDetails = (coffeeType) => {
    // Navigate to the details screen for the selected coffee type
    navigation.navigate("CoffeeDetails", { coffeeType });
  };

  const renderCoffeeType = ({ item }) => (
    <TouchableOpacity style={styles.coffeeTypeContainer} onPress={() => navigateToCoffeeDetails(item)}>
      <Image source={item.image} style={styles.coffeeTypeImage} />
      <Text style={styles.coffeeTypeName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../../../assets/images/coffeebackground.jpg")} // Replace with your image source
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Coffee World</Text>
        <FlatList
          data={coffeeTypes}
          renderItem={renderCoffeeType}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 20,
  },
  flatListContainer: {
    justifyContent: "space-between",
  },
  coffeeTypeContainer: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
  },
  coffeeTypeImage: {
    width: "100%",
    height: 150,
    marginBottom: 8,
    resizeMode: "cover",
  },
  coffeeTypeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});

export default CoffeeHomePage;

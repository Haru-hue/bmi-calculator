import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { Input } from "./Input";

const MainScreen = () => {
  const [bmiInfo, setBMIInfo] = useState({
    age: 0,
    weight: 0,
    height: 0,
    bmi: 0,
  });

  const calculateBMI = () => {
    const heightInMeters = bmiInfo.height / 100;
    const bmi = bmiInfo.weight / (heightInMeters * heightInMeters);
    setBMIInfo({ ...bmiInfo, bmi });
  };

  // const handleChange = ({ name, action}: { name: string, action: string}) => {
  //     setBMIInfo((prev) => ({
  //         ...prev,
  //         [name]:
  //     }))
  // }

  return (
    <ScrollView style={mainScreen.container}>
      <View style={{
        display: "flex",
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around",
        marginBottom: 20,
        gap: 20,
        padding: 10
      }}>
        <Input
          style={[mainScreen.input, mainScreen.shadowProp]}
          title="Age"
          input={bmiInfo.age}
        />
        <Input
          style={[mainScreen.input, mainScreen.shadowProp]}
          title="Weight"
          input={bmiInfo.age}
        />
      </View>
      <View style={[mainScreen.input, mainScreen.shadowProp]}>
        <Text>Height</Text>
        <Text>cm</Text>
        <Text>{bmiInfo.height}</Text>
      </View>
      <View>
        <Text>Gender</Text>
        <Switch />
        <Text>Male</Text>
        <Text>Female</Text>
      </View>
      <Button title="Calculate BMI" onPress={() => calculateBMI()} />
    </ScrollView>
  );
};

export default MainScreen;

const mainScreen = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FF",
    display: "flex",
    paddingVertical: 40,
    gap: 10,
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "37.5%",
    padding: 10,
    borderRadius: 10,
    gap: 4
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

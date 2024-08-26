import { fonts } from "@/styles/fonts";
import { Button, StyleSheet, Text, View } from "react-native";
import { Iconify } from "react-native-iconify";

export const Input = ({ title, input, style }: InputProps) => {
  return (
    <View style={style}>
      <Text style={[fonts.interMedium, { fontSize: 13 }]}>{title}</Text>
      <Text style={[fonts.interSemiBold, { fontSize: 36 }]}>{input}</Text>
      <View
        style={{
          width: "100%",
          borderBottomColor: "#E4E4E4",
          borderBottomWidth: 0.25,
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 6,
            height: 4,
            backgroundColor: "#576EE5",
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: 6,
        }}
      >
        <View style={buttonStyle.button}>
          <Iconify icon="ph:minus-bold" size={20} color="#576EE5" />
        </View>
        <View style={buttonStyle.button}>
          <Iconify icon="ph:plus-bold" size={20} color="#576EE5" />
        </View>
      </View>
    </View>
  );
};

const buttonStyle = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    padding: 2,
    borderRadius: 50,
  },
});

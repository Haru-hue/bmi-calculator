import { fonts } from "@/styles/fonts";
import { Text, View } from "react-native";
import { Iconify } from "react-native-iconify";

export const Input = ({ title, input, style }: InputProps) => {

  return (
    <View style={style}>
      <Text style={fonts.interRegular}>{title}</Text>
      <Text>{input}</Text>
      <>
        <Iconify icon="ph:minus-bold" size={23} color="red" />
        <Iconify icon="ph:plus-bold" size={23} color="red" />
      </>
    </View>
  );
};

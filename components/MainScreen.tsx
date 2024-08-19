import { useState } from "react";
import { ScrollView, Text, View } from "react-native"
import { Iconify } from 'react-native-iconify';

const MainScreen = () => {
    const [bmiInfo, setBMIInfo] = useState({
        weight: 0,
        height: 0,
        bmi: 0,
        category: "",
        status: "",
        color: "",
    })

    return (
        <ScrollView>
            <Iconify icon="ph:minus-bold" size={23} color="red"  />
            <Text>s</Text>
            <Iconify icon="ph:plus-bold" size={23} color="red" />
            <Text>Scroll here</Text>
        </ScrollView>
    )
}

export default MainScreen;
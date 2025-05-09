import { Text, View, StyleSheet } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#1e90ff",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: "center",
    },
    headerText: {
        flex: 1,
        textAlign: "center",
        fontSize: 25,
    }
})



const AppHeader =() => {
    const navigation: any = useNavigation();
    return(
        <View style={styles.container}>
            <MaterialIcons
                name="menu"
                size={40} 
                color={"black"} 
                onPress={() => navigation.openDrawer()}
             />
            <Text style={[styles.headerText, globalStyles.globalFont]}>   Header   </Text>
        </View>
    )
}

export default AppHeader
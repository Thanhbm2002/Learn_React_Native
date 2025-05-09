import { Text, View , StyleSheet , Button} from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useRoute, RouteProp } from '@react-navigation/native';



const DetailScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
  
    return(
        <View>
            <Text style={styles.review}>Review Detail</Text>
            <Text>{route.params?.id}</Text>
            <Text>{route.params?.title}</Text>
            <Text>{route.params?.star}</Text>
            <Button title="Go Home"
                         onPress={()=> navigation.navigate("Home")}
                        />
        </View>
    )
}

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
    }
})
export default DetailScreen;
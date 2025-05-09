import { Text, View , StyleSheet , Button, Image, ImageBackground} from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useRoute, RouteProp } from '@react-navigation/native';
import starIcon from "../../assets/images/star.png";


const DetailScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
  
    return(
        <ImageBackground style={{flex: 1,}} source={require("../../assets/images/react-native.png")}>
            <Text style={styles.review}>Review Detail</Text>
            <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Title: {route.params?.title}</Text>
            <Text style={styles.reviewText}>
                Rating: {route.params?.star}
                <Image style={{height: 30, width: 30,}} source={require("../../assets/images/star.png")}/>
                <Image style={{height: 30, width: 30,}} source={require("../../assets/images/star.png")}/>
                <Image style={{height: 30, width: 30,}} source={require("../../assets/images/star.png")}/>
                <Image style={{height: 30, width: 30,}} source={require("../../assets/images/star.png")}/>
                <Image style={{height: 30, width: 30,}} source={starIcon}/>
                
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS_REGULAR,
        padding: 15,
        color: "white",
    }
})
export default DetailScreen;
import { View,Text, StyleSheet } from "react-native"

const FlexBox = () => {
    return(
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Item 3</Text>
            </View>
            <View style={styles.item3}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item4}>
                <Text>Item 4</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",

        
    },
    item1: {
        backgroundColor: "violet",
        padding: 20,
        
    },
    item2: {
        backgroundColor: "orange",
        padding: 20,
    },
    item3: {
        backgroundColor: "gray",
        padding: 20,
    },
    item4: {
        backgroundColor: "cyan",
        padding: 20,
    },
})
export default FlexBox;
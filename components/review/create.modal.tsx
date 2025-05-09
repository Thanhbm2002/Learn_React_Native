import { Modal, View, Text, Pressable, StyleSheet, Alert, TextInput, Button } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        paddingVertical: 10,    
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "red",
    },
    groupInput: {
        marginBottom: 10,
    },
    input: {
       borderWidth: 1,
       borderColor: "darkgray",
       marginVertical: 10,
       paddingVertical: 5,
       paddingHorizontal:10,
       height:40,
       borderRadius: 5,
    },
    inputTitle:{
        fontSize: 20,
        fontWeight: "400",
    }

});

interface IProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void
}

const CreateModal = (props: any) => {
  const { modalVisible, setModalVisible } = props;

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.container} >
                {/* header */}
                <View style={styles.header}>
                    <Text style={{fontSize: 25,}}>Create A Review</Text>
                    <AntDesign name="close" size={24} color="black" 
                    onPress={() => setModalVisible(false)} />
                </View>
                {/* body */}
                <View>
                    <View style={styles.groupInput}>
                        <Text style={styles.inputTitle}>Nội dung</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.inputTitle}>Rating</Text>
                        <TextInput style={styles.input} keyboardType="numeric"/>
                    </View>
                </View>
                {/* footer */}
                <View style={{marginTop: 20}}>
                    <Button title="Add" />
                </View>

            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        
      </Modal>
    </>
  );
};

export default CreateModal;

import {SafeAreaView, Text, View, StyleSheet} from "react-native";
import {Ionicons, MaterialCommunityIcons, FontAwesome} from "react-native-vector-icons";

const App = props => {
  return (
      <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }} >

        {/*Heading*/}
        <View>
          <Text style={styles.heading}>
            <Text style={{ color: "#024c98", fontWeight: "bold" }}>NUG</Text>
            <Text style={{ color: "#4b99fb" }}>Pay</Text>
          </Text>
        </View>

        {/*Your Balance*/}
        <View style={styles.center}>
          <View style={styles.box}>
            <Text>Your Balance</Text>
            <Text style={styles.balanceSize}>7,000 Ks</Text>
            <View style={styles.userQr}>
              <Text style={{ color: "#374151" }}>poeyoonei.nugpay.app</Text>
              <MaterialCommunityIcons name="qrcode-scan" size={25} color={"#374151"} />
            </View>
          </View>
        </View>

        {/*Add Receive*/}
        <View style={styles.addRec} >
          <View style={styles.boxRec}>
            <Ionicons name="ios-arrow-down-circle-outline" size={35} color={"#5097fa"} />
            <Text style={{ marginTop: 20, color: "#374151" }}>Add or Receive</Text>
          </View>
          <View style={styles.boxRec}>
            <View style={{ width: 30, height: 30, borderWidth: 2, borderColor: "#5097fa", borderRadius: 100, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <FontAwesome name="send-o" size={15} color={"#5097fa"} />
            </View>
            <Text style={{ marginTop: 20, color: "#374151" }}>Send Money</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={{ width: "95%", backgroundColor: "#ffffff", borderRadius: 15, padding: 20}}>
            <Text style={{ color: "#374151" }}>Recent Activity</Text>
          </View>
        </View>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 15
  },
  box: {
    width: "95%",
    // height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20
  },
  center: {
    alignItems: "center"
  },
  balanceSize: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20
  },
  userQr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addRec: {
    // flex: 1,
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10
  },
  boxRec: {
    // flex: 1,
    width: "48%",
    height: 120,
    backgroundColor: "#ffffff",
    marginRight: 10,
    borderRadius: 15,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10
  },
  boxRec2: {
    // flex: 1,
    width: "48%",
    height: 120,
    backgroundColor: "#ffffff",
    marginRight: 10,
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 20
  }
})

export default App;
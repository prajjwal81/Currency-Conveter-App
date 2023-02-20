import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

export default function App() {
  const [enterAmount, setEnterAmount] = useState("");
  const [convertedVal, setConvertedVal] = useState("");

  const currencyConverterHandler = (currency) => {
    const value = parseFloat(enterAmount) * currencyPerRupee[currency];
    setConvertedVal(value);
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.result}>{convertedVal}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter value"
            placeholderTextColor="black"
            onChangeText={(text) => setEnterAmount(text)}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View style={styles.currenctBtnContainer}>
          {Object.keys(currencyPerRupee).map((currency) => {
            return (
              <TouchableOpacity
                style={styles.currencyBtn}
                key={currency}
                onPress={() => {
                  currencyConverterHandler(currency);
                }}
              >
                <Text style={styles.currencyBtnText}>{currency}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
  result: {
    borderWidth: 2,
    borderColor: "#bbe1fa",
    height: 40,
    width: 200,
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 80,
    borderRadius: 10,
    paddingTop: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#bbe1fa",
    height: 40,
    width: 200,
    textAlign: "center",
    color: "#fff",
    borderRadius: 10,
  },
  currenctBtnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 80,
    marginTop: 40,
    padding: 9,
  },
  currencyBtn: {
    borderWidth: 2,
    color: "#bbe1fa",
    width: "32%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    height: 50,
    borderRadius: 20,
    marginRight: 2,
    backgroundColor: "#0f4c75",
  },
  currencyBtnText: {
    textAlign: "center",
  },
});

import React, { useLayoutEffect, useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

import * as S from "./styles";

export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Start calender
  const [selectedDate, setSelectedDate] = useState(null);

  const tenDaysFromNow = new Date();
  tenDaysFromNow.setDate(tenDaysFromNow.getDate() + 10);

  const markedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = { selected: true };
  }

  const minDate = new Date().toISOString().split("T")[0];
  const maxDate = tenDaysFromNow.toISOString().split("T")[0];
  //end calender

///Master dammy data



  return (
    <ScrollView style={styles.container}>
     
      <Agenda
        minDate={minDate}
        maxDate={maxDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        renderEmptyData={() => (
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#808080",
              margin: 10,
              width: 250,
              height: 250,
              borderRadius: 130,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Late for 47 Days</Text>
            <Text style={{ fontSize: 40 }}> 47 Days</Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: 30,
                width: 90,
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                margin: 3,
              }}
            >
              <Text>Log Period</Text>
            </TouchableOpacity>
          </View>
        )}
        refreshing={false}

        calendarWidth={320}
      />

      <Text style={{ fontSize: 20, margin: 10 }}>My daily insight Today</Text>
      <ScrollView horizontal={true} style={{ backgroundColor: "#DADBDD" }}>
        <TouchableOpacity
          style={{
            width: 120,
            height: 170,
            backgroundColor: "white",
            borderRadius: 20,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <View style={{ margin: 20, alignItems: "center" }}>
            <Text style={{ color: "#0C090A", textAlign: "center" }}>
              Log your symptoms
            </Text>
          </View>
          <View>
            <AntDesign name="pluscircle" size={40} color="#306EFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 120,
            height: 170,
            backgroundColor: 'transparent',
            borderWidth:2,
            borderColor:'#FFC0CB',
            borderRadius: 20,
            alignContent: "center",
            justifyContent: "center",

            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 20,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../png/nursing-nurse-nb.png")}
              resizeMode="cover"
            >
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  fontSize: 24,
                  textAlign: "left",
                }}
              >
                Last Chance for your special offer
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 120,
            height: 170,
            backgroundColor: 'transparent',
            borderWidth:2,
            borderColor:'#FFC0CB',
            borderRadius: 20,
            alignContent: "center",
            justifyContent: "center",

            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 20,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "95%",
                justifyContent: "center",
                alignItems: "center",
                margin:1,
              }}
              source={require("../png/businessperson-man-nb.png")}
              resizeMode="cover"
            >
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  fontSize: 24,
                  textAlign: "left",
                }}
              >
                Last Chance
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 120,
            height: 170,
            backgroundColor: "white",
            borderRadius: 20,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <View style={{ margin: 20, alignItems: "center" }}>
            <Text style={{ color: "#0C090A", textAlign: "center" }}>
              Log your symptoms
            </Text>
          </View>
          <View>
            <AntDesign name="pluscircle" size={40} color="#306EFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 120,
            height: 170,
            backgroundColor: 'transparent',
            borderWidth:2,
            borderColor:'#FFC0CB',
            borderRadius: 20,
            alignContent: "center",
            justifyContent: "center",

            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 20,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../png/nursing-nurse-nb.png")}
              resizeMode="cover"
            >
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  fontSize: 24,
                  textAlign: "left",
                }}
              >
                Last Chance for your special offer
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 120,
            height: 170,
            backgroundColor: 'transparent',
            borderWidth:2,
            borderColor:'#FFC0CB',
            borderRadius: 20,
            alignContent: "center",
            justifyContent: "center",

            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 20,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "95%",
                justifyContent: "center",
                alignItems: "center",
                margin:1,
              }}
              source={require("../png/businessperson-man-nb.png")}
              resizeMode="cover"
            >
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  fontSize: 24,
                  textAlign: "left",
                }}
              >
                Last Chance
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          height: 200,
          borderRadius: 10,
          padding: 10,
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>Your Late Period</Text>
        <View>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 30,
              width: 300,
              height: 40,
              padding: 10,
            }}
            underlineColorAndroid="transparent"
            placeholder="Search articles videos and more"
          />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <View style={{width:100,justifyContent:'center',alignItems:'center'}}>
          <FontAwesome name="user" size={30}/>
         <Text>I am pregnant</Text>
        </View>
        <View style={{width:100,justifyContent:'center',alignItems:'center'}}>
        <FontAwesome name="user" size={30}/>
         <Text>Master cramps</Text>
        </View>
        <View style={{width:100,justifyContent:'center',alignItems:'center'}}>
        <FontAwesome name="user" size={30}/>
         <Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DADBDD",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  calendar: {
    width: "100%",
  },
});

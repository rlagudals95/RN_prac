
import React, { useEffect, useState } from 'react';
import Loading from './Loading'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import axios from 'axios'
import Weather from './Weather';

const API_KEY = "91baf0b0bcae84ab28d15c0d735325db"

export default class extends React.Component {

  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(weather)
    console.log(temp)
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }

  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     //container의 flex direction은 기본적으로 column
//     //flexDirection: 'row', // row로 변경하능
//     flex: 1, // 화면 전체를 차지 1
//     //backgroundColor: 'red',
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
//   text: {
//     color: 'black',
//     // 폰트사이즈는 숫자로 가능한 것 같다
//     fontSize: 20,
//     textAlign: 'center'

//   },
//   yallowView: {
//     flex: 1, // 부모 바로 아래 요소가 1이면 화면전체
//     backgroundColor: 'yellow'
//   },
//   blueView: {
//     flex: 1, // 부모 바로 아래 요소중 1인것이 2개 이므로 반반차지
//     backgroundColor: 'blue',

//   },

// });


import React, { useEffect, useState } from 'react';
import Loading from './Loading'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import axios from 'axios'


export default function App() {
  // // getweather API 키
  const API_KEY = "91baf0b0bcae84ab28d15c0d735325db"
  const [loading, setLoading] = useState(true)

  const getWeather = async (latitude, longitude) => {
    // const { data } = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
    // `)
    console.log('data')
  }

  getLocation = async () => {
    try {
      // 사용자 위치 정보 가져오기 허가 요청
      // {}(블록)안에 error 가 생기면 catch로 넘어간다
      await Location.requestPermissionsAsync()

      // 사용자 위치 정보 가져오기
      // 경도 위도 정보를 날씨 api에 전달해서 날씨를 받아온다
      const { coords: { latitude, longitude } } = await
        Location.getCurrentPositionAsync();
      console.log(coords)
      getWeather(latitude, longitude)
      // 위도, 경도 등 위치정보를 가져온다
      //console.log(coords)
      setLoading(false)
    } catch (error) {

      Alert.alert('위치 정보를 가져올 수 없습니다😅', error)
    }

  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <>
      {loading ? <Loading /> : null}
    </>


  );
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

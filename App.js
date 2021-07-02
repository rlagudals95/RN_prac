import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('ghh')
  return (
    // RN은 이렇게 정해진 규칙으로 컴포넌트를 구성해야한다
    <View style={styles.container}>
      <View style={styles.yallowView} >
        <Text>hello</Text>
      </View>
      <View style={styles.blueView}>
        <Text>hello</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //container의 flex direction은 기본적으로 column
    //flexDirection: 'row', // row로 변경하능
    flex: 1, // 화면 전체를 차지 1
    //backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    color: 'black',
    // 폰트사이즈는 숫자로 가능한 것 같다
    fontSize: 20,
    textAlign: 'center'

  },
  yallowView: {
    flex: 1, // 부모 바로 아래 요소가 1이면 화면전체
    backgroundColor: 'yellow'
  },
  blueView: {
    flex: 1, // 부모 바로 아래 요소중 1인것이 2개 이므로 반반차지
    backgroundColor: 'blue',

  },

});

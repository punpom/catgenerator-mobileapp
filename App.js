import React, {useState} from 'react';
import { StyleSheet, View, Button, Image, LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  const [data, setData] = useState('https://thumbs.dreamstime.com/b/funny-cat-speech-bubble-word-hello-funny-cat-speech-bubble-word-hello-white-background-125191988.jpg');
  function generateANewCat() {
      fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((json) => setData(json[0]['url']))
  }
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 400,
          height: 400,
        }}
        source={{
          uri: data,
        }}
      />
      <Button
      onPress={generateANewCat}
      title="Generate a cat"
      color="#841584"
      accessibilityLabel="Generate a new cat"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

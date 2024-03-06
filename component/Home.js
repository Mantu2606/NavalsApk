import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri:'https://profile.ilakshyaerp.in/profile/5005/1c5dcaa4-19da-420c-8d73-d2fdaa3ef109'}}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Home;

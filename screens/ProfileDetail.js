import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ProfileDetail = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>SettingsDetail</Text>
      <Button title='Go to Profile' onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileDetail;
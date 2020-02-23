import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Profile</Text>
      <Button title='Go to Profile Edit' onPress={() => navigation.navigate('ProfileDetail')} />
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

export default Profile;
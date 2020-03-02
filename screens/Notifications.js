import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Row, Subtitle, Caption, View, Image } from '@shoutem/ui';

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('NotificationDetail', { title: 'Notification 1' })}
        >
          <Row>
            <Image
              styleName="small rounded-corners"
              source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-6.png' }}
            />
            <View styleName="vertical stretch space-between">
              <Subtitle>Notification 1</Subtitle>
              <Caption>20 hours ago</Caption>
            </View>
          </Row>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export const screenOptions = ({ navigation }) => {
  return {
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/images/menu.png')}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
      );
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
  },
});

export default Notifications;
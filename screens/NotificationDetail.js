import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Subtitle, Caption, Image, Card } from '@shoutem/ui';

const NotificationDetail = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Card style={styles.notificationCard}>
          <View style={{ minHeight: 300, justifyContent: 'center', alignSelf: 'center' }}>
            <Image
              styleName="featured"
              source={require('../assets/images/notification-image-lg.png')}
            />
          </View>
          <View styleName="content">
            <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
            <Caption>21 hours ago</Caption>
          </View>
        </Card>
      </View>
    </View>
  );
};

export const screenOptions = ({ route }) => {
  const { title } = route.params;
  return {
    title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  notificationCard: {
    width: '100%',
    paddingHorizontal: 10
  },
});

export default NotificationDetail;
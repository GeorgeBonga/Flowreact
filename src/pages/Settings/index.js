import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../png/businessperson-woman.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Card Title</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <View style={styles.iconContainer}>
          <Icon name="heart-outline" size={24} color="gray" />
          <Icon name="share-outline" size={24} color="gray" />
          <Icon name="bookmark-outline" size={24} color="gray" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Settings;

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HorizontalView = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.horizontalView}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const SecretChat = () => {
  return (
    <View style={styles.container}>
      <HorizontalView
        icon={require('../png/nursing-nurse.png')}
        title="View 1"
        subtitle="This is the first view"
      />
      <HorizontalView
        icon={require('../png/nursing-nurse.png')}
        title="View 2"
        subtitle="This is the second view"
      />
      <HorizontalView
        icon={require('../png/nursing-nurse.png')}
        title="View 3"
        subtitle="This is the third view"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
    height: 80,
    paddingHorizontal: 16,
  },
  iconContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default SecretChat;

// AdminDashboardScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AdminDashboardScreen = ({ navigation }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => navigation.navigate('Details'),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMoreOptions}>
          <Text style={styles.moreOptionsText}>{showMoreOptions ? '☰' : '☰'}</Text>
        </TouchableOpacity>
      </View>

      {showMoreOptions ? (
        <View style={styles.moreOptionsContainer}>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={styles.optionText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={styles.optionText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={styles.optionText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={handleLogout}>
            <Text style={styles.optionText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.dashboardContainer}>
          <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('AddNotice')}>
            <Text style={styles.optionText}>Add Notice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('AddEvent')}>
            <Text style={styles.optionText}>Add Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={styles.optionText}>Modify Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={styles.optionText}>View Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={styles.optionText}>View Notices</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcb103',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  moreOptionsText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  moreOptionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    width: '80%',
    height: 60,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AdminDashboardScreen;


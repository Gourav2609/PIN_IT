// NoticeDetailScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoticeDetailScreen = ({ route }) => {
  const { notice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notice.noticeName}</Text>
      <Text style={styles.label}>Notice ID:</Text>
      <Text style={styles.text}>{notice.noticeID}</Text>
      <Text style={styles.label}>Authorized By:</Text>
      <Text style={styles.text}>{notice.authorizedBy}</Text>
      <Text style={styles.label}>Concerned Faculty:</Text>
      <Text style={styles.text}>{notice.concernedFaculty}</Text>
      <Text style={styles.label}>Notice Date:</Text>
      <Text style={styles.text}>{notice.noticeDate}</Text>
      <Text style={styles.label}>Issued For:</Text>
      <Text style={styles.text}>{notice.issuedFor}</Text>
      <Text style={styles.label}>Viewed By:</Text>
      <Text style={styles.text}>{notice.viewedBy}</Text>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.text}>{notice.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#f2f',
  },
});

export default NoticeDetailScreen;

import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NoticeContext } from '../Backend/NoticeContext';

const ViewNoticeScreen = () => {
  const { notices } = useContext(NoticeContext);

  return (
    <View style={styles.container}>
      {/* Display the notices */}
      {notices.map((notice, index) => (
        <View key={index} style={styles.noticeCard}>
          <Text style={styles.noticeName}>{notice.name}</Text>
          <Text style={styles.noticeDate}>{notice.date}</Text>
          <Text style={styles.noticeIssuedBy}>{notice.issuedBy}</Text>
          {/* Add more details to display */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  noticeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  noticeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noticeDate: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  noticeIssuedBy: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  // Add more styles as needed
});

export default ViewNoticeScreen;

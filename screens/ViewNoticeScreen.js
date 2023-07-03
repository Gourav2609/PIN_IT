import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Backend/FirebaseConfig';

function ViewNoticeScreen() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch notices from Firestore
    const fetchNotices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'notices'));
        const noticesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNotices(noticesData);
      } catch (error) {
        console.error('Error fetching notices from Firestore:', error);
        // Handle the error as per your application's requirements
      }
    };

    fetchNotices();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noticeContainer}>
            <Text style={styles.noticeTitle}>{item.noticeName}</Text>
            <Text style={styles.noticeID}>Notice ID: {item.noticeID}</Text>
            {/* Render other notice details as needed */}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// Styles...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  noticeContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noticeID: {
    fontSize: 16,
    color: '#888',
  },
});

export default ViewNoticeScreen;

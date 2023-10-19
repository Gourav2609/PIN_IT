import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../Backend/FirebaseConfig';

const ViewNoticeScreen = ({ navigation }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch notices from Firestore
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, 'notices'), orderBy('noticeDate', 'desc'));
        const querySnapshot = await getDocs(q);
        const noticesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNotices(noticesData);
      } catch (error) {
        console.error('Error fetching notices from Firestore:', error);
        // Handle the error as per your application's requirements
      }
    };
    
    fetchNotices();

    const interval = setInterval(() => {
      fetchNotices();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleNoticePress = (notice) => {
    navigation.navigate('NoticeDetail', { notice });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNoticePress(item)}>
            <View style={styles.noticeContainer}>
              <Text style={styles.noticeTitle}>{item.noticeName}</Text>
              <Text style={styles.noticeID}>Notice ID: {item.noticeID}</Text>
              <Text style={styles.noticeID}>Authorized By: {item.authorizedBy}</Text>
              <Text style={styles.noticeID}>Concerned Faculty: {item.concernedFaculty}</Text>
              <Text style={styles.noticeID}>Notice Date: {item.noticeDate}</Text>
              <Text style={styles.noticeID}>Issued For: {item.issuedFor}</Text>
              {item.fileDownloadURL && (
                <TouchableOpacity onPress={() => Linking.openURL(item.fileDownloadURL)}>
                  <Text style={styles.fileLink}>Download File</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

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
    backgroundColor: '#635BFF',
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  noticeID: {
    fontSize: 16,
    color: '#d9d9d9',
  },
  fileLink: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default ViewNoticeScreen;

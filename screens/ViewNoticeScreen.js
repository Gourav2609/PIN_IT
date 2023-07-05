// ViewNoticeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Backend/FirebaseConfig';
import { withNavigation } from 'react-navigation';
// import { useNavigation } from '@react-navigation/native';
const ViewNoticeScreen = ({ navigation }) => {
  const [notices, setNotices] = useState([]);
  // const navigation = useNavigation();
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

  const handleNoticePress = (notice) => {
    navigation.navigate('NoticeDetail', { notice :item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('NoticeDetail', { notice : item})}>
            <View style={styles.noticeContainer}>
              <Text style={styles.noticeTitle}>{item.noticeName}</Text>
              <Text style={styles.noticeID}>Notice ID: {item.noticeID}</Text>
              <Text style={styles.noticeID}>Authorized By: {item.authorizedBy}</Text>
              {/* <Text style={styles.text}>{item.authorizedBy}</Text> */}
              <Text style={styles.noticeID}>Concerned Faculty: {item.concernedFaculty}</Text>
              {/* <Text style={styles.text}>{item.concernedFaculty}</Text> */}
             <Text style={styles.noticeID}>Notice Date: {item.noticeDate}</Text>
             {/* <Text style={styles.text}>{item.noticeDate}</Text> */}
             <Text style={styles.noticeID}>Issued For: {item.issuedFor}</Text>
             {/* <Text style={styles.text}>{item.issuedFor}</Text> */}
              {/* Render other notice details as needed */}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

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
    backgroundColor: '#fcb103',
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  noticeID: {
    fontSize: 16,
    color:'#656463',
  },
});

// Wrap the component with withNavigation
export default ViewNoticeScreen;

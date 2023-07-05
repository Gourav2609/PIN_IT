// ContactUs.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const ContactUs = () => {
  const initialContacts = [
    { name: 'Gourav', email: 'herculeswarrior.in@gmail.com', phone: '+91 7386872609' },
    { name: 'Kaushal', email: 'kaushak@example.com', phone: '+91 8948651845' },
    // Add more contacts as needed
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = () => {
    // Filter contacts based on the searchQuery
    const filteredContacts = initialContacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />

      {selectedContact && <Text style={styles.selectedContactName}>{selectedContact.name}</Text>}

      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fcb103',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  selectedContactName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ContactUs;

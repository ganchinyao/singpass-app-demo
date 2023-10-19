import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ReturnKeyTypeOptions, Text, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { Colors } from '../../constants';

type SearchBarProps = {
  onSearch: (searchQuery: string) => void;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
};

export const SearchBar = ({ onSearch, placeholder, returnKeyType = 'search' }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={Colors.grey['700']} style={styles.icon} />
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={placeholder}
        style={styles.input}
        returnKeyType={returnKeyType}
        onSubmitEditing={() => {
          onSearch(searchQuery);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          onSearch(searchQuery);
        }}
      >
        <Text style={styles.goButton}>Go</Text>
      </TouchableOpacity>
    </View>
  );
};

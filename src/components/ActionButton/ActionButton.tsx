import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

type ActionButtonProps = {
  title: string;
  gradientColor: string[];
  icon?: ReactNode;
  onPress: () => void;
};

export const ActionButton = ({ title, gradientColor, icon, onPress }: ActionButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <LinearGradient colors={gradientColor} style={styles.button}>
          {icon}
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

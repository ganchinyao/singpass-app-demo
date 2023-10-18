import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export type ActionBarProps = {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};
export const ActionBar = ({ leftIcon, rightIcon, title, onLeftIconPress, onRightIconPress }: ActionBarProps) => {
  return (
    <View style={styles.actionBar}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftIconPress}>{leftIcon}</TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Maintain spacing when there's no left icon
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity onPress={onRightIconPress}>{rightIcon}</TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Mmaintain spacing when there's no right icon
      )}
    </View>
  );
};

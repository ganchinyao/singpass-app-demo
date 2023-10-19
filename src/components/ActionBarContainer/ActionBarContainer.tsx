import React, { PropsWithChildren, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ActionBarContainerProps = {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};
export const ActionBarContainer = ({
  leftIcon,
  rightIcon,
  title,
  onLeftIconPress,
  onRightIconPress,
  children,
}: PropsWithChildren<ActionBarContainerProps>) => {
  const navigation = useNavigation();
  const renderActionBar = () => {
    return (
      <View style={styles.actionBar}>
        {leftIcon ? (
          <TouchableOpacity onPress={onLeftIconPress}>{leftIcon}</TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.black} />
          </TouchableOpacity>
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
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeAreaViewTop} />
      {renderActionBar()}
      {children}
    </View>
  );
};

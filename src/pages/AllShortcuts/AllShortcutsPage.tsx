import React from 'react';
import { ActionBarContainer } from '../../components/ActionBarContainer';
import { Text, View } from 'react-native';
import { styles } from './style';
import { ShortcutsGrid } from '../../feature/home/Shortcuts/ShortcutsGrid';

const AllShortcutsPage = () => {
  const renderHeader = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.allShortcutsTitle}>All Shortcuts</Text>
        <Text style={styles.allShortcutsDesc}>{`Login to different government services in one place.`}</Text>
      </View>
    );
  };

  const renderAllShortcutsGrid = () => {
    return (
      <View style={styles.allShortcutsGridContainer}>
        <ShortcutsGrid header={renderHeader()} />
      </View>
    );
  };

  return <ActionBarContainer>{renderAllShortcutsGrid()}</ActionBarContainer>;
};

export default AllShortcutsPage;

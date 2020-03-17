import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles/styles';

class Feed extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigation Drawer</Text>
          <Button
            title='Go to feed item'
            onPress={() => this.props.navigation.navigate('Detail', {screenName: "My Detail Screen"})}
          />
      </View>
    )
  }
}

export default Feed;
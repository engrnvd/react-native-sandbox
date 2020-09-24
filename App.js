/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


const App: () => React$Node = () => {
    return (
        <View style={styles.scrollView}>
            <Text style={{fontSize: 16}}>Hello there 16</Text>
            <Text style={{fontSize: 14}}>Hello there 14</Text>
            <Text>Hello there - default</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efe',
    }
});

export default App;

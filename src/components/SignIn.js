import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
});

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SignIn</Text>
            </View>
        );
    }
}

export default SignIn;

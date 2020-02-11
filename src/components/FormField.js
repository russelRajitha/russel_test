import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    container_half: {
        width: '50%',
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex:1,
        paddingVertical:10,
        paddingHorizontal:10
    },
    input: {
        borderColor:'#858585',
        borderWidth:2,
        borderRadius:5,
        height: 40
    },
});

class FormField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChangeText(text) {
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_half}>
                    <Text>{this.props.label}</Text>
                </View>
                <View style={styles.container_half}>
                    <TextInput
                        style={[styles.input]}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChangeText={(text) => this.onChangeText(text)}/>
                </View>

            </View>
        );
    }
}

export default FormField;

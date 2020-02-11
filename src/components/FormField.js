import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    container_half: {
        width: '50%',
    },
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        flex:1,
        paddingVertical:10,
        paddingHorizontal:10
    },
    fieldContainer:{
        flexDirection: 'row',
    },
    input: {
        borderColor:'#858585',
        borderWidth:2,
        borderRadius:5,
        height: 40
    },
    label:{
        fontSize:20
    },
    error:{
        fontSize: 12,
        color:'#ff0c27'
    }
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

    renderErrors() {
        let errors = [];
        if(this.props.errors){
            for (let i in this.props.errors){
                errors.push(<Text style={styles.error} key={i}>{this.props.errors[i]}</Text>)
            }
        }
        return errors;
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fieldContainer}>
                    <View style={styles.container_half}>
                        <Text style={styles.label}>{this.props.label}</Text>
                    </View>
                    <View style={styles.container_half}>
                        <TextInput
                            secureTextEntry={this.props.secureTextEntry}
                            style={[styles.input]}
                            placeholder={this.props.placeholder}
                            value={this.props.value}
                            onChangeText={(text) => this.onChangeText(text)}/>
                    </View>
                </View>
                {this.renderErrors()}
            </View>
        );
    }
}

export default FormField;

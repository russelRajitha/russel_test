import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import FormField from './FormField';
import Button from './Button';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    formContainer:{
        flexDirection: 'row'
    }
});

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    onChangeText(text) {
        this.setState({
            text: text,
        });
    }

    onPress() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <FormField
                        label={'Field Label'}
                        placeholder={'Place Holder'}
                        onChangeText={(text) => this.onChangeText(text)}
                        value={this.state.text}
                    />
                </View>
                <View style={[styles.formContainer,{justifyContent:'flex-end'}]}>
                    <Button
                        title={"Submit"}
                        onPress={() => this.onPress()}
                    />

                </View>
            </View>
        );
    }
}

export default SignIn;

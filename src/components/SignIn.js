import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import FormField from './FormField';
import Button from './Button';
import validate from 'validate.js';


const validations = {
    userEmail:{
        email:true,
        presence: true,
    },
    userPassword:{
        presence: true,
    }
}

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
            formData: {
                userEmail:'',
                userPassword:null
            },
            errors:{
                userEmail:[],
                userPassword:[]
            }
        };
    }

    onChangeText(text,key) {
        let {formData} = this.state;

        formData[key] = text;

        this.setState({
            formData: formData,
        });
    }

    onPress() {
        let {formData} = this.state;

        let errors = validate(formData, validations);
        if(errors === undefined){
            this.setState({
                errors:{
                    userEmail: [],
                    userPassword: [],
                }
            })
        }
        else {
            console.log(errors)
            this.setState({
                errors:errors
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <FormField
                        label={'Email'}
                        placeholder={'Email'}
                        onChangeText={(text) => this.onChangeText(text,'userEmail')}
                        value={this.state.formData.userEmail}
                        errors={this.state.errors.userEmail}
                    />
                </View>
                <View style={styles.formContainer}>
                    <FormField
                        secureTextEntry={true}
                        label={'Password'}
                        placeholder={'Password'}
                        onChangeText={(text) => this.onChangeText(text,'userPassword')}
                        value={this.state.formData.userPassword}
                        errors={this.state.errors.userPassword}
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

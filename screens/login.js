import { Updates } from 'expo';
import React from 'react';
import { Button, Text, TextInput, View, Image } from 'react-native';

import Face from '../assets/face.svg';
import Lock from '../assets/lock.svg';
import Logo from '../assets/logo.png'
export default () => {
    const [loginValue, onChangeLogin] = React.useState("");
    const [passwordValue, onChangePassword] = React.useState("");

    return (
        <View
            style={{
                position: "relative",
                backgroundColor: "#F9FBFC",
                width: "100%",
                height: "100%",
            }}
        >
            <View style={{
                width: "80%",
                maxWidth: "800px",
                height: "90%",
                maxHeight: "900px",
                margin: "auto",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
            }} >
                <Image source={Logo}
                    style={{
                        marginTop: "10%",
                        height: 75,
                        resizeMode: "contain"
                    }}
                />
                <View style={{
                    marginTop: "10%",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}>
                <View
                    style={{
                        backgroundColor: "white",
                        display: "inline-flex",
                        flexDirection: "row",
                        boxSizing: "border-box",
                        borderStyle: "solid",
                        borderColor: "#9E9E9E",
                        borderWidth: 1,
                        height: "40px",
                        width: "40%",
                        maxWidth: "300px",
                        minWidth: "245px"
                    }}
                >
                    <Image source={Face}
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            height: 20,
                            width: 20,
                            marginRight:"5px",
                        }}
                    />
                    <TextInput id="loginInput"
                        placeholder="Nome de usuário"
                        onChangeText={login => onChangeLogin(login)}
                        value={loginValue}
                    >
                    </TextInput>
                </View>
                <View
                    style={{
                        backgroundColor: "white",
                        display: "flexbox",
                        flexDirection: "row",
                        marginBottom: 10,
                        borderStyle: "solid",
                        borderColor: "#9E9E9E",
                        borderWidth: 1,
                        height: "40px",
                        width: "40%",
                        maxWidth: "300px",
                        minWidth: "245px"
                    }}
                >
                    <Image source={Lock}
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginRight:"5px",
                            height: 20,
                            width: 20,
                        }}
                    />
                    <TextInput id="passwordInput"
                        underlineColorAndroid='transparent'
                        value={passwordValue}
                        onChangeText={password => onChangePassword(password)}
                        placeholder="Senha"
                        secureTextEntry={true}
                    >
                    </TextInput>
                </View>
                <View style={{
                    borderRadius: 4,
                    marginBottom: 15,

                    height: "40px",
                    width: "40%",
                    maxWidth: "300px",
                    minWidth: "245px"
                }}>
                    <Button
                        title="Entrar"
                        color="#7a3361"
                        onPress={() => Updates.reload()}
                    />
                </View>
                <View style={{
                    height: "40px",
                    width: "40%",
                    maxWidth: "300px",
                    minWidth: "245px",
                    borderRadius: 10,
                    marginBottom: 15
                }}>
                    <Button
                        title="Entrar com o facebook"
                        disabled={true}
                        onPress={() => Updates.reload()}
                    />
                </View>
                <Text
                    onPress={() => Updates.reload()}
                >
                    Esqueceu sua senha?
        </Text>
                <View style={{
                    height: "40px",
                    width: "40%",
                    maxWidth: "300px",
                    minWidth: "245px",
                    borderRadius: 10,
                    marginBottom: 15
                }}>
                    <Button
                        title="Ainda não é cadastrado?"
                        color="#7a3361"
                        onPress={() => Updates.reload()}
                    />
                </View>
                </View>
                <View style={{
                    marginTop:"auto",
                    height:"10px",
                    backgroundColor:"#7A3361" 
                }}>
                    
                </View>
            </View>
            
        </View >
    )
}

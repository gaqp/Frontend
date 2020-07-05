import React from 'react';
import { TouchableOpacity, Text, TextInput, View, ScrollView, Image } from 'react-native';

let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg'
import User from '../assets/face.svg'

export default (props) => {
    let username = props.user.username;
    let menu = ["Configurações", "Segurança", "Notificações", "Locais Favoritos", "Reclamações"];
    return (
        <View style={{
            backgroundColor: "#F9FBFC",
            height: "100%"
        }}>
            <TouchableOpacity
                onPress={props.close}
            >
                <View style={{
                    marginTop: "20px",
                    display: "inline-flex",
                    flexDirection: "row",
                }}>
                    <Image source={Arrow} style={{
                        width: 30,
                        height: 30,
                        transform: [{ scaleX: -1 }]
                    }} />
                    <Text style={{
                        color: roxo,
                        fontWeight: 'bold',
                        marginVertical: 'auto'
                    }}
                    > Voltar </Text>
                </View>
            </TouchableOpacity>



            <View style={{
                alignSelf: "center",
                alignItems: "center",
                width: "70%"
            }}>
                <TouchableOpacity
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "#B8C2CD",
                        height: "125px",
                        width: "125px",
                    }}
                >
                    <Image source={User} style={{
                        width: "80%",
                        height: "80%",
                        margin: "auto"
                    }} />
                </TouchableOpacity>

                <Text
                    style={{
                        marginTop: "10px",
                        color: roxo,
                        fontWeight: 'bold',
                        marginVertical: 'auto'
                    }}
                    selectable={false}
                >
                    @{username}
                </Text>

                <View style={{
                    marginTop: "35px",
                    width: "100%",

                }}>
                    {menu.map((item) => {
                        return (
                            <TouchableOpacity style={{
                                backgroundColor: roxo,
                                height: "30px",
                                borderRadius: "4px",
                                alignContent: "center",
                                marginBottom: "10px"

                            }}
                                key={item}
                            >
                                <Text style={{
                                    color: "#FFFFFF",
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    textAlign: "center",
                                    marginVertical: "auto"
                                }}> {item} </Text>
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>

            </View>
        </View>

    )

}
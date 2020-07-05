import React from 'react';
import { TouchableOpacity, Text, Switch, View, ScrollView, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'


let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg'
import Comida from '../assets/comida.svg'
import Trocar from '../assets/trocar.svg'
import Dinheiro from '../assets/bufunfa.svg'
import { Button } from 'native-base';

export default (props) => {

    console.log(props);
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


            <View>
                <Text style={{
                    marginLeft: "10px",
                    marginBottom: "20px",
                    marginTop: "20px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "#606062"
                }}>
                    Conta
                </Text>
                <View style={{
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor:"#B8C2CD",
                    padding:"10px",

                }} >
                    <TouchableOpacity style={{
                        backgroundColor: roxo,
                        width: "150px",
                        height: '40px',
                        borderRadius: '10px',
                    }}>
                        <Text style={{
                            color: "white",
                            fontSize: "1rem",
                            marginVertical: "auto",
                            marginHorizontal: "auto"
                        }}>
                            Valor individual
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: roxo,
                        width: "150px",
                        height: '40px',
                        borderRadius: '10px',
                    }}>
                        <Text style={{
                            color: "white",
                            fontSize: "1rem",
                            marginVertical: "auto",
                            marginHorizontal: "auto"
                        }}>
                            Valor Da mesa
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{
                height: "70px",
                width: "70px",
                backgroundColor: roxo,
                borderRadius: "50%",
                marginTop: "auto",
                marginLeft: "auto",
                marginBottom: "20px",
                marginRight: "20px"
            }}>
                <Image source={Dinheiro} style={{
                    width: "50px",
                    height: "50px",
                    marginHorizontal: "auto",
                    marginVertical: "auto"
                }} />
            </TouchableOpacity>
        </View>

    )
}
import React from 'react';
import { TouchableOpacity, Text, Switch, View, ScrollView, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg'
import User from '../assets/face.svg'

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
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "#606062"
                }}>
                    Cardápio
                </Text>
                <View>
                    <Text style={{
                        marginLeft: "20px",
                        marginBottom: "10px",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        color: "#606062"
                    }}>
                        Comidas
                    </Text>

                    {props.cardapio.comida.map(item => {
                        return (
                            <View key={item.nome}>
                                <View style={{
                                    display: "inline-flex",
                                    flexDirection: "row",
                                    justifyContent: 'space-between'
                                }}>

                                    <Text style={{
                                        marginLeft: "20px",
                                        marginBottom: "10px",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                        color: "#A1A1A1"
                                    }}>{item.nome}</Text>
                                    <Text style={{
                                        marginLeft: "20px",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                        color: "#A1A1A1"
                                    }}>
                                        R${item.preco}
                                    </Text>
                                </View>
                                <Text style={{
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    fontWeight: "bold",
                                    fontSize: "0.7rem",
                                    color: "#A1A1A1"
                                }}>
                                    {item.descricao}
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <View>
                    <Text style={{
                        marginLeft: "20px",
                        marginBottom: "10px",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        color: "#606062"
                    }}>
                        Bebidas
                    </Text>
                    {props.cardapio.bebida.map(item => {
                        return (
                            <View key={item.nome}>
                                <View style={{
                                    display: "inline-flex",
                                    flexDirection: "row",
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{
                                        marginLeft: "20px",
                                        marginBottom: "10px",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                        color: "#A1A1A1"
                                    }}>{item.nome}
                                    </Text>
                                    <Text style={{
                                        marginLeft: "20px",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                        color: "#A1A1A1"
                                    }}>
                                        R${item.preco}
                                    </Text>
                                </View>
                                <Text style={{
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    fontWeight: "bold",
                                    fontSize: "0.7rem",
                                    color: "#A1A1A1"
                                }}>
                                    {item.descricao}
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <View>
                    <Text style={{
                        marginLeft: "20px",
                        marginBottom: "10px",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        color: "#606062"
                    }}>
                        Descontos do dia
                    </Text>
                    {props.cardapio.comida.map(item => {
                        if (item.promocao) {
                            return (
                                <View key={item.nome}>
                                    <View style={{
                                        display: "inline-flex",
                                        flexDirection: "row",
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={{
                                            marginLeft: "20px",
                                            marginBottom: "10px",
                                            fontWeight: "bold",
                                            fontSize: "0.8rem",
                                            color: "#A1A1A1"
                                        }}>{item.nome}
                                        </Text>
                                        <Text style={{
                                            marginLeft: "20px",
                                            marginRight: "10px",
                                            marginBottom: "10px",
                                            fontWeight: "bold",
                                            fontSize: "0.8rem",
                                            color: "#A1A1A1"
                                        }}>
                                            R${item.preco}
                                        </Text>
                                    </View>
                                    <Text style={{
                                        marginLeft: "20px",
                                        marginBottom: "10px",
                                        fontWeight: "bold",
                                        fontSize: "0.7rem",
                                        color: "#A1A1A1"
                                    }}>
                                        {item.descricao}
                                    </Text>
                                </View>)
                        }

                    })}

                    {props.cardapio.bebida.map(item => {
                        if (item.promocao) {
                            return (
                                <View key={item.nome}>
                                    <View style={{
                                        display: "inline-flex",
                                        flexDirection: "row",
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={{
                                            marginLeft: "20px",
                                            marginBottom: "10px",
                                            fontWeight: "bold",
                                            fontSize: "0.8rem",
                                            color: "#A1A1A1"
                                        }}>{item.nome}
                                        </Text>
                                        <Text style={{
                                            marginLeft: "20px",
                                            marginRight: "10px",
                                            marginBottom: "10px",
                                            fontWeight: "bold",
                                            fontSize: "0.8rem",
                                            color: "#A1A1A1"
                                        }}>
                                            R${item.preco}
                                        </Text>
                                    </View>
                                    <Text style={{
                                        marginLeft: "20px",
                                        marginBottom: "10px",
                                        fontWeight: "bold",
                                        fontSize: "0.7rem",
                                        color: "#A1A1A1"
                                    }}>
                                        {item.descricao}
                                    </Text>
                                </View>)
                        }

                    })}

                </View>
            </View>

        </View>

    )

}
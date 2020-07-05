import React from 'react';
import { TouchableOpacity, Text, Switch, View, ScrollView, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'


let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg'
import Comida from '../assets/comida.svg'
import Trocar from '../assets/trocar.svg'

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
                    Troca de pontos
                </Text>
                <View>
                    <Text style={{
                        marginLeft: "20px",
                        marginBottom: "10px",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        color: "#606062"
                    }}>
                        Opa!, Que tal?
                    </Text>
                    {props.cardapio.comida.map(item => {
                        const [checked, setChecked] = React.useState(false);
                        return (
                            <View key={item.nome}>
                                <View style={{
                                    display: "inline-flex",
                                    flexDirection: "row",
                                    justifyContent: 'space-between'
                                }}>
                                    <CheckBox containerStyle={{
                                        margin: 0,
                                        padding: 0
                                    }}
                                        checked={checked}
                                        onPress={
                                            () => {
                                                setChecked(!checked);
                                            }
                                        }
                                    />
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
                                        {item.preco} Pontos
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
                    {props.cardapio.bebida.map(item => {
                        const [checked, setChecked] = React.useState(false);
                        return (
                            <View key={item.nome}>
                                <View style={{
                                    display: "inline-flex",
                                    flexDirection: "row",
                                    justifyContent: 'space-between'
                                }}>
                                    <CheckBox containerStyle={{
                                        margin: 0,
                                        padding: 0
                                    }}
                                        checked={checked}

                                        onPress={
                                            () => {
                                                setChecked(!checked);
                                            }
                                        }
                                    />
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
                                        {item.preco} Pontos
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
                    {props.cardapio.pontos.map(item => {
                        const [checked, setChecked] = React.useState(false);
                        return (
                            <View key={item.nome}>
                                <View style={{
                                    display: "inline-flex",
                                    flexDirection: "row",
                                    justifyContent: 'space-between'
                                }}>
                                    <CheckBox containerStyle={{
                                        margin: 0,
                                        padding: 0
                                    }}
                                    checked={checked}

                                        onPress={
                                            () => {
                                                setChecked(!checked);
                                            }
                                        }
                                    />
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
                                        {item.preco} Pontos
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
                <Image source={Trocar} style={{
                    width: "50px",
                    height: "50px",
                    marginHorizontal: "auto",
                    marginVertical: "auto"
                }} />
            </TouchableOpacity>
        </View>

    )

}
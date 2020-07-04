import { Updates } from 'expo';
import React from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';

let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg'
import qrcode from '../assets/qr.svg'
import search from '../assets/search.svg'

export default () => {
    const [username, setUsername] = React.useState("thadougab");
    const [cervejas, setCervejas] = React.useState(0);

    const [searchString, setSearchString] = React.useState("");


    function barConnect() {
        console.log("conectando ao Bar");
    }

    return (
        <React.Fragment>
            <View style={{
                display: 'inline-flex',
                flexDirection: "row",
                margin: "20px",
                justifyContent: "space-between"
            }}>
                <Text style={{
                    color: roxo,
                    fontWeight: 'bold',
                    marginVertical: 'auto'
                }}
                    selectable={false}
                    onPress={() => setCervejas(cervejas + 1)}
                >{cervejas} Cervejas</Text>
                <View style={{
                    display: 'inline-flex',
                    flexDirection: "row"
                }}>
                    <Text style={{
                        color: roxo,
                        fontWeight: 'bold',
                        marginVertical: 'auto'
                    }}
                        selectable={false}
                    >@{username}  </Text>
                    <Image source={Arrow} style={{
                        width: 30,
                        height: 30
                    }} />
                </View>
            </View>
            <View style={{
                marginHorizontal: "auto",
                alignItems: "center"
            }}
            >
                <TouchableOpacity
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "#FCBA03",
                        height: "100px",
                        width: "100px",
                    }}
                    onPress={barConnect}
                >
                    <Image source={qrcode} style={{
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
                    onPress={barConnect}
                >
                    Conecte-se ao Bar
            </Text>
            </View>

            <View style={{
                marginTop: "25px",
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: "75%"
            }}>
                <Image source={search}
                    style={{
                        position: "absolute",
                        left: "10px",
                        width: "25px",
                        height: '25px'
                    }}
                />
                <TextInput
                    style={{
                        flex: 1,
                        height: 40,
                        width: "75%",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "25px",
                        borderWidth: 1,
                        alignSelf: "center",
                        paddingLeft: "35px"
                    }
                    }
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        setSearchString(text);
                    }}

                    placeholder="Pesquise Aqui"
                    value={searchString}
                />
            </View>

            <View style={{
                marginTop: "25px",
                alignSelf: "center",
                width: "90%",
                height: "150px"
            }}>
                <Text style={{
                    fontStyle: "bold",
                    fontSize: "1rem",
                    color: "#606062"
                }}>
                    Bar mais próximo de você!
                </Text>
                <Text style={{
                    fontSize: "0.8rem",
                    marginTop: "5px",
                    color: "#A1A1A1"
                }}>
                    Nossa sugestão ❤
                </Text>
                <View
                    style={{
                        height: "100px",
                        backgroundColor: roxo,
                        borderRadius: "15px",
                        marginTop: "5px"
                    }}
                >
                </View>
                <View style={{
                    marginTop: "25px"
                }}>
                    <Text style={{
                        fontStyle: "bold",
                        fontSize: "1rem",
                        color: "#606062"
                    }}>
                        A grana está curta? Temos descontos!
                </Text>
                    <Text style={{
                        fontSize: "0.8rem",
                        marginTop: "5px",
                        color: "#A1A1A1"
                    }}>
                        Descontos TOP do dia!
                </Text>
                <View>

                </View>
                </View>
            </View>
        </React.Fragment>
    )
}

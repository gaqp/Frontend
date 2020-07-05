import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { Drawer } from 'native-base';

let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg';
import User from '../assets/face.svg'


export default (props) => {

    const [username, setUsername] = React.useState("thadougab");
    const [pontos, setPontos] = React.useState(0);

    const styles = StyleSheet.create({
        listType: {
            marginTop:"10px",
            marginHorizontal: "20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#606062"
        },
        item: {
            marginHorizontal: "20px",
            fontSize: "0.8rem",
            fontWeight: "bold",
            color: "#A1A1A1"
        },
        listStyle: {
            marginTop: "5px",
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }
    })

    let sidebar;
    let closeSidebar = () => {
        sidebar._root.close()
    };
    let openSidebar = () => {
        sidebar._root.open()
    };

    let cardapioSidebar;
    let closeCardapioSidebar = () => {
        cardapioSidebar._root.close()
    }
    let openCardapioSidebar = () => {
        cardapioSidebar._root.open();
    }
    let faturaSidebar;
    let closeFaturaSidebar = () => {
        faturaSidebar._root.close()
    }
    let openFaturaSidebar = () => {
        faturaSidebar._root.open()
    }
    let pontoSidebar;
    let closePontoSidebar = () => {
        pontoSidebar._root.close()
    }
    let openPontoSidebar = () => {
        pontoSidebar._root.open()
    }
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
                    <Image source={props.bar.logo} style={{
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
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
                    {props.bar.nome}
                </Text>
            </View>
            <View>
                <Text style={styles.listType}>
                    Cardápio
                </Text>
                {props.bar.cardapio.comida.map(item => {
                    return (
                        <View key={item.nome} style={styles.listStyle}>
                            <Text style={styles.item}>
                                {item.nome}
                            </Text>
                            <Text style={styles.item}>
                                R${item.preco}
                            </Text>
                        </View>
                    )
                })}
                {props.bar.cardapio.bebida.map(item => {
                    return (
                        <View key={item.nome} style={styles.listStyle}>
                            <Text style={styles.item}>
                                {item.nome}
                            </Text>
                            <Text style={styles.item}>
                                R${item.preco}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <View>
                <Text style={styles.listType}>
                    Troca de Pontos
                </Text>
                {props.bar.cardapio.comida.map(item => {
                    return (
                        <View key={item.nome} style={styles.listStyle}>
                            <Text style={styles.item}>
                                {item.nome}
                            </Text>
                            <Text style={styles.item}>
                                {item.preco} Pontos
                            </Text>
                        </View>
                    )
                })}
                {props.bar.cardapio.bebida.map(item => {
                    return (
                        <View key={item.nome} style={styles.listStyle}>
                            <Text style={styles.item}>
                                {item.nome}
                            </Text>
                            <Text style={styles.item}>
                                {item.preco} Pontos
                            </Text>
                        </View>
                    )
                })}
                {props.bar.cardapio.pontos.map(item => {
                    return (
                        <View key={item.nome} style={styles.listStyle} >
                            <Text style={styles.item}>
                                {item.nome}
                            </Text>
                            <Text style={styles.item}>
                                {item.preco} Pontos
                            </Text>
                        </View>
                    )
                })}
            </View>
            <View>
                <Text style={styles.listType}>
                    Eventos
                </Text>
                {props.bar.eventos.map(item => {
                    return (
                        <View key={item.nome} style={styles.listStyle}>
                            <Text style={styles.item}>
                                {item.nome}
                            </Text>
                            <Text style={styles.item}>
                                {item.data} {item.hora}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

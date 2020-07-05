import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { Drawer } from 'native-base';

let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg';
import Comida from '../assets/comida.svg';
import Bufunfa from '../assets/bufunfa.svg';
import SideBar from './sidebar.js';
import Cardapio from './cardapio.js';
import Ponto from './trocaPontos.js';

export default (props) => {
    const [user, setUser] = React.useState(props.route.params.user)
    console.log(user)
    let pontos = user.pontos;
    let username = user.username;
    const Bar = {
        nome: "Bar do Biu",
        logo: "https://image.freepik.com/vetores-gratis/logotipo-preto-octoberfest-vintage_225004-1232.jpg",
        cardapio: {
            comida: [
                {
                    nome: "Carne Moída",
                    descricao: "Ingredientes: Feito com cebola e cane de primeira, com azeite de oliva",
                    preco: 15.00,
                    promocao: false
                },
                {
                    nome: "Macaxeira frita",
                    descricao: "Ingradientes: Frito em óleo de girassol",
                    preco: 20,
                    promocao: false
                },
                {
                    nome: "Batata Frita",
                    descricao: "Ingradientes: Frito em óleo de girassol, com cheddar e bacon",
                    preco: 10,
                    promocao: true
                },
            ],
            bebida: [
                {
                    nome: "Água",
                    descricao: "Água mineral sem gás",
                    preco: 5.00,
                    promocao: true
                },
                {
                    nome: "Cerveja Litrão",
                    descricao: "Puro malte",
                    preco: 10.00,
                    promocao: false
                }
            ],

            pontos: [
                {
                    nome: "Sinuca",
                    descricao: "Uma sinuquinha com os amigos",
                    preco: 5.00,
                    promocao: true
                },
                {
                    nome: "Dominó",
                    descricao: "",
                    preco: 5.00,
                    promocao: true
                },
                {
                    nome: "Baralho",
                    descricao: "Vai um truco ai?",
                    preco: 5.00,
                    promocao: true
                },
            ]


        },
        eventos: {
            nome: "Dia do álcool",
            data: "18/02/2021",
            hora: "20:00"
        }
    }
    let Mesa = {
        numero: 10,
        pessoas: [username, "gathadou", "douthagab"]
    }

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
        <Drawer
            ref={(ref) => { sidebar = ref; }}
            content={<SideBar close={() => closeSidebar()} user={user} />}
            onClose={() => closeSidebar()}
            tapToClose={false}
            side="right"
        >
            <Drawer
                tapToClose={false}
                ref={(ref) => { cardapioSidebar = ref; }}
                content={<Cardapio cardapio={Bar.cardapio} close={() => closeCardapioSidebar()} />}
                onClose={() => closeCardapioSidebar()}
                side="right"
            >
                <Drawer
                    tapToClose={false}
                    ref={(ref) => { faturaSidebar = ref; }}
                    content={<SideBar close={() => closeFaturaSidebar()} user={user} />}
                    onClose={() => closeFaturaSidebar()}
                    side="right"
                >
                    <Drawer
                        tapToClose={false}
                        ref={(ref) => { pontoSidebar = ref; }}
                        content={<Ponto cardapio={Bar.cardapio} close={() => closePontoSidebar()} />}
                        onClose={() => closePontoSidebar()}
                        side="right"
                    >
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
                            >{pontos} Pontos</Text>
                            <View >
                                <TouchableOpacity
                                    onPress={() => openSidebar()}
                                    style={{
                                        display: "inline-flex",
                                        flexDirection: "row",

                                    }}
                                >
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
                                    }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View style={{
                            marginHorizontal: "auto",
                            alignItems: "center",
                            display: "inline-flex",
                            flexDirection: "row"
                        }}
                        >
                            <TouchableOpacity style={{
                                backgroundColor: roxo,
                                padding: "5px",
                                borderRadius: "50px",
                                position: "absolute",
                                right: "65%"
                            }}
                                onPress={openCardapioSidebar}
                            >
                                <Image source={Comida}
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        marginLeft: '10px',
                                        marginRight: '30px'
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    borderRadius: "50%",
                                    backgroundColor: "#B8C2CD",
                                    height: "100px",
                                    width: "100px",
                                }}
                                onPress={openPontoSidebar}

                            >
                                <Image source={Bar.logo} style={{
                                    width: "100%",
                                    height: "100%",
                                    margin: "auto",
                                    borderRadius: "50%"
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: roxo,
                                padding: "5px",
                                borderRadius: "50px",
                                position: "absolute",
                                left: "65%",
                                zIndex: -1
                            }}
                                onPress={openFaturaSidebar}

                            >
                                <Image source={Bufunfa}
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        marginRight: '10px',
                                        marginLeft: '30px'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                marginTop: "10px",
                                color: roxo,
                                fontWeight: 'bold',
                                alignSelf: "center"
                            }}
                            selectable={false}
                        >
                            {Bar.nome}
                        </Text>

                        <View style={{
                            marginTop: "25px",
                            alignSelf: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: "75%"
                        }}>
                        </View>
                        <View style={{
                            marginLeft: "10px"
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                color: "#606062"
                            }}>
                                Mesa {Mesa.numero}
                            </Text>
                            <View style={{
                                display: "inline-flex",
                                flexDirection: "row"
                            }}>
                                {Mesa.pessoas.map(pessoa => {
                                    return (
                                        <Text key={pessoa} style={{
                                            marginRight: "10px",
                                            fontWeight: "bold",
                                            fontSize: "0.8rem",
                                            color: "#A1A1A1"
                                        }}>
                                            @{pessoa}
                                        </Text>
                                    )
                                })}
                            </View>

                        </View>
                    </Drawer>
                </Drawer>
            </Drawer>
        </Drawer>
    )
}

import React from 'react';
import { TouchableOpacity, Text, TextInput, View, ScrollView, Image } from 'react-native';
import { Drawer, Container, Header, Content, Button } from 'native-base';
import BarInfo from './barInfo.js'
import API from '../services/api.js'

let roxo = "#7A3361";

import Arrow from '../assets/arrow.svg'
import qrcode from '../assets/qr.svg'
import search from '../assets/search.svg'

import SideBar from './sidebar.js'
import barInfo from './barInfo';

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
    eventos: [{
        nome: "Dia do álcool",
        data: "18/02/2021",
        hora: "20:00"
    }]
}


export default (props) => {
    const id  = props.route.params.id;
    const [user, setUser] = React.useState("");
    const [mainBar,setMainBar] = React.useState({nome:"",landscape:""})
    async function getUser() {
        await API.get(`/users/${id}`).then(response => {
            setUser(response.data);
        })

    }

    
    async function getBar(){
        await API.get('/bar').then(
            response =>{
                setMainBar(response.data[0]);
            }
        )
    }
    const [searchString, setSearchString] = React.useState("");
    let drawer;
    let closeDrawer = () => {
        drawer._root.close()
    };
    let openDrawer = () => {
        drawer._root.open()
    };
    let barInfo;
    let closeBarInfo = () => {
        barInfo._root.close()
    }
    let openBarInfo = () => {
        barInfo._root.open()
    }
    React.useEffect(() => {
        getUser();
        getBar();
    },[]);
    return (
        <Drawer
            ref={(ref) => { drawer = ref; }}
            content={<SideBar close={() => closeDrawer()} user={user} />}
            onClose={() => closeDrawer()}
            tapToClose={false}
            side="right"
        >

            <Drawer
                ref={(ref) => { barInfo = ref; }}
                content={<BarInfo bar={Bar} close={() => closeBarInfo()} />}
                onClose={() => closeBarInfo()}
                tapToClose={false}
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
                    >{user.pontos} Pontos</Text>
                    <View >
                        <TouchableOpacity
                            onPress={() => openDrawer()}
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
                            >@{user.username}  </Text>
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
                            marginTop: "5px",
                            overflow:"hidden"
                        }}
                    >
                    <Image source={mainBar.landscape} style={{
                        width:"auto",
                        height:"100px",
                    }}/>
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
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            style={{
                                height: "100px",
                                overflowX: "scroll",
                                overflowY: "hidden"
                            }}
                        >
                            <Image
                                source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lower_Manhattan_from_Staten_Island_Ferry_Corrected_Jan_2006.jpg/1024px-Lower_Manhattan_from_Staten_Island_Ferry_Corrected_Jan_2006.jpg"
                                style={{
                                    width: "1024px",
                                    height: "256px"
                                }}
                            />
                        </ScrollView>
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
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            style={{
                                height: "100px",
                                overflowX: "scroll",
                                overflowY: "hidden"
                            }}
                        >
                            <Image
                                source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lower_Manhattan_from_Staten_Island_Ferry_Corrected_Jan_2006.jpg/1024px-Lower_Manhattan_from_Staten_Island_Ferry_Corrected_Jan_2006.jpg"
                                style={{
                                    width: "1024px",
                                    height: "256px"
                                }}
                            />
                        </ScrollView>
                    </View>
                </View>
            </Drawer>
        </Drawer>
    )
}

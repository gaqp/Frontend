import 'react-native-gesture-handler';

import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/mainScreen'
import LoginScreen from './screens/login'
import MenuScreen from './screens/barMenu'

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHide();
const Stack = createStackNavigator();

export default function App() {
  return (
    //   <AnimatedAppLoader image={{ uri: Logo }}>
    <View
      style={{
        position: "relative",
        backgroundColor: "#F9FBFC",
        width: "100%",
        height: "100%",
      }}>
      <View style={{
        width: "80%",
        minWidth: "320px",
        maxWidth: "450px",
        height: "90%",
        minHeight: "640px",
        maxHeight: "800px",
        margin: "auto",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        overflow: "hidden"

      }} >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />

            <Stack.Screen name="App" component={MainScreen} />

            <Stack.Screen name="Menu" component={MenuScreen} />

          </Stack.Navigator>
        </NavigationContainer>
        <View style={{
          marginTop: "auto",
          height: "10px",
          backgroundColor: "#7A3361"
        }} />
      </View>

    </View>
    //   </AnimatedAppLoader>
  );
}

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => () => Asset.fromURI(image).downloadAsync(),
    [image]
  );

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return (
    <AnimatedSplashScreen image={image}>
      {children}
    </AnimatedSplashScreen>
  );
}

function AnimatedSplashScreen({ children, image }) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = React.useState(
    false
  );

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = React.useMemo(() => async () => {
    SplashScreen.hide();
    try {
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}>
          <Animated.Image
            style={{
              margin: "auto",
              width: '25%',
              height: '25%',
              resizeMode: Constants.manifest.splash.resizeMode || 'contain',

            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

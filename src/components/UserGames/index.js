import React from "react";
import { Animated, View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const UserGames = ({ games }) => {
  const scroll = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      {games.map((game, index) => {
        return (
          <Animated.Image
            key={game.id}
            source={{ uri: game.screenshots[0] }}
            blurRadius={30}
            style={{
              position: "absolute",
              height: 400,
              width: "100%",
              zIndex: 0,
              left: 0,
              right: 0,
              opacity: scroll.interpolate({
                inputRange: [(index - 1) * 315, index * 315, (index + 1) * 315],
                outputRange: [0, 1, 0],
              }),
            }}
          />
        );
      })}
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "#222"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 400 }}
      ></LinearGradient>

      <Animated.ScrollView
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        snapToInterval={315}
        decelerationRate="fast"
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scroll } } }],
          { useNativeDriver: true }
        )}
      >
        {games.map((game) => {
          return (
            <View key={game.id} style={styles.game}>
              <ImageBackground
                source={{ uri: game.screenshots[0] }}
                style={styles.cover}
              >
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.6)"]}
                  style={styles.overlay}
                >
                  <Text style={styles.title}>{game.title}</Text>
                  <Text style={styles.editor}>{game.editor}</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
          );
        })}
      </Animated.ScrollView>
    </>
  );
};

export default UserGames;

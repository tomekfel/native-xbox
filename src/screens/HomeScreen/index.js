import React from "react";
import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import gamesData from "../../../assets/games.json";
import friendsData from "../../../assets/friends.json";
import UserGames from "../../components/UserGames";
import AnimatedHeader from "../../components/AnimatedHeader";

const FRIENDS = friendsData.friends;
const GAMES = gamesData.games;

const HomeScreen = () => {
  const scroll = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <AnimatedHeader scroll={scroll} />

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scroll } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
      >
        <UserGames games={GAMES} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

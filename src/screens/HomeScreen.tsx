import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useMovies } from "../hooks/useMovies";
import { MoviePoster } from "../components/MoviePoster";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { Movie } from "../interfaces/movieInterface";



export const HomeScreen = () => {
  const { peliculasEnCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  <MoviePoster movie={peliculasEnCine[0]} />


  return (
    <View style={{ marginTop: top + 20 }}>
      {/* <MoviePoster movie={peliculasEnCine[0]} /> */}
      <Carousel
        data={peliculasEnCine}
        renderItem={() }
        sliderWidth={350}
        itemHeight={300}
      />
    </View>
  );
};

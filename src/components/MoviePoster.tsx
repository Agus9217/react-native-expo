import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Movie } from "../interfaces/movieInterface";

interface Props {
  movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View
      style={{
        width: 300,
        height: 420,
      }}
    >
      <View
      style={styles.imgContainer}
      >
        <Image style={styles.img} source={{ uri }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 18,
  },
  imgContainer: {
    borderRadius: 18,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  }
});

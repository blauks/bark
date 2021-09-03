import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BarkHeader from "../BarkHeader";
import defaultStyles from '../styles/screens';
import postStyles from '../styles/posts';
import {Roboto_400Regular} from "@expo-google-fonts/dev";
import BigCard from "../components/cards/BigCard";
import HorizontalList from "../navigation/HorizontalList"
import PostNearbyList from "../navigation/PostNearbyList";
import DogMatcher from "../components/cards/DogMatcher";

type PostProps = {
  title: string;
  //post_age: bigint;
  picture: [string];
  price: number;
  dogAge: number;
  dogBreed: string;
}

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={[defaultStyles.screen]}>
        <DogMatcher/>
        <HorizontalList title={'Popular Breeds'}/>
        <PostNearbyList/>
        <DogMatcher/>
        <HorizontalList title={'Certified Breeders'}/>
        <BigCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3500}
          dogAge={340}
          dogBreed={'Golden Retriver'}
        />
        <BigCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3000}
          dogAge={998}
          dogBreed={'Golden Retriver'}
        />
        <BigCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3000}
          dogAge={998}
          dogBreed={'Golden Retriver'}
        />
      </View>
    </ScrollView>
  );
}
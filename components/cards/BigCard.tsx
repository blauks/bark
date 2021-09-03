import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Svg, { Path } from "react-native-svg";
import DogSvg from "../svg/DogSvg"

type PostProps = {
  title: string;
  //post_age: bigint;
  picture: [string];
  price: number;
  dogAge: number;
  dogBreed: string;
}

function getAge(age:number){
  if (Math.trunc(age/365) > 0){
    return Math.trunc(age/365) + ' year' + (Math.trunc(age/365) === 1 ? '' : 's')
  } else if (Math.trunc(age/7) > 0){
    return Math.trunc(age/7) + ' week' + (Math.trunc(age/7) === 1 ? '' : 's')
  } return age + ' day' + (age === 1 ? '' : 's')
}

export default function BigCard(props:PostProps) {
  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.bigCard]}>
        <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.picture}/>
        <View style={styles.infoBar}>
          <View style={[styles.price, styles.infoItem]}>
            <View style={[styles.infoHeader, styles.priceHeader]}>
              <Text>Price</Text>
            </View>
            <View style={styles.priceInfo}>
              <Text>{props.price}</Text>
            </View>
          </View>
          <View style={[styles.age, styles.infoItem]}>
            <View style={[styles.infoHeader, styles.ageHeader]}>
              <Text>Age</Text>
            </View>
            <View style={styles.priceInfo}>
              <Text>{getAge(props.dogAge)}</Text>
            </View>
          </View>
          <View style={[styles.breed, styles.infoItem]}>
            <View style={styles.breedSvg}>
              <DogSvg/>
            </View>
            <Text style={styles.breedText}>{props.dogBreed}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  default:{
    color: '#616161'
  },
  cardContainer:{
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  bigCard: {
    width: '100%',
    aspectRatio: 1.1,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    display:"flex",
    flexDirection: "column",
  },
  picture:{
    resizeMode: 'cover',
    flex: 1,
    width: '100%'
  },
  infoBar:{
    height: '22%',
    display: "flex",
    flexDirection: "row"
  },
  infoItem:{
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.20,
    shadowRadius: 5,
  },
  price:{
    flex:1,
    backgroundColor: '#FFFAD0',
  },
  infoHeader:{
    height: '37.5%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    color: '#616161',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  priceHeader:{
    backgroundColor: '#ECCD7F',
  },
  ageHeader:{
    backgroundColor: '#FF8585',
  },
  priceInfo:{
    flex: 1,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    color: '#616161'
  },
  age:{
    flex:1,
    backgroundColor: '#F8F1F1',
  },
  breed:{
    flex: 1.75,
    backgroundColor: '#FEF6AA',
    display: "flex"
  },
  breedSvg: {
    flex: 1
  },
  breedText:{
    marginBottom: 10,
    height: '20%',
    textAlign: "center",
    color: '#616161'
  }
});
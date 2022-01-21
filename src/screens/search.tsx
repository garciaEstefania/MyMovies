import React, { useEffect, useState } from "react";
import { Image, Text, View, StatusBar, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/AppNavigator";
import styles from "./styles/searchStyle";

const API_KEY = '64d2ce72205af2e25fc56ed089e82a82';

type searchScreenNavigationType = StackNavigationProp<StackParamList, "Search">

const Search = () => {
    const [fetchedMovies, setFetchedMovies] = useState([]);

    const navigation = useNavigation<searchScreenNavigationType>();
    const {params} = useRoute();
    
    useEffect(() => {
        const PopularMovies = async () => {
            const {data} = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchText}&page=1&include_adult=false`)
            const responseData = data;
            setFetchedMovies(responseData.results);
        }
        PopularMovies();
    }, [])

    const renderList = (item: any) => {
        return (
            <View style={styles.movieCard}>
                <View style={styles.imgContainer}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/original${item.item.poster_path}` }} style={styles.movieImg} />
                </View>
                <View style={styles.movieInfo}>
                    <Text numberOfLines={2} style={{ fontWeight: 'bold' }}>{item.item.original_title}</Text>
                    <Text style={{ color: '#0008' }}>{item.item.release_date}</Text>
                    <Text numberOfLines={3} style={{ marginTop: 5 }}>{item.item.overview}</Text>
                    <View style={styles.movieVoteAverage}>
                        <Text> {item.item.vote_average}</Text>
                        <Text style={{ bottom: 0.5, paddingLeft: 5, }}>★</Text>
                    </View>
                </View>
            </View>
        );
    };

    return(
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <View style={styles.header}>
                <Text onPress={() => navigation.goBack()}>Back</Text>
                <Text>Resulst for: {params.searchText}</Text>
                <Text></Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={fetchedMovies}
                    style={{marginVertical: 20}}
                    //keyExtractor={(item: any) => item.id.toString()}
                    renderItem={renderList}
                />
            </View>
        </View >
    )
}

export default Search;
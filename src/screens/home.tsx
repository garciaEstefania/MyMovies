import React, { useEffect, useState } from "react";
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import Axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles/homeStyle";
import { StackParamList } from "../navigation/AppNavigator";

const API_KEY = '64d2ce72205af2e25fc56ed089e82a82';
type homeScreenNavigationType = StackNavigationProp<StackParamList, "Home">

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [popularMovies, setPopularMovies] = useState([]);

    const navigation = useNavigation<homeScreenNavigationType>();

    useEffect(() => {
        const PopularMovies = async () => {
            const {data} = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const responseData = data;
            setPopularMovies(responseData.results);
        }
        PopularMovies();
    }, [])

    const renderList = (item: any) => {
        //console.log(item);

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
            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Search your favorite movie"
                    placeholderTextColor='gray'
                    style={styles.input}
                    onChangeText={text => setSearchText(text)}
                    autoCapitalize={'none'}
                    value={searchText}
                    onSubmitEditing={() => navigation.navigate('Search', {searchText: searchText})}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Search', {searchText: searchText})}
                    style={styles.btnSearch}
                >
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
            <FlatList
                data={popularMovies}
                style={{marginVertical: 20}}
                //keyExtractor={(item: any) => item.id.toString()}
                renderItem={renderList}
            />
            </View>
        </View>
    )
}

export default Home;
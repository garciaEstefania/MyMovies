import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 20,
        paddingTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center' ,
    },
    listContainer:{
        flex: 1,
    },
    movieCard:{
        maxHeight: 150,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    imgContainer:{
        width: 100,
        borderRadius: 5,
        backgroundColor: 'gray'
    },
    movieImg: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        resizeMode: 'cover',
    },
    movieInfo:{
        flex: 2,
        paddingHorizontal: 10,
    },
    movieVoteAverage:{
        flexDirection: 'row',
    }
})

export default styles;
# MyMoviesApp

Mobile application developed with React Native and TypeScript using the free api “themoviedb”.

# Features 📋

- Login Screen: email and password field in order to allow de user to continue to the Home screen, you need to authenticate the email and password by making a post request to the following api: POST https://reqres.in/api/login

- Save that token into the local storage of the phone and if you close the app and open it again, if the token was saved, then the login screen should not be shown, instead you need to go directly to the Home Screen

- Home Screen: Once the user is authenticated, the next screen is Home screen. This screen has a top bar with a search textbox. In the main body, there is list of Current Popular Movies with the following information: Title, Poster, Release date, Overview, The Average vote/rate.

- Search Screen: Now, about the top search Textbox and button/icon, The user will enter a search query for a movie name, for example: Avengers and tap the button/icon (or click Enter/Go in the keyboard). Then you should open a new screen and do a lookup in the api for all movies (not just popular movies) that have that query string in their name and show the list of movies the same way 
you show the Popular movies in the Home Screen. Just remember to add a label at the top that will show what’s the current search string for the results shown. Additionally, you should be able to go back to the Home Screen.


## Technologies 📋

- [React Native](https://reactnative.dev/docs/environment-setup)

- [React Navigation v6](https://reactnavigation.org/docs/getting-started)


### Starting 🚀

- Cloning the project

```
https://github.com/garciaEstefania/MyMovies.git
```
- Running Metro Bundler

```
npx react-native start
```

- Running the app in Android

```
npx react-native run-android
```
- Running the app in iOs

```
npx react-native run-ios
```

### Instalation 🔧

- To Install [React Native](https://reactnative.dev/docs/environment-setup)


## Guide 📖

You can find much more on how to use [React Native](https://reactnative.dev).

## Versioning 📌

React Native
> 0.66.4

Node js
> 16.3.0

React Navigation
> 6.x

npx
> 7.15.1



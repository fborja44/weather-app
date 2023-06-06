import { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { Stack } from "expo-router";
import SearchBar from "../components/search/SearchBar";
import SearchItem from "../components/search/SearchItem";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchSearch = async () => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=en&format=json`;
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setSearchResults(response.data.results ?? []);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm === undefined || !searchTerm.trim()) return;
    // Fetch search after 1 second of changed input
    const delaySearch = setTimeout(() => {
      fetchSearch();
    }, 1000);
    return () => {
      clearTimeout(delaySearch);
    };
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setIsLoading={setIsLoading}
      />
      {searchTerm.trim() &&
        searchResults.map((data, index) => (
          <SearchItem data={data} key={`${searchTerm}-${index}`} />
        ))}
      {!isLoading && searchResults.length === 0 && searchTerm.length > 0 && (
        <View className="px-4 py-4">
          <Text className="font-secondary text-base text-slate-500">
            {!error ? " No Results Found" : "An error has occurred. "}
          </Text>
        </View>
      )}
      {isLoading && (
        <ActivityIndicator color="#F17720" size="large" className="pt-8" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});

export default Search;

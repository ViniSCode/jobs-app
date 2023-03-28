import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import PopularJobCard from '../../../components/common/cards/popular/PopularJobCard';
import { COLORS, SIZES } from '../../../constants';
import { useFetch } from '../../../hook/useFetch';
import styles from './popularjobs.style';

const Popularjobs = () => {
  const router = useRouter();

  const {data, error, isLoading} = useFetch("search", {
    query: 'React developer',
    num_pages: 1
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ): error ? (
          <Text style={styles.headerBtn}>Something went wrong</Text>
        ): (
          <FlatList 
            data={[1, 2, 3]}
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
            )}

            keyExtractor={item => item}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
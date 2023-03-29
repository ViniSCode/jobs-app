import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import NearbyJobCard from '../../../components/common/cards/nearby/NearbyJobCard';
import { COLORS } from '../../../constants';
import { useFetch } from '../../../hook/useFetch';
import styles from './nearbyjobs.style';

const Nearbyjobs = () => {
  const router = useRouter();

  const {data, error, isLoading} = useFetch("search", {
    query: 'React developer',
    num_pages: 1
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map(job => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs
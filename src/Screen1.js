import React, {createContext, useState, useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootContext} from '../App';
import {Card} from './components/Card';

export const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <RootContext.Consumer>
      {(value) => {
        const {jobs, jobIds} = value;
        return (
          <View style={styles.container}>
            <FlatList
              data={jobIds}
              renderItem={({item: jobId, index}) => {
                const job = jobs[jobId];
                return (
                  <Card
                    jobTitle={job.title}
                    location={job.location}
                    description={job.description}
                    salary={job.salary}
                    companyLogoUrl={job.company_logo}
                    onPress={() => navigation.navigate('JobDetail', {jobId})}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        );
      }}
    </RootContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
  },
});

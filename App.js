import React, {useEffect, useState, createContext} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Screen1} from './src/Screen1';
import {Screen2} from './src/Screen2';

const AppStack = createStackNavigator();
export const RootContext = createContext();

export const App = () => {
  const [jobs, setJobs] = useState();
  const [jobIds, setJobIds] = useState();

  useEffect(() => {
    fetch('https://jobs.github.com/positions.json')
      .then((response) => response.json())
      .then((data) => {
        let byJobId = {};
        let ids = [];
        data.forEach((d) => {
          byJobId[d.id] = d;
          ids.push(d.id);
        });
        setJobs(byJobId);
        setJobIds(ids);
      })
      .catch((err) => console.log('ERROR: ', err));
  }, []);

  return (
    <RootContext.Provider value={{jobs, jobIds}}>
      <SafeAreaView style={styles.parentContainer}>
        <NavigationContainer>
          <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Screen1} />
            <AppStack.Screen name="JobDetail" component={Screen2} />
          </AppStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </RootContext.Provider>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },

  childContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 30,
  },
});

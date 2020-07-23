import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {RootContext} from '../App';

export const Screen2 = () => {
  const route = useRoute();
  const jobId = route.params?.jobId;
  return (
    <RootContext.Consumer>
      {({jobs}) => {
        const job = jobs[jobId];
        return (
          <ScrollView style={styles.container}>
            <View style={styles.headerWrapper}>
              <Image
                source={{
                  uri:
                    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fgoogle_logo1600.png&f=1&nofb=1',
                }}
                style={styles.companyLogo}
              />
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.location}>{job.location}</Text>
              <Text style={styles.salary}>{job.salary}</Text>
            </View>
            <View style={styles.contentContainer}>
              <WebView
                source={{html: job.description}}
                style={styles.webviewContent}
                scalesPageToFit={true}
              />
            </View>
          </ScrollView>
        );
      }}
    </RootContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  headerWrapper: {
    paddingVertical: 15,
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  companyLogo: {
    width: 70,
    height: 70,
  },

  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  location: {
    fontSize: 13,
    color: 'gray',
  },

  salary: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  contentContainer: {
    flex: 1,
    marginTop: 10,
  },

  jobDescription: {
    color: 'gray',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'justify',
  },

  webviewContent: {
    flex: 1,
    minHeight: 100,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
});

import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export const Card = ({
  jobTitle,
  location,
  companyLogoUrl,
  description,
  salary,
  onPress,
}) => {
  console.log('URL: ', companyLogoUrl);
  const logo =
    companyLogoUrl ??
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fgoogle_logo1600.png&f=1&nofb=1';
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <View style={styles.logoWrapper}>
            <Image
              source={{
                uri: logo,
              }}
              style={styles.companyLogo}
            />
          </View>
          <View style={styles.jobTitleWrapper}>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.jobDescription}>{description}</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.salary}>{salary}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    borderRadius: 15,
    display: 'flex',
    height: 200,
    padding: 15,
    backgroundColor: 'white',
  },

  cardHeader: {
    height: 50,
    flexDirection: 'row',
  },

  logoWrapper: {
    width: 50,
    height: '100%',
    marginRight: 10,
    borderRadius: 10,
  },

  companyLogo: {
    width: '100%',
    height: '100%',
  },

  jobTitleWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },

  jobTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  location: {
    fontSize: 13,
    color: 'gray',
  },

  cardContent: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },

  jobDescription: {
    fontSize: 13,
    color: 'gray',
    lineHeight: 20,
    textAlign: 'justify',
  },

  cardFooter: {
    paddingVertical: 10,
    marginTop: 10,
  },

  salary: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

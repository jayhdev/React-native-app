import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import { Text } from '../../Components';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import rootStyles from '../../styles';
import styles from './styles';

function sortByDate(timelineItems) {
  const groupedObject = _.groupBy(timelineItems, 'date');
  const groupedArray = [];
  _.forEach(groupedObject, (value, key) => {
    groupedArray.push({ [key]: value });
  });

  return groupedArray;
}

function TimeLine({ navigation, timelineItems }) {
  const sortedTimeLine = sortByDate(timelineItems);

  return (
    <View style={rootStyles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text h1 style={styles.dateStyle}>
          Timeline
        </Text>
        {sortedTimeLine.map(item => {
          const dueDate = _.keys(item)[0];
          const dayItems = item[dueDate];

          return (
            <View key={dueDate}>
              <Text style={styles.dueDateStyle}>
                {moment(new Date(dueDate)).format('dddd, MMMM D, YYYY')}
              </Text>
              <View style={styles.dateContent}>
                {dayItems.map(time => (
                  <TouchableOpacity
                    key={time._id}
                    style={styles.timeStyle}
                    onPress={navigation =>
                      navigation.navigate('TimeLineDetail')}>
                    <Text>{time.startTime}</Text>
                    <Text>{time.description}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          );
        })}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const mapStateToProps = ({
  app: {
    event: { timelineItems }
  }
}) => ({
  timelineItems
});

export default connect(mapStateToProps)(TimeLine);

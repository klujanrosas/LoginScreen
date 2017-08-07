import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Card = ({ title, children }) => {
  return (
    <View style={styles.container}
    >
      <View style={styles.fakeCard} />
      <View style={styles.cardContainer}>
        <View style={styles.cardTitle} >
          <Text style={styles.title} >
            { title }
          </Text>
        </View>
        <View style={styles.cardContent}>
          {children}
        </View>
      </View>
    </View>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default Card

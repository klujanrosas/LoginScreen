import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

const CircularBadge = ({ label }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>
        { label }
      </Text>
    </View>
  )
}

CircularBadge.propTypes = {
  label: PropTypes.string
}

export default CircularBadge

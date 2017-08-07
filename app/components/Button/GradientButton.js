import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const GradientButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <LinearGradient
        style={styles.button}
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1 }}
        colors={['#5A89E5', '#56C2F0', '#58A6EB']}
        locations={[0.1, 0.98, 1]}
      >
        <Text style={styles.text}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

GradientButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
}

export default GradientButton

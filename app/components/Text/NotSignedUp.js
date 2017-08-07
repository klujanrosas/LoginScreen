import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const NotSignedUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>
        Not a registered member?
      </Text>
      <Text style={styles.highlightedText}>
        Sign Up
      </Text>
    </View>
  )
}

export default NotSignedUp

import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput } from 'react-native'

import styles from './styles'

const SimpleInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={styles.$placeholderText}
        underlineColorAndroid="transparent"
        style={styles.input}
        {...props}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  )
}

SimpleInput.propTypes = {
  placeholder: PropTypes.string,
  editable: PropTypes.bool
}

export default SimpleInput

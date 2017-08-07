import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
    {/* <View style={styles.container}>
      {children}
    </View> */}
    <LinearGradient
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1, y: 1 }}
      colors={['#56C2F0', '#58A6EB', '#5A89E5']}
      locations={[0, 0.4, 1]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  </TouchableWithoutFeedback>
)

Container.propTypes = {
  children: PropTypes.any,
}

export default Container

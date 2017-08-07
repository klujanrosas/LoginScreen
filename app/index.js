import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

EStyleSheet.build({
  $primaryBlue: '#56BFEF',
  $white: '#FFFFFF',

  $inputText: '#86919D',
  $darkText: '#343434',
  $highlightedText: '#5A89E5',
  $inputBorder: '#DAE9FF',
  // outline: 1,
})

export default () => <Home />

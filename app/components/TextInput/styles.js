import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'

const INPUT_HEIGHT = 48
const BORDER_RADIUS = 4

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    width: '85%',
    height: INPUT_HEIGHT,
    borderBottomColor: '$inputBorder',
    borderBottomWidth: StyleSheet.hairlineWidth * 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 11,
  },
  $placeholderText: '#86919D',
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    fontSize: 15,
    fontWeight: '400',
    color: '$inputText',
    paddingBottom: -5,
  }
})

export default styles

import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const BUTTON_HEIGHT = 50
const BUTTON_RADIUS = 25
const WIDTH = Dimensions.get('window').width

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 0.9,
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
    elevation: 4,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '$white'
  }
})

export default styles

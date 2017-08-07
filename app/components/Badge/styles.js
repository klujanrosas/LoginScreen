import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'


const WIDTH = Dimensions.get('window').width
const RADIUS = WIDTH / 2

const styles = EStyleSheet.create({
  container: {
    width: WIDTH * 0.3,
    height: WIDTH * 0.3,
    borderRadius: RADIUS,
    backgroundColor: '$white',
    // marginTop: WIDTH * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginVertical: 30,
  },
  text: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '$primaryBlue'
  }
})

export default styles

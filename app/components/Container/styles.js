import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const DEVICE_HEIGHT = Dimensions.get('window').height

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$primaryBlue',
    paddingTop: DEVICE_HEIGHT * 0.05
  },
})

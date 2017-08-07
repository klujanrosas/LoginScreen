import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'
import color from 'color'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const BORDER_RADIUS = 5

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: WIDTH,
    marginTop: 30,
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // left: 0,
  },
  cardContainer: {
    backgroundColor: '$white',
    borderRadius: BORDER_RADIUS,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.51,
    marginBottom: HEIGHT * 0.05,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  cardTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '$white',
    borderBottomRightRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  fakeCard: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 7,
    width: '85%',
    zIndex: 9000,
    borderTopLeftRadius: BORDER_RADIUS * 2,
    borderTopRightRadius: BORDER_RADIUS * 2
  }
})


export default styles

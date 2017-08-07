import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  normalText: {
    fontSize: 15,
    color: '$inputText',
    marginRight: 3,
  },
  highlightedText: {
    fontSize: 15,
    color: '$highlightedText'
  }
})

export default styles

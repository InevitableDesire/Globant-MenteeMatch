import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globantBright.bg,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    color: globantBright.text,
    backgroundColor: globantBright.bg,
    padding: 32,
    fontSize: 24,
    position: 'relative',
  },
  headerText: {
    color: globantBright.text,
    fontSize: 24,
    textAlign: 'center',
  },
  pressableImg: {
    position: 'absolute',
    top: 32,
    left: 32,
  },
  arrowImg: {
    width: 32,
    height: 32,
  },
  textContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  keyText: {
    color: globantBright.text,
    backgroundColor: globantBright.blackPearl,
    width: '100%',
    textAlign: 'center',
    borderWidth: 1,
  },
  valueText: {
    color: globantBright.text,
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    height: 32,
    textAlignVertical: 'center',
  },
  btnsContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: globantBright.green,
    margin: 5,
    elevation: 5,
  },
  pressableTxt: {
    color: globantBright.text,
  },
  skillsText: {
    width: '100%',
    color: globantBright.text,
    textAlign: 'center',
    padding: 16,
    fontSize: 14,
    borderBottomWidth: 1,
  },
  userImg: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    marginBottom: 16,
  },
  btn: {
    width: '75%',
    padding: 14,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#4E181D',
    borderRadius: 16,
    margin: 32,
    textAlign: 'center',
    position: 'absolute',
    borderColor: globantBright.green,
    elevation: 10,
    bottom: -10,
  },
  btnText: {
    textAlign: 'center',
    color: globantBright.text,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#BFD732',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: globantBright.text,
  },
});

export default styles;

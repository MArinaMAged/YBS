import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#004AB9',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  image: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
  },
});

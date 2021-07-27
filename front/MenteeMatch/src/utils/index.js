import { showMessage } from 'react-native-flash-message';

export const loginMessage = type => {
  showMessage({
    message: type ? 'Exitoso' : 'Error',
    description: type ? 'Te has logueado' : 'Datos incorrectos',
    type: type ? 'success' : 'danger',
    icon: type ? 'success' : 'danger',
    floating: true,
  });
};

export const simpleMessage = (message, description, type) => {
  showMessage({
    message: message,
    description: description,
    //types: success, danger
    type: type,
    icon: type,
    floating: true,
  });
};

export const likeMessage = () => {
  showMessage({
    message: '¡Liked!',
    type: 'default',
    backgroundColor: '#BFD832',
    floating: true,
    color: 'black',
  });
};

export const doubleMatch = () => {
  showMessage({
    message: '¡Match doble!',
    type: 'default',
    backgroundColor: '#662E91',
    floating: true,
    textAlign: 'center',
  });
};

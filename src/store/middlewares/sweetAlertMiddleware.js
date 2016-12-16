import * as Types from '../../constants/actionTypes';
import {sweetAlert} from '../../libs/sweet-alert/sweet-alert';


const sweetAlertMiddleware = (store) => (next) => (action) => {
  switch(action.type){
    case Types.OPEN_SWEET_ALERT:
      return sweetAlert(action.preset, action.option, action.callback)
    default:
  }
  next(action);
};

export default sweetAlertMiddleware;

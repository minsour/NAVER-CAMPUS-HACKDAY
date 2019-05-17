import { setLanguage } from '../action/index';  

const myApp = (state = [], action) => {  
  switch (action.type) {
    case 'LANG_SET':
      return [
        ...state, setLanguage(action.lang_key)
      ];
    default:
      return state;
  }
}
export default myApp;
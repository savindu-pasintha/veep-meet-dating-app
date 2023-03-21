import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  signInToken: false,
  userAuthData:{},
  alert: {msessage:"",type:null},
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'setToken':
      return { ...state, ...rest }
    case 'setAlert':
      return { ...state, ...rest }
    case 'setUserAuthData':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)

export default store

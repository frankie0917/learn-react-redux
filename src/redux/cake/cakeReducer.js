const { BUY_CAKE } = require("./cakeType")

const initialState = {
  cakeQty: 10
}

const cakeReducer = (state=initialState, action)=>{
  switch(action.type){
    case BUY_CAKE:
      return {
        ...state,
        cakeQty: state.cakeQty - action.payload
      }
    default:
      return state
  }
}

export default cakeReducer;
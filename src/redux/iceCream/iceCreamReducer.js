const { BUY_ICE_CREAM } = require("./iceCreamType")

const initialState = {
  iceCreamQty: 20
}

const iceCreamReducer = (state= initialState, action)=>{
  switch(action.type){
    case BUY_ICE_CREAM:
      return {
        ...state,
        iceCreamQty: state.iceCreamQty - action.payload
      }
    default:
      return state
  }
}

export default iceCreamReducer
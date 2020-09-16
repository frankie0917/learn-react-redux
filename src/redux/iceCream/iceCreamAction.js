const { BUY_ICE_CREAM } = require("./iceCreamType");

export const buyIceCream = (num) => {
  return {
    type: BUY_ICE_CREAM,
    payload: num,
  };
};

const { BUY_CAKE } = require("./cakeType");

export const buyCake = (number) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
};

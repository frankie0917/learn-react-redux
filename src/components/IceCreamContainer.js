import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer({ iceCreamQty, buyIceCream }) {
  const [num, setNum] = useState(1);
  return (
    <div>
      <h2>ice cream: {iceCreamQty}</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => buyIceCream(num)}>buy ice cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    iceCreamQty: state.iceCream.iceCreamQty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (num) => dispatch(buyIceCream(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

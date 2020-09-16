import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer({ cakeQty, buyCake }) {
  const [num, setNum] = useState(1);
  return (
    <div>
      <h2>cake:{cakeQty}</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => buyCake(num)}>buycake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cakeQty: state.cake.cakeQty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: num => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

import React from "react";

const Drawer = (props) => {
  // console.log("props.key ::", props.key);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.product()}
      >
        Product
      </button>

      <button
        type="button"
        className="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.doctor()}
      >
        Doctor
      </button>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.order()}
      >
        Order
      </button>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.blog()}
      >
        Blog
      </button>

      {/* <button
        type="button"
        className="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.doctor()}
      >
        Doctor
      </button> */}
      {/* <button
        type="button"
        className="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.product()}
      >
        Forget Password
      </button> */}
    </div>
  );
};

export default Drawer;

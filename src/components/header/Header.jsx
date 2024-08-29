import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const count = useSelector((state) => state.counter);
  return (
    <div>
      <h2>header {count}</h2>
    </div>
  );
};

export default Header;

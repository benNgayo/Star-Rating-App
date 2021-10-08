import "./styles.css";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function App({ totalStars = 5, style = {} }) {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div className="App" style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}

      <p style={{ alignSelf: "center" }}>
        {selectedStars} of {totalStars}
      </p>
    </div>
  );
}

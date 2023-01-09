import React from "react";

function Sessionmap() {
  const day = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43
]
  return (
    <>
      <div class="articles">
        {day.map((user, index) => (
          <div className={`session${index + 1}`}>
            <div className="article">{index + 1}</div>
            <div className={`line line${index + 1}`}></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sessionmap;

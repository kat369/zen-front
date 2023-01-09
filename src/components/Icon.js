import React, { useRef, useState } from "react";

function Icon({ data, settitle }) {
  const active = `style={{color: "red"}}`;
  const inActive = `style={{color: "yellow"}}`;
  const Hover = ({ isActive }) => (isActive ? `${active}` : `${inActive}`);

  const menuRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current) {
    }
  });

  const [select, setselect] = useState(false);
  let change = () => {
    setselect(!select);
    settitle(`${data.navtitle}`);
  };

  return (
    <>
      <div className={select ? "menuitem btnactive" : "menuitem"}>
        <a className={Hover} onClick={() => change()} href="#">
          <div>
            <i
              className={
                select
                  ? `navicon iselect ${data.navicon}`
                  : `navicon ${data.navicon}`
              }
            ></i>
          </div>
          <span>{data.navtitle}</span>
        </a>
      </div>
    </>
  );
}

export default Icon;

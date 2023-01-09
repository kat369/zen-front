import React, { useRef, useState } from "react";
import Class from "./Class";
import Icon from "./Icon";


function Sidenav() {
  const navicons = [
    {
      navtitle: "Class",
      navicon: "fa-solid fa-user-tie",
    },
    {
      navtitle: "Dashboad",
      navicon: "fa-solid fa-chart-line",
    },
    {
      navtitle: "Task",
      navicon: "fa-solid fa-list-check",
    },
    {
      navtitle: "Webcode",
      navicon: "fa-solid fa-list-ol",
    },
    {
      navtitle: "Capstone",
      navicon: "fa-solid fa-diagram-project",
    },
    {
      navtitle: "Queries",
      navicon: "fa-solid fa-headset",
    },
    {
      navtitle: "Requirements",
      navicon: "fa-solid fa-scale-balanced",
    },
    {
      navtitle: "Applications",
      navicon: "fa-solid fa-calendar-check",
    },
    {
      navtitle: "Interviewtasks",
      navicon: "fa-solid fa-cubes-stacked",
    },
    {
      navtitle: "Leave-Application",
      navicon: "fa-solid fa-person-through-window",
    },
    {
      navtitle: "Mock-Interview",
      navicon: "fa-solid fa-puzzle-piece",
    },
    {
      navtitle: "Certificate",
      navicon: "fa-solid fa-graduation-cap",
    },
    {
      navtitle: "Testimonial",
      navicon: "fa-solid fa-flag-checkered",
    },
    {
      navtitle: "Leaderboard",
      navicon: "fa-solid fa-people-group",
    },
    {
      navtitle: "syllabus",
      navicon: "fa-solid fa-box-archive",
    },
    {
      navtitle: "Portfolio",
      navicon: "fa-solid fa-address-card",
    }
  ];
  const [title, settitle]= useState("Home")
  const [open, setopen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setopen(false);
    }
  });

  return (
    <>
      <div className="content">
        <Class />
      </div>
      <nav>
        <div className="cardtitle">{title}</div>

        <div className="user">
          <div className="usertext">Kathiravan Arjunan</div>
          <div className="userimg">
            <img
              ref={imgRef}
              onClick={() => {
                setopen(!open);
              }}
              src="../user.png"
              className="logox"
              alt="user"
            />
            {open && (
              <div ref={menuRef} className="card">
                <ul className="list">
                  <li
                    onClick={() => {
                      setopen(false);
                    }}
                    className="dropicon"
                  >
                    Profile
                  </li>
                  <li
                    onClick={() => {
                      setopen(false);
                    }}
                    className="dropicon"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="sidebar">
        <div className="scroll">
          <div className="logoo">
            <img src="../logo.png" className="logo" alt="logo"></img>
            <span className="zen">
              <b>Student</b>
            </span>
          </div>

          {navicons.map((data, index) => (
            <Icon  data={data} settitle={settitle}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidenav;

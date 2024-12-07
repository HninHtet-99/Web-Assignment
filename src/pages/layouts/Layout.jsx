import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../components/Nav";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./style.css";
import useTheme from "../../hooks/useTheme";

export default function Layout() {
  const location = useLocation();
  let { isDark } = useTheme();
  const nodeRef = useRef(null);
  useEffect(() => {
    let body = document.body;
    if (isDark) {
      // body class = 'bg-darkbg'
      body.classList.add("bg-darkbg");
    } else {
      // body class ='bg-white'
      body.classList.remove("bg-darkbg");
    }
  }, [isDark]);
  return (
    <div className={isDark ? "bg-darkbg" : "bg-white"}>
      <Nav />
      {/* dynamic content */}
      <SwitchTransition>
        <CSSTransition
          nodeRef={nodeRef}
          timeout={200}
          classNames="fade"
          key={location.pathname}
        >
          <div ref={nodeRef} className="max-w-6xl mx-auto p-3">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { GiThirdEye, GiBrassEye } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  {
    label: "HOME",
    path: "/",
    color: "#375ec8",
  },
  {
    label: "MANIFESTO",
    path: "/manifesto",
    color: "#dd7d5a",
  },
  {
    label: "EVENTS",
    path: "/events",
    color: "#d34e5e",
  },
  {
    label: "ARCHIVE",
    path: "/archive",
    color: "#607b51",
  },
] as const;

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<null | HTMLDivElement>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setIsOpen(false);
    }

    if (containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollTo({ top: 0 });
      }, 300);
    }
  }, [pathname]);

  return (
    <div
      className={`navigation-container ${isOpen ? "open" : ""}`}
      ref={containerRef}
    >
      <div className="navigation">
        <button
          onClick={() => setIsOpen((old) => !old)}
          className="menu-button"
        >
          {isOpen ? (
            <GiThirdEye className="icon" />
          ) : (
            <GiBrassEye className="icon" />
          )}
        </button>
        <div className="links-container">
          <div className="background" />
          <div className="links">
            {LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="link"
                  style={{
                    borderColor: link.color,
                    color: isActive ? link.color : "black",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Button } from "antd";

const ButtonBar = ({ children, buttons, style, ...props }) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        marginLeft: -32,
        width: '100%',
        background: "#fff",
        padding: "5px 20px",
        marginBottom: "2px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        borderRadius: "2px",
        // ...style,
      }}
    >
      {buttons &&
        buttons.map(b => {
          if (b.hidden) return null;
          return (
            <Button
              key={b.key}
              className={b.className}
              disabled={b.disabled}
              type={b.type}
              onClick={b.onClick}
              style={{ marginRight: 8 }}
              loading={b.loading}
              icon={b.icon}
            >
              {b.title}
            </Button>
          );
        })}
    </div>
  );
};

export default ButtonBar;

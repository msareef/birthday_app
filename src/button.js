import React from "react";

export function ButtonGroup({ className, ...rest }) {
  return <Button {...rest} className={["button", className].join(" ")} />;
}

function Button({ as: As, ...props }) {
  let defaultAttrs = { buttons: { type: "button" } };
  return <As {...defaultAttrs[As]} {...props} />;
}

Button.defaultProps = { as: "button" };

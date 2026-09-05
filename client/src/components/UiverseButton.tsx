import React from "react";

interface UiverseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "zoom" | "whatsapp";
  type?: "button" | "submit" | "reset";
}

export function UiverseButton({
  children,
  onClick,
  className = "",
  variant = "zoom",
  type = "button",
}: UiverseButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`realism-button button-${variant} ${className}`}
    >
      <div className="inner">{children}</div>
    </button>
  );
}

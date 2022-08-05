import { PropsWithChildren, ReactNode } from "react"; //funcionla component
import * as React from "react";

type Props = {
  children?: React.ReactNode;
};
const DarkLayout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 5, padding: 10 }}>
      <h3>DarkLayout</h3>
      {children}
    </div>
  );
};

export default DarkLayout;

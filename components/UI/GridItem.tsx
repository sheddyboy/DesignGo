import React, { CSSProperties, HTMLAttributes, ReactNode } from "react";

interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  gridColumn?: string;
  gridRow?: string;
  style?: CSSProperties;
  height?: string;
}

const GridItem = ({
  children,
  gridColumn,
  gridRow,
  style,
  height,
  ...attributes
}: GridItemProps) => {
  return (
    <div
      {...attributes}
      style={{
        ...style,
        gridColumn: gridColumn,
        gridRow: gridRow,
        height: height,
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;

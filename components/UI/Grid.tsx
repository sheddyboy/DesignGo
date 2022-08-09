import React, { CSSProperties, HTMLAttributes, ReactNode } from "react";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  gridTemplateColumns: string;
  gridTemplateRows?: string;
  rowGap?: string;
  columnGap?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const Grid = ({
  children,
  gridTemplateRows,
  gridTemplateColumns,
  columnGap,
  rowGap,
  style,
  ...attributes
}: GridProps) => {
  return (
    <div
      style={{
        ...style,
        display: "grid",
        gridTemplateRows: gridTemplateRows,
        gridTemplateColumns: gridTemplateColumns,
        columnGap: columnGap,
        rowGap: rowGap,
      }}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Grid;

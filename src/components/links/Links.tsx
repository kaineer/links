import React, { ReactNode } from "react";
import classes from './Links.module.css';

interface Props {
  children: ReactNode;
}

export function Links({ children }: Props) {
  return (
    <div className={ classes.links }>
      { children }
    </div>
  )
}

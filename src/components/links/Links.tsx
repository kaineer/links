import classes from './Links.module.css';
import { ReactNode } from "react";

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

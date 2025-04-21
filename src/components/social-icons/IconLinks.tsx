import classes from './IconLinks.module.css'

interface Props {
  children: ReactNode;
}

export function IconLinks({ children }: Props) {
  return (
    <div className={classes.iconLinks}>
      { children }
    </div>
  )
}

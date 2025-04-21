import classes from './Bio.module.css'

interface Props {
  text: string;
}

export function Bio({ text }: Props) {
  return <p className={classes.bio}>{ text }</p>
}

import classes from './Title.module.css'

interface Props {
  text: string;
}

export function Title({ text }: Props) {
  return <h1 className={ classes.title }>{ text }</h1>
}

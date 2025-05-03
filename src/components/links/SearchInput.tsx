import classes from './SearchInput.module.css'
import clsx from 'clsx'

interface Props {
  visible: boolean;
  term: string;
}

export const SearchInput = ({ visible, term }: Props) => {
  return (
    <div className={clsx(classes.container, {
      [classes.focused]: visible
    })}>
      <input className={classes.input} value={term} />
    </div>
  )
}

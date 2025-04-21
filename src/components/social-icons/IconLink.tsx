//
import classes from './IconLink.module.css'
import clsx from 'clsx'

interface Props {
  iconClass: string;
  url?: string;
}

export function IconLink({
  iconClass,
  url = "#",
}: Props) {
  return (
    <a href={url} className={classes.iconLink}><i className={clsx('fab', iconClass)}></i></a>
  )
}

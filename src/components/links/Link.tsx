import clsx from 'clsx'
import classes from './Link.module.css';

interface Props {
  iconClass: string;
  text: string;
  url?: string;
  variation?: string;
}

export function Link({
  iconClass,
  text,
  url = "#",
  variation = 'light',
}: Props) {
  return (
    <a href={ url } className={ clsx(
      classes.link, classes['variation-' + variation]
    ) }>
      <i className={ clsx("fab", iconClass) }></i>
      { text }
    </a>
  )
}

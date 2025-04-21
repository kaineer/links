import classes from './Profile.module.css'

import { Title } from './Title'
import { Bio } from './Bio'
import { Avatar } from './Avatar'

interface Props {
  title: string;
  bio: string;
  url: string;
}

export function Profile({ title, bio, url }: Props) {
  return (
    <div className={ classes.profile }>
      <Avatar url={ url } />
      <Title text={ title } />
      <Bio text={ bio } />
    </div>
  )
}

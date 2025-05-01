import { Links } from '../components/links/Links';
import { Link } from '../components/links/Link';
import { Profile } from '../components/profile/Profile';
import classes from './LinkPage.module.css'
import { IconLinks } from '../components/social-icons/IconLinks';
import { IconLink } from '../components/social-icons/IconLink';

interface Profile {
  title: string;
  bio: string;
  url: string;
}

interface Link {
  text: string;
  url: string;
  iconClass?: string;
}

interface SocialIcon {
  url?: string;
  iconClass: string;
}

interface Props {
  profile: Profile;
  links: Link[];
  icons: SocialIcon[];
}

export const LinkPage = ({ profile, links, icons }: Props) => {
  const { title, bio, url } = profile;

  return (
    <div className={classes.linkPage}>
      <Profile
        title={ title }
        bio={ bio }
        url={url}
        />
      <Links>
        { links.map((l) => <Link url={l.url} text={l.text} iconClass={l.iconClass} variation={l.variation}/>) }
      </Links>
      <IconLinks>
        {icons.map((l) => <IconLink url={l.url} iconClass={l.iconClass} />)}
      </IconLinks>
    </div>
  );
}

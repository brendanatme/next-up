/**
 * menu.component
 * 
 * uses menu lib (react-burger-menu)
 */
import { slide as Menu } from 'react-burger-menu';
import { withMenu } from '../../store/burger-menu';
import { withScreen } from '../../store/screen';
import { Link } from '../../routes';
import data from '../../data/index.json';
import BoxLink from '../box-link';
import Hr from '../hr';
import Icon from '../icon';
import Logo from '../logo';
import MenuButton from '../menu-button';
import SiteTitle from '../site-title';
import './menu.lib.scss';
import './menu.component.scss';

const provinces = Object.keys(data.provinces).map((k) => ({
  code: data.provinces[k].code,
  name: data.provinces[k].name,
  slug: k,
}));

const BaseLink = ({
  className = '',
  onClick,
  label,
  selected,
  url,
}) => (
  <Link route={url}>
    <a
      className={`${className} ${selected ? 'is-selected' : ''}`}
      onClick={onClick}
    >
      <span className={`${className}__inner`}>
        <span className={`${className}__label`}>{label}</span>
      </span>
    </a>
  </Link>
);

const MenuLink = (props) => <BaseLink className="menu-link" {...props} />;
const ProvinceLink = (props) => <BaseLink className="province-link" {...props} />;

const MainMenu = ({
  children,
  closeMenu,
  routeParams,
  screenWidth,
  scrollTo,
  template,
  title,
  ...props
}) => {
  const width = screenWidth > 767 ? 400 : 300;
  const onClick = () => {
    closeMenu();
    scrollTo(0);
  };
  
  return (
    <Menu {...props} width={width}>
      {/* provinces run down side here -- not on homepage */}
      <div className={`menu__sidebar menu--for-${template} menu--is-${width}`}>
        {provinces.map((p) => (
          <ProvinceLink
            onClick={onClick}
            key={p.slug}
            label={p.code}
            selected={routeParams.province === p.slug}
            url={`/${p.slug}/impaired-driving-laws`}
          />
        ))}
      </div>

      {/* main menu section */}
      <div className={`menu__main menu--for-${template} menu--is-${width}`}>
        <div className="rel oh menu__header">
          <Link route="/">
            <a onClick={onClick}>
              <SiteTitle />
            </a>
          </Link>
        </div>

        {/* force menu button to always be active (X) */}
        <MenuButton className="z5 menu__menu-button menu-button--is-active is-hidden-mobile" />

        <div className="rel oh menu__body rhythm">
          <div className="serif-32 black">{title}</div>

          <Hr short />
          
          {/* provinces listed here on homepage */}
          {template === 'index' ? provinces.map((p) => (
            <MenuLink
              closeMenu={closeMenu}
              key={p.slug}
              label={p.name}
              selected={routeParams.province === p.slug}
              url={`/${p.slug}/impaired-driving-laws`}
            />
          )) : (
            // else display page-specific content
            children
          )}
        </div>

        <Hr short />

        <MenuLink
          onClick={onClick}
          label="Home"
          url="/"
        />

        <div className={`menu__footer menu--for-${template} menu--is-${width}`}>
          <Hr short />
          <Logo className="menu__logo" />
          <div className="rel clearfix rhythm--smallest">
            <BoxLink
              label={<Icon className="display-18" name="earth" />}
              url={data.social.websiteUrl}
            />
            <BoxLink
              label={<Icon className="display-18" name="instagram" />}
              url={data.social.instagramUrl}
            />
            <BoxLink
              label={<Icon className="display-18" name="facebook" />}
              url={data.social.facebookUrl}
            />
            <BoxLink
              label={<Icon className="display-18" name="twitter" />}
              url={data.social.twitterUrl}
            />
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default withScreen(withMenu(MainMenu));

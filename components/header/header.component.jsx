/**
 * header.component
 * 
 * gets sticky on scroll
 */
import { withMenuActions } from '../../store/burger-menu';
import { withScreenProps } from '../../store/screen';
import Bg from '../bg';
import Logo from '../logo';
import SiteTitle from '../site-title';
import MenuButton from '../menu-button';
import './header.component.scss';

export default withMenuActions(withScreenProps(({
  forSidebar,
  openMenu,
  scrollPos,
  stickyTitle,
  screenWidth,
}) => {
  const stickyPoint = screenWidth < 768 ? 20 : (forSidebar ? 20 : 500);
  const isSticky = scrollPos > stickyPoint;

  return (
    <header className={`header ${forSidebar ? 'header--for-sidebar' : ''} ${isSticky ? 'header--is-sticky' : ''}`}>
      <Bg className="header__bg fill bg-offwhite" />
      <div className="rel full-height wrapper">
        <div className="rel full-height">
          <MenuButton className="z2 header__menu-button" />
          <div className="rel z1 full-height header__content">
            <div className="rel header__content__left">
              <span className="ib rel index__menu__title copy-13 black">MENU</span>
              <span className="ib rel header__title__wrapper">
                <SiteTitle className="header__title" onClick={openMenu} />
                <h3 className="header--sticky__title display-16 truncate">{stickyTitle}</h3>
              </span>
            </div>
            <SiteTitle className="header--full__title" />
            <Logo className="header__logo is-hidden-mobile" />
          </div>
        </div>
      </div>
    </header>
  );
}));

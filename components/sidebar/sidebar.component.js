import Bg from '../bg';
import './sidebar.component.scss';

export default ({
  bgImgUrl,
  children,
}) => (
  <aside className="oh bb sidebar">
    <Bg
      className="fill sidebar__bg bg-offwhite"
      imgUrl={bgImgUrl}
    />
    <div className="rel wrapper sidebar__wrapper">
      <div className="rel sidebar__content">
        {children}
      </div>

      {/* TODO: put extra links here
      <div className="rel sidebar__subsidebar">
      </div> */}
    </div>

    <div className="sidebar__footer is-block-widescreen">
      <div className="rel wrapper footer__wrapper footer__left is-block-widescreen">
        <div className="footer__border footer__border--left" />
        <div className="rel clear">
          <p className="copy-13">Brought to you by <a className="link link--small" href="https://thercu.org" target="_blank">RCU Group Inc.</a></p>
        </div>
      </div>
    </div>
  </aside>
);

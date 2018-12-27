/**
 * components/footer
 * 
 * we use the class site-footer
 * because .footer is taken by bulma
 */
import data from '../data/index.json';
import '../styles/components/footer.scss';

export default () => (
  <footer className="oh clear site-footer z3">
    <div className="rel wrapper footer__wrapper footer__left">
      <div className="footer__border footer__border--left" />
      <div className="rel clear has-text-centered has-text-left-tablet">
        <p className="copy-13">Brought to you by <a className="link link--small" href="https://www.thercu.org" target="_blank">RCU Group Inc.</a></p>
      </div>
    </div>

    <div className="rel wrapper footer__wrapper footer__right">
      <div className="footer__border footer__border--right is-hidden-mobile" />
      <div className="clear has-text-centered has-text-right-tablet">
        <p className="copy-13">
          {/* TODO: about us page <a
            className="link link--small"
            href={data.social.linkedinUrl}
            target="_blank"
          >About Us</a> &nbsp; <span className="is-hidden-mobile">&mdash;</span> &nbsp; */}
          <a
            className="link link--small"
            href={data.social.email}
            target="_blank"
          >Contact Us</a> &nbsp; <span className="is-hidden-mobile">&mdash;</span> &nbsp;
          <a
            className="link link--small"
            href={data.social.facebookUrl}
            target="_blank"
          >Facebook</a> &nbsp; <span className="is-hidden-mobile">&mdash;</span> &nbsp;
          <a
            className="link link--small"
            href={data.social.twitterUrl}
            target="_blank"
          >Twitter</a> &nbsp; <span className="is-hidden-mobile">&mdash;</span> &nbsp;
          <a
            className="link link--small"
            href={data.social.instagramUrl}
            target="_blank"
          >Instagram</a>
        </p>
      </div>
    </div>
  </footer>
);

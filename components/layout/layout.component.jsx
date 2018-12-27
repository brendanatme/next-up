/**
 * components/layout
 * 
 * responsible for rendering all pages
 * IMPORTANT: be sure to wrap each page (files under pages/) in this component
 * 
 * on mobile and tablet:
 * - header on top
 * - main below
 * 
 * on everything above:
 * - header on left
 * - main on right
 */
import Head from 'next/head';
import data from '../../data/index.json';
import Footer from '../footer';
import Header from '../header';
import Menu from '../menu';
import Styles from '../styles';
import './layout.component.scss';

export default ({
  children,
  menuContent,
  menuTitle,
  provinceName,
  routeParams,
  seoTitle,
  sidebar,
  stickyTitle,
  template,
}) => (
  <div
    className={`layout layout--${template} ${sidebar ? 'layout--has-sidebar' : '' } bg-offwhite`}
    id="layout"
  >
    <Styles />
    
    <Head>
      <title>{seoTitle !== data.siteTitle ? `${seoTitle} - `: ''}{data.siteTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1.0, maximum-scale=1.0" key="viewport" />
      <meta name="description" content={`Learn about ${provinceName ? provinceName : 'Canada' }'s new impaired driving laws for alcohol and cannabis consumption.`} />
      <meta name="google-site-verification" content="ypQrjLvHbS7l0fLw83MGo4dQCrAikiA1cBdXhvcDM3Q" />
      <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
      <link rel="icon" type="image/x-icon" href="/static/images/rcu_logo.png" />
      <link href="https://fonts.googleapis.com/css?family=Barlow:400,500|Khula:700,800|Frank+Ruhl+Libre:900" rel="stylesheet" />
    </Head>
    
    <Menu
      bodyClassName="menu-is-open"
      className="menu"
      left={true}
      outerContainerId="layout"
      routeParams={routeParams}
      pageWrapId="stage"
      template={template}
      title={menuTitle}
    >
      {menuContent}
    </Menu>

    <div className="stage" id="stage">
      <Header
        forSidebar={!!sidebar}
        stickyTitle={stickyTitle}
      />

      {sidebar ? sidebar : ''}
      
      <main className="bb main">
        <div className="main__body">
          {children}
        </div>
        
        <Footer />
      </main>

    </div>
  </div>
);

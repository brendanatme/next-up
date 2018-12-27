/**
 * pages/index
 * 
 * controls home page at /
 * has a lot of parallax
 * 
 * TODO: implememnt gmaps satellite view
 * instead of SVG map
 */

/**
 * we need this defined in order to embed SVGS
 * (whereas we usally don't in a nextjs project)
 * see https://github.com/airbnb/babel-plugin-inline-react-svg/issues/50
 */
import React from 'react';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { withScreen } from '../store/screen';
import { Link } from '../routes';
import data from '../data/index.json';
import Bg from '../components/bg';
import Button from '../components/button';
import Hr from '../components/hr';
import Layout from '../components/layout';
import ScrollButton from '../components/scroll-button';
import SiteTitle from '../components/site-title';
import Map from '../svgs/canada-blank-map-v5.svg';
import '../styles/pages/index.scss';

const provinceKeys = Object.keys(data.provinces);

const SHORT_TITLE = 'Provincial Facts and Laws';
const LONG_TITLE = 'Impaired driving kills everyone’s buzz.';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.selectRef = React.createRef();
  }

  static async getInitialProps ({ query }) {
    return { routeParams: {} };
  }

  scrollToSelect = (e) => {
    e.preventDefault();

    this.props.scrollTo(this.selectRef.current.offsetTop);
  }

  render() {
    const endX = Math.round(this.props.screenWidth / (this.props.screenWidth < 1024 ? 16 : 8 ));
    const endScale = this.props.screenWidth < 1024 ? 0.5 : 0.55;
    const dark = this.props.screenWidth > 374 ? true : false;
    const quarterHeight = this.props.screenWidth / 4;

    return (
      <Layout
        menuTitle={SHORT_TITLE}
        routeParams={this.props.routeParams}
        stickyTitle={SHORT_TITLE}
        seoTitle={LONG_TITLE}
        template="index"
      >
        <div id="index-section-1" className="bb oh rel section-1 screenheight--tablet">
          <div className="fill is-fixed is-hidden-tablet z0">
            <Bg className="fill is-fixed" imgUrl="/static/images/canada-blank-map.svg" />
          </div>
              
          <div className="oh fill is-hidden-mobile z1">
            <Controller container="#screen">
              <Scene
                duration={this.props.screenHeight * 1.75}
                pin
                triggerHook={0}
              >
                {(progress) => (
                  <div className="fill">
                    <Tween
                      from={{
                        opacity: 0.5,
                        scale: 1,
                        x: 0,
                      }}
                      paused
                      to={{
                        opacity: 1.5,
                        scale: endScale,
                        x: `${endX}px`,
                      }}
                      totalProgress={progress}
                    >
                      <div className="map__wrapper fill--x2">
                        <div className="map fill">
                          <Map />
                          {/* <div className="fill map__labels is-hidden-mobile">
                            <div className="map__label copy-24 ab">AB</div>
                            <div className="map__label copy-24 bc">BC</div>
                            <div className="map__label copy-24 mb">MB</div>
                            <div className="map__label copy-24 nb">NB</div>
                            <div className="map__label copy-24 nl">NL</div>
                            <div className="map__label copy-24 nt">NT</div>
                            <div className="map__label copy-24 ns">NS</div>
                            <div className="map__label copy-24 nu">NU</div>
                            <div className="map__label copy-24 on">ON</div>
                            <div className="map__label copy-24 pe">PE</div>
                            <div className="map__label copy-24 qc">QC</div>
                            <div className="map__label copy-24 sk">SK</div>
                            <div className="map__label copy-24 yk">YK</div>
                          </div> */}
                        </div>
                      </div>
                    </Tween>
                  </div>
                )}
              </Scene>
            </Controller>
          </div>

          {/* hide map so it can't be clicked behind first section */}
          <div className="fill z2" style={{ pointerEvents: 'all' }} />

          <div className="vcenter--tablet fill--tablet">
            <div className="wrapper rel z2">
              <div className="container">
                <div className="columns">
                  <Controller container="#screen">
                    <Scene
                      duration={quarterHeight}
                      offset={-100}
                      triggerHook={0}
                    >
                      {(progress) => (
                        <div className="column">
                          <Tween
                            from={{ opacity: 1 }}
                            paused
                            to={{ opacity: 0 }}
                            totalProgress={progress}
                          >
                            <div className="section-1-content">
                              <SiteTitle large className="is-hidden-mobile rhythm" />
                              <h1 className="serif-60"><span className="is-hidden">{data.siteTitle} -</span>{LONG_TITLE}</h1>
                              <Hr />
                              <p className="copy-18">Below you’ll find the laws, limits, and consequences in each province.</p>
                              <p className="display-24">Know the facts. Know the laws. Learn the limits.</p> 
                              <p className="copy-18">Canada is the first G7 country to legalize cannabis federally, and this change will impact Canadian citizens in many ways.</p>
                              <p className="copy-18">Cannabis impairs your reaction time and decision accuracy. In 2017, there were more than 69,000 police-reported impaired-driving incidents - about 3,500 were related to drugs. #DontBeSorry</p>
                            </div>
                          </Tween>
                        </div>
                      )}
                    </Scene>
                  </Controller>
                </div>
              </div>
            </div>
          </div>
          
          <Controller container="#screen">
            <Scene
              classToggle="index__scroll-button--is-sticky"
              duration={this.props.screenHeight / 2}
              pin
              triggerHook={0}
            >
              {(progress) => (
                <div className="fill z3">
                  <Tween
                    from={{ opacity: 1 }}
                    paused
                    to={{ opacity: 0 }}
                    totalProgress={progress}
                  >
                    <div className="fill">
                      <ScrollButton
                        className="index__scroll-button is-hidden-mobile"
                        label="Scroll"
                        onClick={this.scrollToSelect}
                      />
                    </div>
                  </Tween>
                </div>
              )}
            </Scene>
          </Controller>
        </div>
    
        <div
          className="bb oh rel section-2 screenheight--tablet"
          ref={this.selectRef}
        >
          <div className="vcenter--tablet fill--tablet z1">
            <div className="wrapper">
              <div className="container">
                <Controller container="#screen">
                  <Scene
                    duration={quarterHeight}
                    offset={200}
                    triggerHook={1}
                  >
                    {(progress) => (
                      <div className="columns">
                        <Tween
                          from={{ opacity: 0 }}
                          paused
                          to={{ opacity: 1 }}
                          totalProgress={progress}
                        >
                          <div className="column is-half-tablet is-two-fifths-fullhd">
                            <div className="section-2-content">
                              <h2 className="serif-60">{SHORT_TITLE}</h2>
                              <Hr />
                              <p className="copy-21">We gathered and organized content from each province so that you can learn the rules and know the laws as you travel throughout the country.</p>
                              <p className="copy-21"><strong className="black">Select a Province to Start</strong></p>
                            </div>

                            <div className="is-hidden-tablet">
                              {provinceKeys.map((pk) => (
                                <div className="rhythm--tiny" key={pk}>
                                  <Link route={`/${pk}/impaired-driving-laws`}>
                                    <Button
                                      arrow
                                      dark={dark}
                                      label={data.provinces[pk].name}
                                      fullWidth
                                    />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Tween>
                      </div>
                    )}
                  </Scene>
                </Controller>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withScreen(IndexPage);

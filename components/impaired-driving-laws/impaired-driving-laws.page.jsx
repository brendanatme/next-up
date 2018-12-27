/**
 * impaired-driving-laws.component
 * 
 * this is a page
 * but we need a container
 * so we make the container the page
 */
import { Controller, Scene } from 'react-scrollmagic';
import Slider from 'react-slick';
import { withScreenProps } from '../../store/screen';
import Layout from '../layout';
import MenuContent from './impaired-driving-laws.menu';
import Penalty from './penalty';
import Selectors from './drivergroup-selectors';
import Sidebar from './impaired-driving-laws.sidebar';
import '../../styles/pages/impaired-driving-laws.scss';

const PAGE_TITLE = 'Impaired Driving Laws';

// style hack
const ONE_PX = { height: '1px' };

const sliderSettings = {
  /**
   * IMPORTANT! turning on this initialSlide setting
   * will cause our font bug to return
   * don't do it
   */
  // initialSlide: 1,
  
  /**
   * IMPORTANT! we need lazyLoad mode or else
   * react-slick does some horrible rendering bugs
   * in which it messes up our fonts
   * try it out for fun!
   */
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 99999,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        autoPlay: false,
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};

class ImpairedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.navSlider = React.createRef();
    this.offencesSlider = React.createRef();
    this.controller = React.createRef();
  }

  makeHandleBeforeChange = (ref) => (oldIndex, newIndex) => {
    ref.current.slickGoTo(newIndex);
  };

  componentDidMount() {
    /**
     * react-slick is a real piece of shit
     * make it go to the first slide
     */
    setTimeout(() => {
      this.navSlider.current.slickGoTo(1, true);
      this.offencesSlider.current.slickGoTo(1, true);
      
      setTimeout(() => {
        this.offencesSlider.current.slickGoTo(0, true);
      }, 200);
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.screenHeight !== this.props.screenHeight) {
      if (this.controller.current.state && this.controller.current.state.controller) {
        this.controller.current.state.controller.update();
      }
    }
  }

  render() {
    const {
      bg,
      code,
      dgChangeHandler,
      driverGroup,
      driverGroups,
      funFact,
      makeDgClickHandler,
      name,
      notSoFunFact,
      screenHeight,
      screenWidth,
      routeParams,
    } = this.props;
    const title = `${name} ${PAGE_TITLE}`;
    const stickyTitle = `${code} - ${PAGE_TITLE}`;

    const columnHeadingsOffset = screenWidth > 767
      ? (screenWidth > 1023 ? 128 : 138)
      : 95;

    return (
      <Layout
        menuContent={<MenuContent
          funFact={funFact}
          notSoFunFact={notSoFunFact}
          title={PAGE_TITLE}
        />}
        menuTitle={name}
        provinceName={name}
        routeParams={routeParams}
        stickyTitle={stickyTitle}
        seoTitle={title}
        sidebar={<Sidebar
          bgImgUrl={bg}
          funFact={funFact}
          name={name}
          notSoFunFact={notSoFunFact}
          title={PAGE_TITLE}
        />}
        template="impaired-driving-laws"
      >
        <div className={`bb rel page--impaired-driving-laws`}>
          <div style={ONE_PX} />
          <div className="wrapper main__wrapper z4">
            <Controller
              ref={this.controller}
              container="#screen"
            >
              <Scene
                classToggle={`desktop__header--is-sticky`}
                offset={(screenHeight / 2)}
                pin={screenWidth > 767 ? true : false}
              >
                <div className="desktop__header rel z3">
                  <h2 className="display-24-odd">{PAGE_TITLE}</h2>
                </div>
              </Scene>
            </Controller>
          </div>

          <div className="wrapper main__wrapper drivergroup-selectors__wrapper z4">
            <Selectors
              currentDriverGroup={driverGroup}
              driverGroups={driverGroups}
              dgChangeHandler={dgChangeHandler}
              makeDgClickHandler={makeDgClickHandler}
            />
          </div>

          <div className="wrapper main__wrapper rel z1">
            <p className="offence-desc gray">{driverGroups[driverGroup][0].desc}</p>
          </div>

          <div className="main__wrapper">
            <Controller container="#screen">
              <Scene
                classToggle={`offence-headings--is-sticky--${screenWidth}-${screenHeight}`}
                offset={(screenHeight / 2) - columnHeadingsOffset}
                pin
              >
                <div className="offence-headings wrapper--tablet bg-offwhite rel z3">
                  <div className="slider__wrapper--mobile">
                    <Slider
                      {...sliderSettings}
                      beforeChange={this.makeHandleBeforeChange(this.offencesSlider)}
                      ref={this.navSlider}
                    >
                      <div index={1} className="offence-heading">
                        <div className="wrapper--mobile oh offence-heading__inner">
                          <h4 className="rel">
                            <span className="rel offence-heading__text serif-32-small">1st Offence</span>
                          </h4>
                        </div>
                      </div>

                      <div index={2} className="offence-heading">
                        <div className="wrapper--mobile oh offence-heading__inner">
                          <h4 className="rel">
                            <span className="rel offence-heading__text serif-32-small">2nd Offence</span>
                          </h4>
                        </div>
                      </div>

                      <div index={3} className="offence-heading">
                        <div className="wrapper--mobile oh offence-heading__inner">
                          <h4 className="rel">
                            <span className="rel offence-heading__text offence-heading__text--no-line serif-32-small">3rd Offence</span>
                          </h4>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </Scene>
            </Controller>
          </div>

          <div className="main__wrapper">
            <div className="slider__wrapper--mobile wrapper--tablet rel z1">
              <Slider
                {...sliderSettings}
                beforeChange={this.makeHandleBeforeChange(this.navSlider)}
                ref={this.offencesSlider}
              >
                {driverGroups[driverGroup][0].offences.map((off, ii) => (
                  <div index={ii + 1} key={ii} className="offence__slide">
                    <div className="wrapper--mobile offence__padding">
                      <div className="box">
                        {off.map((penalty, i) => (
                          <Penalty
                            key={i}
                            province={routeParams.province}
                            {...penalty}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withScreenProps(ImpairedScreen);

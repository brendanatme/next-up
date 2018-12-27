/**
 * impaired-driving-laws container
 * this controls the page at /:province/impaired-driving-laws
 * see components/impaired-driving-laws for more
 */
import ImpairedDrivingLaws from '../components/impaired-driving-laws';
import { withAllDriverGroups } from '../store/driver-groups';
import data from '../data/index.json';

class ImpairedDrivingLawsContainer extends React.Component {
  static async getInitialProps ({ query }) {
    return { routeParams: { province: query.province } };
  }

  /**
   * try to fix react-slick font bug
   */
  componentDidMount() {
    this.props.setDriverGroup('all-drivers');
  }

  makeDgClickHandler = (group) => (e) => {
    e.preventDefault();

    this.props.setDriverGroup(group);
  };

  dgChangeHandler = (e) => {
    this.props.setDriverGroup(e.target.value);
  };

  render () {
    const { driverGroup, routeParams: { province } } = this.props;
    const { bg, code, funFact, name, notSoFunFact, driverGroups } = data.provinces[province];

    return (
      <ImpairedDrivingLaws
        bg={bg}
        code={code}
        dgChangeHandler={this.dgChangeHandler}
        driverGroup={driverGroup}
        driverGroups={driverGroups}
        funFact={funFact}
        makeDgClickHandler={this.makeDgClickHandler}
        name={name}
        notSoFunFact={notSoFunFact}
        routeParams={this.props.routeParams}
      />
    );
  }
}

export default withAllDriverGroups(ImpairedDrivingLawsContainer);

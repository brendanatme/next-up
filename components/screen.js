/**
 * components/screen
 * 
 * listens to window events to pass onto redux
 * so we can easily access
 * and store in a performant manner
 */
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import { setScreenRef, withScreenActions } from '../store/screen';

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
    }

    setScreenRef(this.ref.current);

    this.ref.current.addEventListener('scroll', throttle(() => {
      this.props.setScreenVals({ scrollPos: this.ref.current.scrollTop });
    }, 500));

    window.addEventListener('resize', debounce(() => {
      this.props.setScreenVals({
        screenHeight: window.document.documentElement.clientHeight,
        screenWidth: window.document.documentElement.clientWidth,
      });
    }, 200));

    this.props.setScreenVals({
      screenHeight: window.document.documentElement.clientHeight,
      screenWidth: window.document.documentElement.clientWidth,
    });
  }

  render() {
    return (
      <div id="screen" className="screen" ref={this.ref}>
        {this.props.children}
      </div>
    );
  }
}

export default withScreenActions(Screen);

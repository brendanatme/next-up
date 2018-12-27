import Icon from '../icon';
import './penalty.scss';

const fontSizes = {
  s: 'display-18',
  m: 'display-36',
  l: 'display-48',
  xl: 'display-72',
};

/**
 * PenaltyValue
 * 
 * parse the value for multiple possibilities
 * since we want to change the font size
 * and format fines (eg. $500) differently
 */
class PenaltyValue extends React.PureComponent {
  render() {
    const {
      province,
      value,
    } = this.props;
    const len = value.length;
    let val = value;
    let fontSize = fontSizes.s;
      
    // determine font size
    if (val === 'N/A' || !val) {
      fontSize = fontSizes.m;
    } else if (len < 5) {
      fontSize = fontSizes.xl;
    } else if (len < 8) {
      fontSize = fontSizes.l;
    } else if (len < 20) {
      fontSize = fontSizes.m;
    } else {
      fontSize = fontSizes.s;
    }
  
    // determine if we're splitting out $ in <sup> tag
    let $ = '';
    if (val.indexOf('$') === 0) {
      $ = val.substring(0, 1);
      val = val.substring(1);
    }
  
    return (
      <div className={`accent1-${province} ${fontSize}`}>
        {$ && (<sup>{$}</sup>)}
        {val}
      </div>
    );
  }
}

export default class Penalty extends React.PureComponent {
  render() {
    const {
      icon,
      label,
      province,
      unit,
      value,
    } = this.props;

    return (
      <div className="rel penalty">
        <div className="penalty__field has-text-centered">
          <Icon className={`display-24`} name={icon} />
          <div className="copy-13-medium">{label}</div>
          <PenaltyValue province={province} value={value} />
          <div className={`display-18 accent1-${province}`}>{unit}</div>
        </div>
      </div>
    );
  }
}

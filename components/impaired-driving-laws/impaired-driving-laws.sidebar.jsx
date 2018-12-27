/**
 * impaired-driving-laws.sidebar
 */
import Hr from '../hr';
import Sidebar from '../sidebar';

export default ({
  bgImgUrl,
  funFact,
  name,
  notSoFunFact,
  title,
}) => (
  <Sidebar bgImgUrl={bgImgUrl}>
    <div className="rel rhythm impaired-driving-laws__sidebar">
      <h1>
        <div className="serif-42-odd">{name}</div>
        <Hr />
        <div className="display-24-odd">{title}</div>
      </h1>

      <div className="rhythm">
        <h4 className="display-18 black">What You Should Know</h4>
        {funFact && (<p className="black"><strong className="black">Fun Fact:</strong> {funFact}</p>)}
        {notSoFunFact && (<p className="black"><strong className="black">Not-So-Fun Fact:</strong> {notSoFunFact}</p>)}
      </div>
    </div>
  </Sidebar>
);

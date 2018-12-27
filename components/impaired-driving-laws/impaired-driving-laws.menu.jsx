export default ({
  funFact,
  notSoFunFact,
  title,
}) => (
  <div>
    <div className="display-24 black">{title}</div>
    <div className="rhythm">
      <h4 className="display-18 black">What You Should Know</h4>
      {funFact && (<p className="black"><strong className="black">Fun Fact:</strong> {funFact}</p>)}
      {notSoFunFact && (<p className="black"><strong className="black">Not-So-Fun Fact:</strong> {notSoFunFact}</p>)}
    </div>
  </div>
);

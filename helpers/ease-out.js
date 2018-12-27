/**
 * ease-out
 * 
 * for when we want to imperatively animate a scroll on our screen container
 * because we're not using window.scrollTo
 * because we need to wrap our site in a scroll container
 * for mobile compatibility
 */
import raf from 'raf';

const Easing = {
  easeIn(n) {
    return n - (n / 8);
  },
  easeOut(n) {
    return n + (n / 8);
  },
};

/**
 * easeOut 
 *
 * @param {number} startVal 
 * @param {number} endVal 
 * @param {Function} cb 
 */
export const easeOut = (startVal, endVal, cb) => {
  // setup 
  let currentVal = startVal;
  let incrementer = .01;

  // recurring function
  const recur = () => {
    incrementer = Easing.easeOut(incrementer);
    currentVal += (1 / incrementer);
    
    if (currentVal < endVal) {
      cb(currentVal);
      raf(recur);
    }
  };

  recur();
};

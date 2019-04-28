const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(max * Math.random()),
  
    duplicate: (numberSet) => {
      return numberSet.reduce((preValue, current, index, array) => {
        return preValue.concat([current, current])
      },[]);
    },
  };

  export default utils;
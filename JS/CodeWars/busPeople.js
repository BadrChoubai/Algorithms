const number = busStops => {
  let gotOn = 0;
  let gotOff = 0;
  for (let i = 0; i < busStops.length; i++) {
    gotOn+=busStops[i][0]/*?*/;
    gotOff+=busStops[i][1]/*?*/;
  }
  return gotOn - gotOff

};

number(([[10,0],[3,5],[5,8]]))/*?*/;
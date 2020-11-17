'use strict';

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  it ('the plane lands', function(){
    expect(plane.land).not.toBeUndefined();
  });

  it ('plane lands at airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it ('plane takes off', function(){
    plane.land(airport);
    plane.takeOff()
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});

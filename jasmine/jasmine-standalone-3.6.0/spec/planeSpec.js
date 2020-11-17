'use strict';

describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });
  it ('the plane lands', function(){
    expect(plane.land).not.toBeUndefined();
  });
});

describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function(){
   plane = new Plane();
   airport = jasmine.createSpyObj('airport',['clearForLanding']);
  })
  it ('plane lands at airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);

  });

})

'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane')
    // plane ['land'] ??
  });

  it ('has a space for landing', function(){
    expect(airport.planes()).toEqual([]);
  });

  it ('plane now has plane in hangar aka planes()', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it ('plane takes off, no more plane', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([])

  });


});
































// describe ("Airport", function(){
//   it("there should be an airport", function() {
//     airport = new Airport;
//     expect(airport).toEqual(jasmine.any(Airport));
//   });
//
//   it("should be empty when first created", function() {
//     airport = new Airport;
//     expect(airport.hanger).toEqual([]);
//   });
//
//     it("should contain a plane object after landing", function() {
//       airport = new Airport("London");
//       plane = new Plane("b222");
//       airport.land(plane);
//       expect(airport.hanger.length).toEqual(1);
//       });
//
//       it("you are able to land the plane", function() {
//           plane = new Plane("A232");
//           airport = new Airport("London");
//           airport.land(plane);
//           expect(plane.flying).toEqual(false);
//
//       });
//
//       it("you are able to fly the plane", function() {
//           plane = new Plane("A232");
//           airport = new Airport("London");
//           airport.land(plane);
//           airport.takeOff(plane);
//           expect(plane.flying).toEqual(true);
//
//       });
// });

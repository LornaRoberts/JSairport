describe ("Airport", function(){
  it("there should be an airport", function() {
    airport = new Airport;
    expect(airport).toEqual(jasmine.any(Airport));
    });
});

describe ("Plane", function(){
  it("you should be able to create new planes", function() {
    plane = new Plane;
    expect(plane).toEqual(jasmine.any(Plane));
});

});

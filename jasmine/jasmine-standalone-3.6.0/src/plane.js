class Plane {
  constructor(){
    this._location;
  }
  land(airport){
    this._location = airport;
    airport.clearForLanding(this);
  };

  takeOff(){
    console.log(this._location)
    this._location.clearForTakeOff();
  };
};

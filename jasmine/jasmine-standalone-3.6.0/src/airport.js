class Airport {
  constructor(name){
    this.name = name;
    this.capacity = 10;
    this.hanger = [];
  }

  land(plane){
    this.hanger.push(plane);
  }

  takeOff(plane){
    this.hanger.pop(plane);
  }
}

class Plane {
  constructor(name){
    this.name = name;
  }

 flying(){
   var inAir;
   if (airport.hanger.indexOf(this) === -1){
     inAir = true;
   }else{
  inAir = false;
   }
   return inAir;
 }

}

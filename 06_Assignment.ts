interface INewFeacture {
  gps?: boolean;
}

abstract class Car implements INewFeacture {
  Wheel(): string {
    return "4 Wheeler";
  }
  checkAC(): string {
    return "Ac is available";
  }
  callFacility(): string {
    return `call facility supported`;
  }

  abstract Price(): number;
  abstract getTotalSeats(): number;
  abstract Color(): string;
  gps?: boolean;
}

class Toyata extends Car {
  getTotalSeats(): number {
    return 5;
  }
  Color(): string {
    return "white";
  }
  Price(): number {
    return 1000000;
  }
}

class Hundyai extends Car {
  Price(): number {
    return 900000;
  }
  getTotalSeats(): number {
    return 7;
  }
  Color(): string {
    return "gray";
  }
  gps = true;
}

var hundyai=new Hundyai()
var toyata=new Toyata();
console.log(hundyai);
console.log(toyata);

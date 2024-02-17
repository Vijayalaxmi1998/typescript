abstract class Cars {

    Wheel(){
      return '4 wheeler';
    }

    CheckAC() {
      return 'AC is available';
    }

    CallFacility() {
      return 'Call Facility supported';
    }

    abstract Price(): number; // declaration

    abstract Color(): string;

    abstract TotalSeats(): number;

}


class Hundai extends Cars {
  Price(): number {
      
      return 1000000; // implementation
  }
  Color(): string {
     return 'Gray';
  }
  TotalSeats(): number {
     return 5;
  }

}


class Toyota extends Cars {
  Price(): number {
     return 1500000;
  }
  Color(): string {
      return 'White';
  }
  TotalSeats(): number {
      return 7;
  }

}


var objToyata = new Toyota();

console.log('Toyota', objToyata.TotalSeats());


var objHundai = new Hundai();

console.log('Hundai',objHundai.TotalSeats());
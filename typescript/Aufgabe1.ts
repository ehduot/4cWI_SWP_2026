
interface Airplane {
  model: string;
  passengerCapacity: number;
  rangeInKm: number;
  isJet?: boolean;
};

const fleet: Airplane[] = [
  {
    model: "Airbus A350-900",
    passengerCapacity: 325,
    rangeInKm: 15000,
    isJet: true
  },
  {
    model: "Gulfstream G650",
    passengerCapacity: 19,
    rangeInKm: 13890,
    isJet: true
  }
];

function printAirplaneInfo(plane: Airplane): void {
  console.log("--------------------------------------------------");
  console.log(`Model: ${plane.model}`);
  console.log(`Passenger Capacity: ${plane.passengerCapacity}`);
  console.log(`Range: ${plane.rangeInKm} km`);
  console.log(
    `Engine Type: ${plane.isJet ? "Jet" : "Turboprop/Propeller"}`
  );
  console.log("--------------------------------------------------");
}

// Alle Flugzeuge ausgeben
fleet.forEach(printAirplaneInfo);

// MAP: Modellnamen in ein neues Array schreiben
const models: string[] = fleet.map(plane => plane.model);
console.log("Aircraft Models:", models);

// FILTER: Flugzeuge mit mehr als 10.000 km Reichweite
const longRangeFleet: Airplane[] = fleet.filter(
  plane => plane.rangeInKm > 10000
);

console.log("Long Range Aircraft:");
longRangeFleet.forEach(printAirplaneInfo);

export { };

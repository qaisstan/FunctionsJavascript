import fetch from "node-fetch";

const createFlightEntry = (flight, from, status, ...args) => {
  console.log(args);

  const row = document.createElement("tr");
  if (args.length > 0) {
    const color = args[0];
    row.style.color = color;
  }

  const flightCol = document.createElement("td");
  flightCol.innerText = flight;

  const fromCol = document.createElement("td");
  fromCol.innerText = from;

  const statusCol = document.createElement("td");
  statusCol.innerText = status;

  row.appendChild(flightCol);
  row.appendChild(fromCol);
  row.appendChild(statusCol);

  const parent = document.getElementById("arrivalList");
  parent.appendChild(row);
};

const getFlights = () => {
  return fetch("flight-summary.json");
};

getFlights()
  .then((res) => res.json())
  .then((data) => {
    data.forEach((f) => {
      getFlightDetails(f.flight).then((details) => {
        createFlightEntry(f.flight, f.from, details.status);
      });
    });
  });

  
const getFlightDetails = (flightNumber) => {
  return fetch("flight-details.json")
    .then((res) => res.json())
    .then((data) => data.find((f) => f.flight === flightNumber));
};

const displayTime = () => {
  const time = new Date().toLocaleTimeString();
  document.getElementById("time").innerText = time;
};

displayTime();
setInterval(() => {
  displayTime();
}, 1 * 1000);

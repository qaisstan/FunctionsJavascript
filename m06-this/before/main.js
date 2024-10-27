let boeng747 = {
  make: "Boeing 747",
  capacity: 450,

  print() {
    console.log(this);
  },
};
boeng747.print();

function alertPassanger(name) {
  console.log(`${name}: ${this.message}`);
}

const presentToGatreWarning = {
  message: "Please present to boarding gate 3",
  priority: 1,
};

alertPassanger(presentToGatreWarning, "Qais Stanikzai");

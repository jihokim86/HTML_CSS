let car = {
    name: "tesla",
    color: ["red", "blue", "green"],
  };
  
  console.log(Object.getOwnPropertyDescriptor(car, "name"));
  console.log(Object.getOwnPropertyDescriptor(car, "color"));
  console.log(Object.getOwnPropertyDescriptor(car, "nothing"));
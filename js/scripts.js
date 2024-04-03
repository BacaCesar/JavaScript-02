const isAdult = (nameA, age) => {
  if (age <= 18) {
    console.log('Hola ' + nameA + ' , eres mayor de edad');
  } else {
    console.log('Hola ' + nameA + ' , eres menor de edad');
  }
};
isAdult('Oscar', 23);

const biggerNumber = (numberA, numberB) => {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
};
biggerNumber(1, 5);

const whatIsTheValue = numberA => {
  if (numberA < 0) {
    console.log('negative');
  } else if (numberA > 0) {
    console.log('positive');
  } else if (numberA === 0) {
    console.log('cero');
  }
};
whatIsTheValue(12);

const treeNotes = (numberA, numberB, numberC) => {
  const media = (numberA + numberB + numberC) / 3;
  if (media <= 5) {
    console.log('Suspenso');
  } else if (media >= 6 && media <= 8) {
    console.log('Aprobado');
  } else if (media >= 9) {
    console.log('Matricula de honor');
  }
};
treeNotes(3, 9, 9);

const theBigNumber = (numberA, numberB, numberC) => {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA);
  } else if (numberB > numberA && numberB > numberC) {
    console.log(numberB);
  } else if (numberC > numberA && numberC > numberB) {
    console.log(numberC);
  }
};
theBigNumber(9, 7, 5);

const numberDivisible = numberA => {
  if (numberA % 3 === 0 && numberA % 5 === 0) {
    console.log('Es divisible por 3 y por 5');
  } else if (numberA % 5 === 0) {
    console.log('Es divisible por 5');
  } else if (numberA % 3 === 0) {
    console.log('Es divisible por 3');
  }
};
numberDivisible(15);

const addNumbers = (numberA, numberB) => {
  if (typeof numberA === 'string') {
    numberA = Number(numberA);
  }
  if (typeof numberB === 'string') {
    numberB = Number(numberB);
  }
  console.log(numberA + numberB);
};
addNumbers('3', '9');

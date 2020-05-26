// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  document.querySelector('#year').appendChild(option);
}

const getCars = () => [
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: 'Blanco',
    transmision: 'automatico'
  },
  { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: 'Rojo',
    transmision: 'automatico'
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual'
  },
  { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual'
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: 'Azul',
    transmision: 'automatico'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico'
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

const dataSearch = {
  marca: '',
  modelo: '',
  transmision: '',
  minimo: '',
  maximo: '',
  year: '',
  puertas: '',
  color: ''
};

const cars = getCars();

// Functions
const showCars = (cars) => {
  cleanHTML();
  const container = document.querySelector('#resultado');
  cars.forEach(car => {
    const carHTML = document.createElement('p');
    carHTML.innerHTML = `
        <p>${car.marca} ${car.modelo} - ${car.year} - ${car.puertas} puertas 
        - Transmisión: ${car.transmision} - Precio: $ ${car.precio} - Color: ${car.color}</p>
        `;
    container.appendChild(carHTML);
  });
}

const cleanHTML = () => {
  const container = document.querySelector('#resultado');
  while (container.firstChild) container.removeChild(container.firstChild);
}

const notResults = () => {
  cleanHTML();
  const notResult = document.createElement('div');
  notResult.classList.add('alerta', 'error');
  notResult.appendChild(document.createTextNode('No hay resultados'));
  document.querySelector('#resultado').appendChild(notResult);
}

const carFilter = () => {
  const result = getCars().filter(filterMark).filter(filterYear)
    .filter(filterPriceMin).filter(filterPriceMax).filter(filterDoors)
    .filter(filterTransmition).filter(filterColor);
  // console.log(result);
  if (result.length) {
    showCars(result);
  } else {
    // alert('No hay resultados!');
    notResults();
  }
}

const filterMark = (car) => {
  if (dataSearch.marca) {
    return car.marca === dataSearch.marca;
  } else {
    return car;
  }
}

const filterYear = (car) => {
  if (dataSearch.year) {
    return car.year === dataSearch.year;
  } else {
    return car;
  }
}

const filterPriceMin = (car) => {
  if (dataSearch.minimo) {
    return car.precio >= dataSearch.minimo;
  } else {
    return car;
  }
}

const filterPriceMax = (car) => {
  if (dataSearch.maximo) {
    return car.precio <= dataSearch.maximo;
  } else {
    return car;
  }
}

const filterDoors = (car) => {
  if (dataSearch.puertas) {
    return car.puertas === dataSearch.puertas;
  } else {
    return car;
  }
}

const filterTransmition = (car) => {
  if (dataSearch.transmision) {
    return car.transmision === dataSearch.transmision;
  } else {
    return car;
  }
}

const filterColor = (car) => {
  if (dataSearch.color) {
    return car.color === dataSearch.color;
  } else {
    return car;
  }
}

// Event listenner 
window.addEventListener('load', () => {
  showCars(cars);
})

// // Event listenner para el formulario
const marca = document.querySelector('#marca');

marca.addEventListener('input', (e) => {
  dataSearch.marca = e.target.value;
  carFilter();
});

const year = document.querySelector('#year');

year.addEventListener('input', (e) => {
  dataSearch.year = Number(e.target.value);
  carFilter();
});

const priceMin = document.querySelector('#minimo');

priceMin.addEventListener('input', (e) => {
  dataSearch.minimo = Number(e.target.value);
  carFilter();
})

const priceMax = document.querySelector('#maximo');

priceMax.addEventListener('input', (e) => {
  dataSearch.maximo = Number(e.target.value);
  carFilter();
})

const doors = document.querySelector('#puertas');

doors.addEventListener('input', (e) => {
  dataSearch.puertas = Number(e.target.value);
  carFilter();
})

const transmition = document.querySelector('#transmision');

transmition.addEventListener('input', (e) => {
  dataSearch.transmision = e.target.value;
  carFilter();
})

const color = document.querySelector('#color');

color.addEventListener('input', (e) => {
  dataSearch.color = e.target.value;
  carFilter();
})
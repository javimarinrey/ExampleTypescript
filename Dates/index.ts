// Obtenemos la fecha actual y la guardamos en la variable f
const f1 = new Date();
console.log(f1);

// Obtenemos la fecha 30 de Enero de 2018, a las 23h 30m 14seg
const f2 = new Date("2018/01/30 23:30:14");
console.log(f2);

// Obtenemos la fecha del juicio final a partir de un timestamp o Tiempo UNIX
console.log(new Date(872817240000));

// Creamos una fecha pasando cada uno de sus componentes numéricos*
const y = 2022;
const m = 6;
const d = 17;
const h = 22;
const min = 30;
const s = 0;
const ms = 0;
console.log(new Date(y, m, d, h, min, s, ms));

/* Tiempo en UNIX */
// Estas tres operaciones son equivalentes
const f3 = Date.now();
const f4 = +new Date();
const f5 = new Date().getTime();
console.log(f3);
console.log(f4);
console.log(f5);
// Estas tres operaciones son equivalentes
const f6 = Date.parse("2018/10/30");
const f7 = +new Date("2018/10/30");
const f8 = new Date("2018/10/30").getTime();
console.log(f6);
console.log(f7);
console.log(f8);

/* Métodos */
const f9 = new Date("2018/01/30 15:30:10.999");

f9.getDay(); // 2 (Martes)
f9.getDate(); // 30
f9.getMonth(); // 0 (Enero)
f9.getFullYear(); // 2018
f9.getHours(); // 15
f9.getMinutes(); // 30
f9.getSeconds(); // 10
f9.getMilliseconds(); // 999
f9.getTimezoneOffset(); // 0
f9.getTime(); // 1517326210999 (Tiempo Unix)

const f10 = new Date("2018/01/30 15:30:10.999");

f10.setDate(15); // Cambia a 15/01/2018 15:30:10.999 (Devuelve 1516030210999)
f10.setMonth(1); // Cambia a 15/02/2018 15:30:10.999 (Devuelve 1518708610999)
f10.setFullYear(2020); // Cambia a 15/02/2020 15:30:10.999 (Devuelve 1581780610999)
f10.setHours(21); // Cambia a 15/02/2020 21:30:10.999 (Devuelve 1581802210999)
f10.setMinutes(0); // Cambia a 15/02/2020 21:00:10.999 (Devuelve 1581800410999)
f10.setSeconds(3); // Cambia a 15/02/2020 21:00:03.999 (Devuelve 1581800403999)
f10.setMilliseconds(79); // Cambia a 15/02/2020 21:00:03.079 (Devuelve 1581800403079)
f10.setTime(872817240000); // Cambia a 29/08/1997 02:14:00.000 (Devuelve 872817240000)


/* Representación de fechas */
const f11 = new Date();
console.log(f11.toDateString());
console.log(f11.toLocaleDateString());
console.log(f11.toTimeString());
console.log(f11.toLocaleTimeString());
console.log(f11.toISOString());
console.log(f11.toJSON());
console.log(f11.toUTCString());
import { readable } from 'svelte/store';

// Vamos a usar readable, esto nos servira por si ya no tan solo queremos almacenar el valor en un estado global,
// si no leer algo de manera autómatica, hacer un contador o cronometro que tenga una fecha de inicio y final

// Haremos uso del readable. esta recibe un argumento que puede ser null o undefined, y un callback que ejecuta una función de inicio y retorna una de final

export const time = readable(null, function start(set) {
  let dateFinish = new Date();
  dateFinish.setHours(22, 0, 0);

  let intervalCronometer = setInterval(() => {
    let dateDiff = getDateDiff(new Date(), dateFinish);
    let dateFormat = dateDiff
      .toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      .split(':');
    set(dateFormat);
  }, 1000);

  return function stop() {
    console.log('stop');
    clearInterval(intervalCronometer);
  };
});

// Custom store
export function cronometer(dateFinish) {
  return readable(null, function start(set) {
    let intervalCronometer = setInterval(() => {
      let dateDiff = getDateDiff(new Date(), dateFinish);
      let dateFormat = dateDiff
        .toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
        .split(':');
      set(dateFormat);
    }, 1000);
    return function stop() {
      clearInterval(intervalCronometer);
    };
  });
}

function getDateDiff(startDate, endDate) {
  const msInHour = 1000 * 60 * 60; // 3600000 milisegundos
  const msInMinute = 1000 * 60; // 60000 milisegundos
  const msInSecond = 1000; // 1s es igual 1000ms

  let diffMs = endDate - startDate; // milliseconds between now & Christmas
  let diffDays = Math.floor(diffMs / 86400000); // days
  let diffHrs = Math.floor((diffMs % 86400000) / msInHour); // hours
  let diffMins = Math.round(((diffMs % 86400000) % msInHour) / msInMinute); // minutes
  let diffSec = Math.round(((diffMs % 86400000) % msInMinute) / msInSecond); // seconds

  let date = new Date();
  date.setDate(diffDays);
  date.setHours(diffHrs);
  date.setMinutes(diffMins);
  date.setSeconds(diffSec);

  const object_date = {
    diffDays,
    diffHrs,
    diffMins,
    diffSec,
  };

  return date;
}

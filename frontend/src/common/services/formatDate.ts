const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'aout',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
];

export const formatDate = (timestamp: number) => {
  const ts = new Date(timestamp);

  const year = ts.getFullYear();
  const month = ts.getMonth();
  let day = ts.getDate();
  let hour = ts.getHours();
  let minute = ts.getMinutes();

  const dayString: string = day < 10 ? `0${day}` : `${day}`
  const hourString: string = hour < 10 ? `0${hour}` : `${hour}`
  const minuteString: string = minute < 10 ? `0${minute}` : `${minute}`

  return `le ${dayString} ${months[month]} ${year} - ${hourString}:${minuteString}`;
};
export const showOnlyHour = (timestamp: number) => {
  const ts = new Date(timestamp);
  let hour = ts.getHours();
  let minute = ts.getMinutes();
  const hourString: string = hour < 10 ? `0${hour}` : `${hour}`
  const minuteString: string = minute < 10 ? `0${minute}` : `${minute}`
  return `${hourString}:${minuteString}`;
};

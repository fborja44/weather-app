export const getCurrentDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const dateOfMonth = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  return `${dateOfMonth} ${monthName}, ${dayOfWeek}`;
};

export const getDayOfWeek = (unixTime) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(unixTime * 1000); // Convert Unix time to milliseconds

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const dayOfMonth = date.getUTCDate();

  return `${dayOfWeek}, ${month}, ${dayOfMonth}`;
};

export const parseUnixTime = (unixTimestamp, timezone) => {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  const options = { hour: "2-digit", hour12: true, timeZone: timezone };
  return date.toLocaleString("en-US", options);
};

export const parseUnixTimeFull = (unixTimestamp, timezone) => {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  // Get hours, minutes, and AM/PM indicator from the date object
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set it to 12

  // Add leading zeros to minutes if necessary
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Format the time string as H:MM AM/PM
  return timeString = hours + ':' + minutes + ' ' + ampm;
}

export const getCurrentHour = () => {
  const date = new Date();
  const hour = date.getHours(); // Get the current hour (0-23)
  return hour;
};

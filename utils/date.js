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

export const parseUnixTime = (unixTime) => {
  const date = new Date(unixTime * 1000); // Convert Unix timestamp to milliseconds
  const hours = ("0" + date.getHours()).slice(-2); // Get the hours in 2-digit format
  const minutes = ("0" + date.getMinutes()).slice(-2); // Get the minutes in 2-digit format
  return hours + ":" + minutes;
};

export const getCurrentHour = () => {
  const date = new Date();
  const hour = date.getHours(); // Get the current hour (0-23)
  return hour;
};

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
  // Set the timezone
  const options = { timeZone: timezone };

  // Get the formatted time string with timezone
  const timeString = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    ...options,
  });

  return timeString;
};

export const getCurrentHour = (timezone) => {
  const date = new Date();

  // Set the timezone
  const options = { timeZone: timezone, hour12: false };

  // Get the current hour from the date with timezone
  const hour = date.toLocaleString("en-US", {
    hour: "numeric",
    ...options,
  });

  return parseInt(hour, 10); // Return the hour as an integer
};

export const getHourTimezone = (unixTimestamp, timezone) => {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds

  // Set the timezone
  const options = { timeZone: timezone, hour12: false };

  // Get the hour from the date with timezone
  const hour = date.toLocaleString("en-US", {
    hour: "numeric",
    ...options,
  });

  return parseInt(hour, 10); // Return the hour as an integer (0-23)
};

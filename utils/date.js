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

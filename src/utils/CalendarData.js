export const months = [
  { name: "January", value: 0 },
  { name: "February", value: 1 },
  { name: "March", value: 2 },
  { name: "April", value: 3 },
  { name: "May", value: 4 },
  { name: "June", value: 5 },
  { name: "July", value: 6 },
  { name: "August", value: 7 },
  { name: "September", value: 8 },
  { name: "October", value: 9 },
  { name: "November", value: 10 },
  { name: "December", value: 11 },
];

export const daysOfWeekShort = [
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
  "SUN",
];

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const years = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() - 5 + i
);

export const getDaysInMonth = (month, year) => {
  const days = [];
  const date = new Date(year, month, 1);

  // Calculate the starting position
  const firstDayOfWeek = (date.getDay() + 6) % 7; // Adjust Sunday (0) to be last

  // Add null placeholders for days before the start of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  // Populate days in the current month
  while (date.getMonth() === month) {
    days.push(new Date(date)); // Push the current day
    date.setDate(date.getDate() + 1); // Move to the next day
  }

  return days;
};

export const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber); // Set the month (0-indexed)
  return date.toLocaleString("default", { month: "long" }); // Get month name
};

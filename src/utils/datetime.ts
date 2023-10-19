const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Creates an array of `numTimestamps` random unix timestamps, sorted in descending order.
 * @param initialTimestamp The timestamp to use as the starting point for the random timestamps.
 * @param numTimestamps The number of timestamps to generate.
 * @returns An array of `numTimestamps` random unix timestamps, sorted in descending order.
 */
export const generateRandomUnixTimestamps = (initialTimestamp: number, numTimestamps: number) => {
  const threeMonthsInSeconds = 3 * 30 * 24 * 60 * 60;
  const timestamps: number[] = [];

  for (let i = 0; i < numTimestamps; i++) {
    const randomOffset = Math.floor(Math.random() * threeMonthsInSeconds); // Random offset within 3 months
    const randomTimestamp = initialTimestamp - randomOffset;
    timestamps.push(randomTimestamp);
  }

  timestamps.sort((a, b) => b - a);

  return timestamps;
};

/**
 * Convert a 10 digit unix time stamp to relative time.
 */
export const convertUnixTimestampToRelativeTime = (timestamp: number): string => {
  const now = new Date();
  const messageDate = new Date(timestamp * 1000);

  // Check if the message date is today
  if (
    messageDate.getDate() === now.getDate() &&
    messageDate.getMonth() === now.getMonth() &&
    messageDate.getFullYear() === now.getFullYear()
  ) {
    // Format as "HH:mm A" (e.g., "7:54 PM")
    const hours = messageDate.getHours();
    const minutes = messageDate.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? '12' : (hours % 12).toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  }

  // Check if the message date is yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (
    messageDate.getDate() === yesterday.getDate() &&
    messageDate.getMonth() === yesterday.getMonth() &&
    messageDate.getFullYear() === yesterday.getFullYear()
  ) {
    return 'Yesterday';
  }

  // Check if the message date is within the last week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (now.getTime() - messageDate.getTime() <= 7 * 24 * 60 * 60 * 1000) {
    return daysOfWeek[messageDate.getDay()];
  }

  // If none of the above conditions are met, format as "DD/MM/YY" (e.g., "19/10/23")
  const formattedMonth = (messageDate.getMonth() + 1).toString().padStart(2, '0');
  const formattedDay = messageDate.getDate().toString().padStart(2, '0');
  const formattedYear = messageDate.getFullYear().toString().slice(-2);
  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
};

/**
 * Format a 10 digits unit time stamp to the following format: `18 Oct 2023`
 */
export const formatUnixTimestampToDate = (timestamp: number, separator: string = ' • '): string => {
  const messageDate = new Date(timestamp * 1000);
  const formattedDay = messageDate.getDate().toString().padStart(2, '0');
  const formattedYear = messageDate.getFullYear().toString().slice(-2);
  return `${formattedDay} ${MONTHS_SHORT[messageDate.getMonth()]} ${formattedYear}`;
};

/**
 * Format a 10 digits unit time stamp to the following format: `November 14, 2023 • 9:54 PM`
 */
export const formatUnixTimestampToFullTime = (timestamp: number, separator: string = ' • '): string => {
  const messageDate = new Date(timestamp * 1000);

  // Format date in "Month Day, Year • HH:mm AM/PM" format
  const formattedDate = `${MONTHS[messageDate.getMonth()]} ${messageDate.getDate()}, ${messageDate.getFullYear()}`;
  const formattedTime = messageDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return `${formattedDate}${separator}${formattedTime}`;
};

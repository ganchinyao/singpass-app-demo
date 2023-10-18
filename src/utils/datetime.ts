/**
 * Creates an array of `numTimestamps` random unix timestamps, sorted in descending order.
 * @param initialTimestamp The timestamp to use as the starting point for the random timestamps.
 * @param numTimestamps The number of timestamps to generate.
 * @returns An array of `numTimestamps` random unix timestamps, sorted in descending order.
 */
export const generateRandomUnixTimestamps = (initialTimestamp: number, numTimestamps: number) => {
  const sixMonthsInSeconds = 6 * 30 * 24 * 60 * 60;
  const timestamps: number[] = [];

  for (let i = 0; i < numTimestamps; i++) {
    const randomOffset = Math.floor(Math.random() * sixMonthsInSeconds); // Random offset within 6 months
    const randomTimestamp = initialTimestamp - randomOffset;
    timestamps.push(randomTimestamp);
  }

  timestamps.sort((a, b) => b - a);

  return timestamps;
};

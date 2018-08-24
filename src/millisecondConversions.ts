export function convertDaysToMilliseconds(days: number) {
  return days * 24 * 60 * 60 * 1000;
}

export function convertHoursToMilliseconds(hours: number) {
  return hours * 60 * 60 * 1000;
}

export function convertMinutesToMilliseconds(minutes: number) {
  return minutes * 60 * 1000;
}

export function convertSecondsToMilliseconds(seconds: number) {
  return seconds * 1000;
}

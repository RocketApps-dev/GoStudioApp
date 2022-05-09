export const getCurrentDateFormated = () => {
  return new Date()
    .toISOString()
    .replace(
      /^(?<year>\d+)-(?<month>\d+)-(?<day>\d+)T.*$/,
      '$<year>-$<month>-$<day>',
    );
};

export const averagePercentage = (average: number): string => {
  return (
    Math.round(
      Number(
        average?.toString()?.replace(".", "").slice(0, 2) +
        "." +
        average?.toString()?.replace(".", "")?.slice(3)
      )
    ) + "%"
  );
};

export const toHoursAndMinutes = (totalMinutes: number) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours}h ${minutes}m`;
};

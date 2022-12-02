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

export const mockGetBodyWeight = async (): Promise<
  { month: string; bodyWeight: number; bodyFat: number }[]
> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { month: "6月", bodyWeight: 100, bodyFat: 100 },
          { month: "7月", bodyWeight: 95, bodyFat: 96 },
          { month: "8月", bodyWeight: 80, bodyFat: 85 },
          { month: "9月", bodyWeight: 78, bodyFat: 80 },
          { month: "10月", bodyWeight: 70, bodyFat: 75 },
          { month: "11月", bodyWeight: 68, bodyFat: 72 },
          { month: "12月", bodyWeight: 65, bodyFat: 78 },
          { month: "1月", bodyWeight: 63, bodyFat: 70 },
          { month: "2月", bodyWeight: 60, bodyFat: 68 },
          { month: "3月", bodyWeight: 50, bodyFat: 66 },
          { month: "4月", bodyWeight: 48, bodyFat: 65 },
          { month: "5月", bodyWeight: 45, bodyFat: 67 },
        ]),
      1000
    );
  });
};

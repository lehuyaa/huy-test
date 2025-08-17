export const mockGetAchievementRate = async (
  date: string
): Promise<{ date: string; achievementRate: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ date, achievementRate: 25 });
    }, 1000);
  });
};

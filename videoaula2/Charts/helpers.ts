import { Game } from './types';
import { RecordItem } from '../Records/types';

export const buildBarSeries = (games: Game[], records: RecordItem[]) => {
  const mappedGames = games.map(game => {
    const filteredGames = records.filter(item => {
      return item.gameTitle === game.title && item.gamePlatform === game.platform
    });

    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length
    }
    
  });

  const sortedGames = mappedGames.sort((a, b) => {
    return b.y - a.y;
  });

  return sortedGames.slice(0, 8);
};

export const getPlatformChartData = (records: RecordItem[]) => {
  const platforms = ["PC", "PLAYSTATION", "XBOX"];

  const series = platforms.map(platform => {
    const filtedGames = records.filter(item => {
      return platform === item.gamePlatform;
    })

    return filtedGames.length;
  });

  return {
    labels: platforms,
    series,
  };
};

export const getGenderChartData = (records: RecordItem[]) => {
   const genderByAmount = records.reduce((accumulator, currentValue) => {
     if (accumulator[currentValue.genreName] !== undefined) {
       accumulator[currentValue.genreName] += 1;
     } else {
      accumulator[currentValue.genreName] = 0;
     }

     return accumulator;
   }, {} as Record<string, number>);

   const labels = Object.keys(genderByAmount);
   const series = Object.values(genderByAmount);

  return {
    labels,
    series
  };
};

import { Exercise } from "./../entities/exercise.entity";

interface exerciseSet {
  index: number;
  kg: number;
  count: number;
  check: number;
}

export class HistoryOfMonthDto {
  historyObject: { [key: string]: { name: string; set: exerciseSet[] }[] } = {};

  constructor(historyList: Exercise[]) {
    historyList.map((history) => {
      if (!this.historyObject.hasOwnProperty(history.date)) {
        this.historyObject[`${history.date}`] = [];
      }

      const set: exerciseSet[] = [];
      history.exerciseString.split("|").map((setString, index) => {
        const [kg, count, check] = setString.split("/").map((element) => Number(element));
        set.push({ index: index + 1, kg, count, check });
      });

      this.historyObject[`${history.date}`].push({
        name: history.exerciseName,
        set: set,
      });
    });
  }
}

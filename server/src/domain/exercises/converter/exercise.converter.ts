import { exerciseSet } from "@type/domain";
import { Exercise } from "../entities/exercise.entity";

export const exerciseConverter = {
  dateList: (dateObject: { date: string }[]) => {
    const result: string[] = [];
    dateObject.map((item) => {
      result.push(item.date);
    });
    return result;
  },

  historyOfMonth: (historyList: Exercise[]) => {
    const historyObject: { [key: string]: { name: string; set: exerciseSet[] }[] } = {};
    historyList.map((history) => {
      if (!historyObject.hasOwnProperty(history.date)) {
        historyObject[`${history.date}`] = [];
      }
      const set: exerciseSet[] = [];
      history.exerciseString.split("|").map((setString, index) => {
        const [kg, count, check] = setString.split("/").map((element) => Number(element));
        set.push({ index: index + 1, kg, count, check });
      });
      historyObject[`${history.date}`].push({
        name: history.exerciseName,
        set: set,
      });
    });
    return historyObject;
  },

  totalVolume: (exerciseList: Exercise[]) => {
    let totalVolume: number = 0;
    exerciseList.map((item) => {
      item.exerciseString.split("|").map((innerItem) => {
        const [kg, count, check] = innerItem.split("/");
        totalVolume += Number(check) * Number(kg) * Number(count);
      });
    });
    return totalVolume;
  },
};

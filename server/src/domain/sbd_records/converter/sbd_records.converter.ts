import { recordItem } from "@type/domain";
import { SBD_record } from "../entities/sbd_record.entity";

export const recordConverter = {
  everyRecord: (recordList: SBD_record[]) => {
    const recordObject: { index: number; record: recordItem }[] = [];
    recordList.map((record, index) => {
      recordObject.push({
        index: index + 1,
        record: {
          squat: record.squat,
          deadlift: record.deadlift,
          benchpress: record.benchpress,
          SBD_sum: record.SBD_sum,
          userWeight: record.userWeight,
        },
      });
    });
    return recordObject;
  },

  bestRecord: (record: SBD_record) => {
    const bestRecord = {
      squat: record.squat,
      deadlift: record.deadlift,
      benchpress: record.benchpress,
      SBD_sum: record.SBD_sum,
    };
    return bestRecord;
  },
};

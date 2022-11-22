import { SBD_record } from "../entities/sbd_record.entity";

export class EveryRecordDto {
  recordObject: { index: number; record: SBD_record }[] = [];

  constructor(recordList: SBD_record[]) {
    recordList.map((record, index) => {
      this.recordObject.push({
        index: index + 1,
        record: { ...record },
      });
    });
  }
}

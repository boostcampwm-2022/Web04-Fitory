export class EveryDateDto {
  dateList: string[] = [];

  constructor(dateObject: { date: string }[]) {
    dateObject.map((item) => {
      this.dateList.push(item.date);
    });
  }
}

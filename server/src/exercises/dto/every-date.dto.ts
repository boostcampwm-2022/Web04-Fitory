export class EveryDateDto {
  dateList: string[] = [];

  constructor(dateObject: { date: string }[]) {
    dateObject.map((item) => {
      this.dateList.push(item.date);
    });
    this.dateList.sort((a, b) => {
      return Number(a) - Number(b);
    });
  }
}

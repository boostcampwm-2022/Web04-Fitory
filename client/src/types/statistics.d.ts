import { UserWeight, UserGender } from "./user";

export interface WeightClassStatisticsRequest {
  range: number;
  weight: UserWeight;
  gender: UserGender;
}

export interface WeightClassStatisticsItem {
  x_start: number;
  x_end: number;
  y: number;
}

export interface WeightClassStatisticsResponse {
  min: number;
  max: number;
  responseData: WeightClassStatisticsItem[];
}

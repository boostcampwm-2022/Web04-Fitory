import HttpClient from "src/services/HttpClient";
import * as StatisticsType from "src/types/statistics";

const StatisticsAPI = {
  getWeightClassStatistics: async (
    weightClassStatisticsRequest: StatisticsType.WeightClassStatisticsRequest,
  ) => {
    const path = "statistics/everyData";
    const response = await HttpClient.get(path, weightClassStatisticsRequest);
    return response.response as StatisticsType.WeightClassStatisticsResponse;
  },
};

export default StatisticsAPI;

import { toast } from "react-toastify";
import { error } from "@constants/message";
import HttpClient from "src/services/HttpClient";
import * as StatisticsType from "src/types/statistics";

const StatisticsAPI = {
  getWeightClassStatistics: async (
    weightClassStatisticsRequest: StatisticsType.WeightClassStatisticsRequest,
  ) => {
    try {
      const path = "statistics/everyData";
      const response = await HttpClient.get(path, weightClassStatisticsRequest);
      return response.response as StatisticsType.WeightClassStatisticsResponse;
    } catch {
      toast.error(error.GET_WEIGHT_CLASS_STATISTICS);
      return null;
    }
  },
};

export default StatisticsAPI;

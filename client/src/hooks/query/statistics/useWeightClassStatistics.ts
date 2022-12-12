import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import StatisticsAPI from "@api/StatisticsAPI";
import { WeightClassStatisticsRequest, WeightClassStatisticsResponse } from "src/types/statistics";

const useWeightClassStatistics = (weightClassStatisticsRequest: WeightClassStatisticsRequest) => {
  const { data } = useQuery(QueryKey.WEIGHT_CLASS_STATISTICS, () =>
    StatisticsAPI.getWeightClassStatistics(weightClassStatisticsRequest),
  );

  let { responseData } = data as WeightClassStatisticsResponse;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  responseData = responseData.sort((a, b) => a.x_start - b.x_start);

  return { weightClassStatistics: data as WeightClassStatisticsResponse };
};

export default useWeightClassStatistics;

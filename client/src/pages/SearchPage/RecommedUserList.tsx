import React from "react";
import CardsScroller from "@components/design/CardsScroller";
import Paper from "@components/design/Paper";
import useRecommendUserList from "@hooks/query/user/useRecommendUserList";
import RecommendUserCard from "@components/RecommendUserCard";
import { SearchedUserInfo } from "src/types/user";
import * as s from "./styles";

const RecommendUserList = ({ userList }: { userList: SearchedUserInfo[] }) => {
  return userList.length ? (
    <CardsScroller>
      {userList.map((user: SearchedUserInfo) => (
        <Paper key={user.user_id} style={{ padding: "10px", backgroundColor: "transparent" }}>
          <RecommendUserCard user={user} />
        </Paper>
      ))}
    </CardsScroller>
  ) : (
    <s.Notice>* 나와 비슷한 친구가 없습니다.</s.Notice>
  );
};

const RecommendUserListContainer = () => {
  const { recommendList } = useRecommendUserList();

  return (
    <s.RecommendListContainer>
      <s.RecommendItem>
        <s.RecommendLabel>나와 비슷한 체급</s.RecommendLabel>
        <RecommendUserList userList={recommendList.recommendWeight} />
      </s.RecommendItem>
      <s.RecommendItem>
        <s.RecommendLabel>나와 비슷한 나이</s.RecommendLabel>
        <RecommendUserList userList={recommendList.recommendAge} />
      </s.RecommendItem>
    </s.RecommendListContainer>
  );
};

export default RecommendUserListContainer;

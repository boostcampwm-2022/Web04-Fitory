import React from "react";
import { Link } from "react-router-dom";
import CardsScroller from "@components/design/CardsScroller";
import Paper from "@components/design/Paper";
import defaultImg from "@public/images/img_default_profile.png";
import useRecommendUserList from "@hooks/query/user/useRecommendUserList";
import { DEFAULT_IMAGE_SRC } from "@constants/consts";
import { SearchedUserInfo } from "src/types/user";
import * as s from "./styles";

const RecommedUserList = ({ userList }: { userList: SearchedUserInfo[] }) => {
  return userList.length ? (
    <CardsScroller>
      {userList.map((user: SearchedUserInfo) => (
        <Paper key={user.user_id} style={{ backgroundColor: "transparent" }}>
          <Link to={`/profile/${user.user_id}`} style={{ width: "100px", height: "100px" }}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "fill" }}
              src={user.profile_image === DEFAULT_IMAGE_SRC ? defaultImg : user.profile_image}
              alt="유저 프로필 사진"
            />
          </Link>
        </Paper>
      ))}
    </CardsScroller>
  ) : (
    <s.Notice>* 나와 비슷한 친구가 없습니다.</s.Notice>
  );
};

const RecommandUserListContianer = () => {
  const { recommendList } = useRecommendUserList();

  return (
    <s.RecommendListContainer>
      <s.RecommendItem>
        <s.RecommendLabel>나와 비슷한 체급</s.RecommendLabel>
        <RecommedUserList userList={recommendList.recommendWeight} />
      </s.RecommendItem>
      <s.RecommendItem>
        <s.RecommendLabel>나와 비슷한 나이</s.RecommendLabel>
        <RecommedUserList userList={recommendList.recommendAge} />
      </s.RecommendItem>
    </s.RecommendListContainer>
  );
};

export default RecommandUserListContianer;

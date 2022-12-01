import React, { useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import { SearchedUserInfo } from "../../types/user";

const FollowPage = () => {
  const [userList, setUserList] = useState<SearchedUserInfo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  return <PageTemplate />;
};

export default FollowPage;

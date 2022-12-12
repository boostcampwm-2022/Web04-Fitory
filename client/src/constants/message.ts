export const error = {
  // Challenge
  GET_CHALLENGE_INFO: "챌린지 기록 요청에 실패하였습니다.",
  GET_DATE_INFO: "서버 시간 요청에 실패하였습니다.",
  SUBMIT_CHALLENGE: "올바르지 않은 입력입니다.",

  // Exercise
  GET_EXERCISE_INFO: "운동 정보 요청에 실패하였습니다.",
  GET_ROUTINE_LIST: "루틴 리스트 요청에 실패하였습니다.",
  GET_SINGLE_ROUTINE: "루틴 불러오기 요청에 실패하였습니다.",
  GET_EXERCISE_HISTORY: "운동 기록 요청에 실패하였습니다.",
  RECORD_EXERCISE: "운동 이름과 횟수가 모두 채워져 있는지 확인해주세요.",
  SAVE_ROUTINE_EMPTY: "운동 이름과 루틴 이름이 모두 채워져 있는지 확인해주세요.",
  SAVE_ROUTINE_DUPLICATE: "이미 존재하는 루틴 이름입니다.",
  DELETE_ROUTINE: "루틴 삭제에 실패하였습니다.",

  // Follow
  FOLLOW: "팔로우 요청에 실패하였습니다.",
  UNFOLLOW: "팔로우 취소에 실패하였습니다.",

  // Statistics
  GET_WEIGHT_CLASS_STATISTICS: "내 체급 통계 요청에 실패하였습니다.",

  // User
  LOGIN: "로그인에 실패하였습니다.",
  JOIN: "회원가입에 실패하였습니다.",
  LOGOUT: "로그아웃에 실패하였습니다.",
  GET_USER: "사용자 정보 요청에 실패하였습니다.",
  GET_USER_LIST: "사용자 리스트 요청에 실패하였습니다.",
  GET_FOLLOWER: "팔로워 리스트 요청에 실패하였습니다.",
  GET_FOLLOWING: "팔로잉 리스트 요청에 실패하였습니다.",
  GET_RECOMMAND_USER_LIST: "추천 사용자 리스트 요청에 실패하였습니다.",
  CHECK_USER_NAME: "이미 존재하는 사용자 이름입니다.",
  UPDATE_USER: "프로필 수정에 실패하였습니다.",

  // Notification
  GET_NOTIFICATION_COUNT: "알림 수 요청에 실패하였습니다.",
  GET_NOTIFICATION_LIST: "알림 내역 요청에 실패하였습니다.",
} as const;

export const success = {
  RECORD_EXERCISE: "오늘의 운동 완료!",
  SAVE_ROUTINE: "루틴 저장이 완료되었습니다!",
  JOIN: "Fitory 회원이 되신 것을 환영합니다!",
} as const;

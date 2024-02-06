// 오늘 날짜와 시간을 함수로 만들기
function timeForToday(datetime) {
  const today = new Date();
  const date = new Date(datetime);
  //현재시간과 특정날짜사이의 시간간격(분단위)을 계산하기
  let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

  if (gap < 1) {
    return "방금 전";
  }

  if (gap < 60) {
    return `${gap}분 전`;
  }

  gap = Math.floor(gap / 60);

  if (gap < 24) {
    return `${gap}시간전`;
  }

  gap = Math.floor(gap / 24);

  if (gap < 32) {
    return `${gap}일 전`;
  }

  gap = Math.floor(gap / 31);

  if (gap < 13) {
    return `${gap}개월 전`;
  }

  gap = Math.floor(gap / 12);

  return `${gap}년 전`;
}

console.log(timeForToday("2020-05-25 09:50:00"));

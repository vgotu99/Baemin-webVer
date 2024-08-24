# 배달의민족 웹 버전 - 첫 개인 프로젝트 <br/> <br/> 🔗ㅤhttps://baemin-webver.vercel.app/


## 프로젝트 진행 동기
- 평소 학습만을 하던 스스로를 시험해보기 위함과 단순히 따라치는 클론 코딩은 하기 싫었기에 UI UX 기능구현 등 모든 것을 최대한 혼자서 진행해보기 위함
- PC를 자주 사용하는 사용자로써 자취생 시절 배달의민족이 모바일기기만을 위한 어플 밖에 없어 아쉽다는 마음에 제작해봤습니다.

## 기술 스택
- Frontend: React.js
- 상태 관리: React Hooks
- 스타일링: CSS
- 배포: Vercel

## 주요 기능
  ### [ Home ]
- 사용자 인증 (로그인 / 회원가입)
- 원하는 가게명 및 메뉴명 검색
- 원하는 카테고리의 가게 확인 가능
- 찜한 가게 확인 가능
### [ Store ]
- 가게 찜하기
- 가게 리뷰 확인 가능
- 장바구니에 메뉴 담기
### [ Cart ]
- 장바구니에 담은 메뉴들 주문
### [ Profile ]
- 최근 주문내역 확인
- 주문내역 조회 및 리뷰 작성 기능
- 찜한 가게 내역 조회
- 내가 작성한 리뷰 조회
- 로그아웃

## 아쉬운 점
- 브라우저의 localStorage에 데이터를 저장하다보니 타 사용자의 리뷰를 확인하지 못하고 향후 업데이트에 한계가 생겼다.
- UI UX적으로 부족한 점이 너무 많다고 생각된다. 이는 개인적으로 참여중인 오픈채팅방 인원들의 피드백을 통해 최대한 반영하여 수정해보았다. 하지만 여전히 디테일적으로 아쉬운 부분이 너무 많이 보인다.

## 향후 계획
- 이벤트 이미지 삽입 및 쿠폰 적용 기능
- 리뷰 평점 기능
- 주문시 금액별 배달팁 적용
- 최소주문금액 활성화
- 주소 관리 기능
- DB 연결 후 가게 등록 기능 추가, 리뷰 내역 연동하여 사용자간의 연동 확장

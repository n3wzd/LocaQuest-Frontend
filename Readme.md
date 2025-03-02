# LocaQuest - Frontend
> 사용자가 실시간으로 자신의 활동을 추적하고, 게임화된 요소를 통해 참여를 유도하며, 실시간으로 데이터를 처리하고 시각화합니다.

## Features
### 1. 지도 UI
- **현재 위치 표시**: 사용자의 현재 위치를 지도에 표시합니다.
- **이동 거리 계산**: 사용자의 GPS 위치 데이터를 기반으로 이동 거리를 계산하여 표시합니다.
- **걸음 수 추적**: 모바일 센서 기능을 활용하여 사용자의 실시간 걸음 수를 집계하고 UI에 표시합니다.

### 2. 게임화된 UI (Gamification)
- **경험치 시스템**: 사용자가 활동하면 경험치가 제공되고, 이를 기반으로 레벨이 올라갑니다. 이를 UI에 시각적으로 표현합니다.
- **도전 과제 시스템**: 사용자가 일정 조건을 달성하면 도전 과제를 완료하게 되고, 이를 목록으로 보여줍니다.
- **경험치 바**: 사용자의 경험치 진행 상황을 시각적으로 나타내는 경험치 바를 표시합니다.
- **레벨 표시**: 사용자가 현재 레벨을 확인할 수 있도록 레벨을 UI에 표시합니다.
- **도전 과제 아이콘**: 달성한 도전 과제를 아이콘 형태로 표시하여 사용자의 참여를 유도합니다.

### 3. 통계 시각화
- **차트**: 사용자의 걸음수, 이동 거리, 경험치 등 다양한 활동 데이터를 차트나 그래프 형태로 시각화합니다.
- **날짜별 통계**: 날짜별로 활동 데이터를 구분하여 제공하고, 사용자가 쉽게 비교할 수 있도록 합니다.

### 4. 실시간 데이터 처리
- **WebSocket 통신**: 클라이언트와 서버 간 실시간 데이터를 주고받기 위해 WebSocket을 활용합니다.
- **실시간 피드백 제공**: 사용자 활동에 따라 실시간으로 피드백을 제공하여 즉각적인 반응을 보여줍니다.
- **UI 업데이트**: 실시간 데이터에 따라 UI가 즉시 업데이트되어 사용자에게 최신 정보를 반영합니다.

### 5. 사용자 프로필 관리
- **회원 가입 및 로그인**: 사용자가 계정을 생성하고 로그인할 수 있는 기능을 제공합니다.
- **프로필 사진 업로드**: 사용자가 자신의 프로필 사진을 업로드할 수 있습니다.
- **기본 정보 수정**: 사용자가 이름, 이메일 등 기본 정보를 수정할 수 있습니다.

### 6. 인증 및 보안
- **OAuth 2.0 인증**: 사용자 인증을 위해 OAuth 2.0과 JWT를 활용하여 보안성을 높입니다.
- **이메일 인증**: 회원 가입 시 이메일 인증을 요구하여 계정 보안을 강화합니다.

## Stack
- **React Native**
- **Typescript**
- **SQLite**

## Structure
```
src/
 ├── api/         # 서버 API 요청
 ├── app/         # 페이지 단위 컴포넌트
 ├── components/  # 재사용 가능한 UI 컴포넌트
 ├── config/      # 상수 및 설정값
 ├── libs/        # 외부 라이브러리 래퍼
 ├── hooks/       # 커스텀 훅
 ├── services/    # 비즈니스 로직
 ├── store/       # 전역 상태 관리
 ├── styles/      # 공통 스타일링 관리
 ├── types/       # 타입 정의
 └── utils/       # 정적 유틸리티 함수
assets/           # 이미지 등 리소스 파일
```

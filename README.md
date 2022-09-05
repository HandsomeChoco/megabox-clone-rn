# megabox-clone-rn
리액트 네이티브로 메가박스 앱 클론하기 (상업용 프로젝트가 아님!)

# Run Project

1. yarn install
 => 종속성 설치

2. yarn react-native-vector-image generate
 => svg, img 등 정적 파일 생성 
 * 정적 파일 변경이 생길때마다 실행해줘야하며, 기존의 정적파일에 변경이 생긴 경우 `--reset-cache=true` 옵션을 붙여 정적파일을 재생성.

3. npx react-native start
 => metro 시작.

4. npx react-native run-android || npx react-native run-ios
 => 아이폰은 run-ios, 안드로이드는 run-android


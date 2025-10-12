# 🧹 React Native 안전한 캐시 정리 및 기동 가이드

## 📋 완전한 캐시 정리 순서

### 1단계: 실행 중인 프로세스 종료
```bash
# Metro 서버 종료 (Ctrl+C 또는)
taskkill /F /IM node.exe

# Android 에뮬레이터 확인 (종료하지 말고 유지)
adb devices
```

### 2단계: JavaScript 캐시 정리
```bash
# Metro 캐시 정리
npx react-native start --reset-cache --port 8081

# 즉시 종료 (Ctrl+C)
# 이는 캐시만 정리하고 서버는 나중에 시작
```

### 3단계: npm 캐시 정리
```bash
# npm 캐시 검증 및 정리
npm cache verify
npm cache clean --force
```

### 4단계: Android 캐시 정리
```bash
# Gradle 캐시 정리
cd android
.\gradlew clean
.\gradlew cleanBuildCache  # 추가 캐시 정리
cd ..
```

### 5단계: Node.js 의존성 정리 (필요시)
```bash
# node_modules 완전 재설치 (문제가 있을 때만)
rm -rf node_modules  # 또는 폴더 수동 삭제
rm package-lock.json  # 또는 yarn.lock
npm install
```

### 6단계: 시스템 임시 파일 정리 (선택사항)
```bash
# Windows 임시 파일 정리
# 수동으로 다음 폴더들 정리:
# %TEMP%\metro-*
# %TEMP%\react-native-*
# %TEMP%\haste-map-*
```

## 🚀 안전한 기동 순서

### 방법 1: 표준 기동 (권장)
```bash
# 1단계: Metro 서버 시작 (터미널 1)
npx react-native start --reset-cache

# 2단계: 서버 준비 대기
# "Dev server ready" 메시지 확인

# 3단계: 앱 빌드 및 실행 (터미널 2)
npm run android
```

### 방법 2: 단일 명령어 기동
```bash
# 한 번에 실행 (Metro 서버 자동 시작)
npm run android

# 장점: 간단함
# 단점: 캐시 문제 시 디버깅 어려움
```

### 방법 3: 수동 제어 기동
```bash
# 1단계: Metro 서버만 시작
npx react-native start --reset-cache

# 2단계: 별도 터미널에서 Android 빌드만
cd android
.\gradlew installDebug
cd ..

# 3단계: 앱 시작
adb shell am start -n com.[PROJECT_NAME]/.MainActivity
```

## 🔧 문제 발생 시 단계별 해결

### Level 1: 가벼운 정리
```bash
# Metro 재시작만
npx react-native start --reset-cache
```

### Level 2: 중간 정리
```bash
# Metro + Android 캐시 정리
npx react-native start --reset-cache
cd android && .\gradlew clean && cd ..
npm run android
```

### Level 3: 강력한 정리
```bash
# 모든 캐시 정리
taskkill /F /IM node.exe
npm cache clean --force
cd android && .\gradlew clean && cd ..
rm -rf node_modules
npm install
npx react-native start --reset-cache
```

### Level 4: 완전 초기화 (최후 수단)
```bash
# 프로젝트 완전 초기화
git clean -fdx  # Git 사용 시
# 또는 프로젝트 폴더 삭제 후 git clone
npm install
cd android && .\gradlew clean && cd ..
npx react-native start --reset-cache
```

## ⚠️ 주의사항

### 하지 말아야 할 것들:
- ❌ 에뮬레이터 실행 중에 강제 종료
- ❌ Metro 서버 실행 중에 node_modules 삭제
- ❌ 빌드 중에 Android Studio 종료
- ❌ 캐시 정리 중에 다른 React Native 프로젝트 실행

### 안전한 작업 순서:
- ✅ 항상 Metro 서버 먼저 종료
- ✅ 에뮬레이터는 유지하고 앱만 종료
- ✅ 캐시 정리 후 충분한 대기 시간
- ✅ 단계별로 진행하며 각 단계 완료 확인

## 📊 성능 최적화 팁

### 개발 중 빠른 재시작:
```bash
# 코드 변경 시 (Hot Reload 활용)
# 파일 저장만 하면 자동 반영

# 패키지 추가/제거 시
npm install
cd android && .\gradlew clean && cd ..
# Metro 서버 재시작 필요
```

### 정기적인 유지보수:
```bash
# 주 1회 권장
npm cache clean --force
cd android && .\gradlew clean && cd ..

# 월 1회 권장  
rm -rf node_modules && npm install
```

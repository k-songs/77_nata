# 🔄 React Native 프로젝트 전환 체크리스트

## 1. 프로젝트별 설정 확인

### A. JDK 버전 확인
```bash
# 프로젝트의 React Native 버전 확인
npx react-native --version

# 필요한 JDK 버전 확인
# RN 0.76+: JDK 17+
# RN 0.75-: JDK 11+
```

### B. gradle.properties 수정
```properties
# android/gradle.properties
# JDK 경로 설정 (프로젝트별로 다를 수 있음)
org.gradle.java.home=C:\\Users\\[USERNAME]\\.gradle\\jdks\\[JDK_VERSION]

# New Architecture 설정 확인
newArchEnabled=false  # 또는 true (프로젝트에 따라)

# Hermes 설정 확인
hermesEnabled=true    # 또는 false (프로젝트에 따라)
```

### C. 패키지 의존성 확인
```bash
# package.json의 React Native 버전과 의존성 확인
cat package.json | grep "react-native"

# 호환되지 않는 패키지 확인
npm ls react-native-gesture-handler
npm ls @react-navigation/stack
```

## 2. 환경 변수 설정

### A. JAVA_HOME 확인
```bash
# 현재 JAVA_HOME 확인
echo $env:JAVA_HOME  # PowerShell
echo %JAVA_HOME%     # CMD

# 필요시 임시 변경
$env:JAVA_HOME = "C:\Users\[USERNAME]\.gradle\jdks\[JDK_VERSION]"
```

### B. ANDROID_HOME 확인
```bash
# Android SDK 경로 확인
echo $env:ANDROID_HOME
```

## 3. 프로젝트별 설정 파일

### A. app.json
```json
{
  "name": "[PROJECT_NAME]",
  "displayName": "[DISPLAY_NAME]"
}
```

### B. MainActivity.kt
```kotlin
override fun getMainComponentName(): String = "[PROJECT_NAME]"
```

### C. index.js
```javascript
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
```

## 4. 캐시 정리 (프로젝트 전환 시)

```bash
# 1. Metro 캐시 정리
npx react-native start --reset-cache

# 2. npm 캐시 정리
npm cache clean --force

# 3. Android 캐시 정리
cd android
.\gradlew clean
cd ..

# 4. node_modules 재설치 (필요시)
rm -rf node_modules
npm install
```

# 🆕 새 React Native 프로젝트 JDK 설정 가이드

## 방법 1: 프로젝트별 JDK 설정 (권장)

### A. 프로젝트 생성 후 즉시 설정
```bash
# 1. 새 프로젝트 생성
npx @react-native-community/cli@latest init MyNewProject

# 2. 프로젝트 디렉토리로 이동
cd MyNewProject

# 3. gradle.properties 수정
```

### B. android/gradle.properties 수정
```properties
# 기존 내용 유지하고 추가
org.gradle.java.home=C:\\Users\\[USERNAME]\\.gradle\\jdks\\eclipse_adoptium-17-amd64-windows.2
```

### C. JDK 경로 찾기
```bash
# 설치된 JDK 경로 확인
# 1. Android Studio JDK
dir "C:\Program Files\Android\Android Studio\jbr"

# 2. Gradle JDK
dir "C:\Users\[USERNAME]\.gradle\jdks"

# 3. 시스템 JDK
dir "C:\Program Files\Java"

# 4. 현재 JAVA_HOME
echo $env:JAVA_HOME
```

## 방법 2: 전역 JDK 설정

### A. 환경변수 설정
```bash
# PowerShell에서 영구 설정
[Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Users\[USERNAME]\.gradle\jdks\eclipse_adoptium-17-amd64-windows.2", "User")

# 또는 시스템 설정에서 수동 설정
# 제어판 > 시스템 > 고급 시스템 설정 > 환경 변수
```

## 방법 3: Android Studio 통합 설정

### A. Android Studio에서 JDK 설정
```
File > Settings > Build, Execution, Deployment > Build Tools > Gradle
- Gradle JVM: 원하는 JDK 버전 선택
```

### B. 프로젝트별 JDK 오버라이드
```properties
# android/gradle.properties
org.gradle.java.home=[ANDROID_STUDIO_JDK_PATH]
```

## JDK 버전별 경로 예시

### Eclipse Adoptium (권장)
```
C:\Users\[USERNAME]\.gradle\jdks\eclipse_adoptium-17-amd64-windows.2
C:\Users\[USERNAME]\.gradle\jdks\eclipse_adoptium-21-amd64-windows.2
```

### Oracle JDK
```
C:\Program Files\Java\jdk-17
C:\Program Files\Java\jdk-21
```

### Android Studio JDR
```
C:\Program Files\Android\Android Studio\jbr
```

## 설정 검증

### A. JDK 버전 확인
```bash
# 프로젝트 디렉토리에서
cd android
.\gradlew --version

# Java 버전이 올바른지 확인
```

### B. React Native Doctor 실행
```bash
npx react-native doctor
# JDK 항목이 ✓로 표시되는지 확인
```

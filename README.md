# 🖥️ 내 컴퓨터의 하드웨어 스펙을 한번에 알아보는 서비스 MySpec

<br>

<div align="center">

![myspec정보불러오기](https://github.com/user-attachments/assets/0c4fc23c-6441-4b18-aff0-024437a397b1)


![myspec그외페이지](https://github.com/user-attachments/assets/bf61a858-4125-405a-b750-bc61707f6d5f)

URL : https://lustrous-starburst-fc4ad8.netlify.app/

</div>

## 프로젝트 소개

- MySpec은 사용자들이 자신의 하드웨어 스펙을 쉽게 알아볼 수 있는 서비스 입니다.
- 자신의 하드웨어 구성이 상위 몇 퍼센트에 속하는지 알 수 있는 랭크 시스템을 사용할 수 있습니다.
- 패스마크 점수에 기반한 다른 하드웨어 장치들과 비교하며 자신의 하드웨어 스펙을 확인할 수 있습니다.
- 사용자들이 스펙을 많이 조회할수록, 사용자들의 하드웨어 구성 데이터가 쌓이게 되어 더욱 많은 양의 하드웨어 데이터를 확보하여 비교군이 증가합니다.

<br>

## 팀원 구성

<div align="center">

| **박승균** | **김재환** | **한시현** | **박규원** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/59389436?v=4" height=150 width=150> <br/> @seungyun-Park](https://github.com/seungyun-Park) | [<img src="https://avatars.githubusercontent.com/u/158824294?v=4" height=150 width=150> <br/> @Jaeboong](https://github.com/Jaeboong) | [<img src="https://avatars.githubusercontent.com/u/152502583?v=4" height=150 width=150> <br/> @devowl99](https://github.com/devowl99) | [<img src="https://avatars.githubusercontent.com/u/125748258?v=4" height=150 width=150> <br/> @High-Quality-Coffee](https://github.com/High-Quality-Coffee) |

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, styled-components, TypeScript
- Back-end : Node.js, Express.js, MariaDB, Sequelize
- Desktop : electron, html/css/js, node.js, express.js
- 버전 및 이슈관리 : Git/Github, Github Issues
- 협업 툴 : Notion, Slack
- 인프라 : MariaDB, AWS ec2, Docker, Docker-compose, netlify, Nginx
- IDE : VSCode

<br>

## 2. 채택한 개발 기술

### F-E

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 무한 스크롤 기능을 구현하기 위해 `React Infinite Loader` 라이브러리를 활용했습니다.
    - 스크롤 이벤트를 효율적으로 처리해 성능을 최적화하고 사용자가 더 많은 데이터를 자연스럽게 로드할 수 있도록 지원했습니다.
- React-query
    - react-query를 사용해 데이터를 캐싱하여 불필요한 API 호출을 줄였습니다.
    

### Desktop Application

- Electron
    - Desktop 어플리케이션 개발을 위해서, windows, macOS, Linux에서 작동하는 크로스 플랫폼 앱을 구축할 수 있도록 도와주는 Electron 프레임워크를 사용하였습니다.
      
    ![image](https://github.com/user-attachments/assets/02ac6295-f630-4ef9-b9b4-7fa4979cb954)

- HTML/CSS/JS
    - 데스크탑 어플리케이션의 UI/UX를 구현하기 위해 HTML/CSS를 사용하였습니다.

- Node.js/express
    - 하드웨어 정보를 가져오기 위해서 node.js 의 systeminformation 라이브러리를 사용한다. 이 라이브러리를 사용하면 cpu,gpu,ram,deviceID등 사용자의 하드웨어 정보를 손쉽게 가져올 수 있다.

### Electron

- 하드웨어 정보추출의 문제점과 electron의 도입 배경
    - 하드웨어 정보를 가져오기 위해서 node.js 의 systeminformation 라이브러리를 사용한다. 이 라이브러리를 사용하면 cpu,gpu,ram,deviceID등 사용자의 하드웨어 정보를 손쉽게 가져올 수 있다.
    - 하지만 배포환경에서, 이 로직이 돌아간다면, 서버의 정보를 가져오게 되어서 사용자의 하드웨어 정보를 가져오는 것이 불가능 해진다.(물론 시도는 해보지 않았지만, 보안 정책의 이유로 서버의 하드웨어 정보를 가져올 수 있을지도 의문이다.)
    - 그렇다면, 클라이언트에서 사용자의 하드웨어 정보를 가져올 수 있을까? 결론은 불가능하다.
- 해결 방안
    - 브라우저는 사용자의 하드웨어 정보 같은 민감한 정보의 접근을 기본적으로 차단한다 (당연한 이야기, 사용자가 특정 위험한 환경에 노출이 가능함)
    - 브라우저는 JavaScript와 Web APIs를 통해 제한된 하드웨어 정보만 제공한다. 그래서 내가 원하는 상세한 정보(하드웨어 이름, 램 용량, 맥 주소 등등)
    - 브라우저는 샌드박스 환경(소프트웨어를 외부 시스템과 격리된 상태에서 실행하는 보안 메커니즘)에서 실행되며, 로컬 시스템 자원에 직접 접근할 수 없다. 파일 시스템, 네트워크 인터페이스, 하드웨어 리소스 등은 기본적으로 접근이 차단된다 (이것 또한 당연한 이야기)
    

### 브랜치 전략

<br>

## 3. 프로젝트 구조

- front-end

```
src
|   App.css
|   App.test.tsx
|   App.tsx
|   index.css
|   index.tsx
|   logo.svg
|   react-app-env.d.ts
|   reportWebVitals.ts
|   setupProxy.js
|   setupTests.ts
|   types.ts
|
+---api
|       api.js
|
+---components
|       GameCard.tsx
|       HardwareFilter.tsx
|       Header.tsx
|       LoadingOverlay.tsx
|       MemberCard.tsx
|       SearchBar.tsx
|
+---image
|       About_image.png
|       cpu.svg
|       gpu.png
|       homeImage.png
|       MainImage.png
|       Main_logo.png
|       Photo.png
|       ram.png
|       Team_Logo.png
|
+---pages
|       AboutPage.tsx
|       GamesPage.tsx
|       HardwarePerformance.tsx
|       LandingPage.tsx
|       MyHardwareList.tsx
|       RankingPage.tsx
|
+---style
|       HardwarePerformance.js
|
+---styles
|       AboutPage.styles.ts
|
\---utils
        axiosConfig.js
```

- back-end

```
|   index.js
|
+---controllers
|       cpuController.js
|       gameController.js
|       gameSpecController.js
|       gpuController.js
|       nameMatchController.js
|       ramController.js
|       rankingController.js
|       scoreController.js
|       userController.js
|
+---models
|       baseScore.js
|       CPU.js
|       Game.js
|       GPU.js
|       RAM.js
|       User.js
|
+---routes
|       cpuRoutes.js
|       gameRoutes.js
|       gameSpecRoutes.js
|       gpuRoutes.js
|       ramRoutes.js
|       router.js
|       scoreRoutes.js
|       userRoutes.js
|
\---utils
        gameData.js
        importData.js
        importUserData.js
```

<br>

## 4. 역할 분담

### 🍊박승균

- **기능**
    - **컴포넌트 기반 설계**
        - React를 활용해 UI를 컴포넌트 단위로 나누어 재사용성을 극대화하고, 유지보수를 용이하게 하였습니다.
    - **스타일 관리**
        - `styled-components`를 사용하여 컴포넌트별 스타일을 적용, CSS-in-JS로 유지보수를 효율화했습니다.
    - **상태 관리**
        - React의 상태 관리 기능을 활용하여 사용자 인터페이스와 데이터 흐름을 간단하고 일관되게 유지했습니다.
    - **반응형 디자인**
        - 다양한 화면 크기에서도 최적의 사용자 경험을 제공하기 위해 반응형 UI를 설계했습니다.
    - **UI 성능 최적화**
        - 필요 없는 렌더링을 최소화하고, 코드 스플리팅 등을 통해 사용자 경험을 향상시켰습니다.
    - **유저 친화적 인터페이스 구현**
        - 사용자가 하드웨어 정보를 직관적으로 확인할 수 있도록 간결하고 접근성이 높은 UI를 개발했습니다.

<br>

### 👻김재환

- **기능**

<br>

### 😎한시현

- **기능**
    - 백엔드 api : CPU, GPU, RAM, 게임 전체 리스트 조회 기능
    - AWS EC2 인스턴스 생성 및 PM2를 통해 백그라운드에서 Express 서버 실행 & 배포
    - 백엔드 서버의 도메인 등록 & SSL 인증서 발급을 통해 HTTPS 활성화
- **개발 외**
    - ERD 설계, 백엔드 api 명세서 작성

<br>

### 🐬박규원

- **기능**
    - 사용자 하드웨어 정보 추출 : 사용자의 하드웨어 정보를 node.js의 systeminformation 라이브러리를 사용하여 추출하였습니다.
    - Desktop Application : 웹 브라우저 상에서 사용자의 하드웨어 정보를 추출하기 위해서는 보안정책 이슈가 있기 때문에 불가능합니다. 그래서 데스크탑 어플리케이션을 구축하여 사용자가 이를 다운로드 받아서, 사용자의 하드웨어 정보를 추출하도록 구현하였습니다.
    - api 서버 구축 : express를 통해서 서버를 구축하였고, 사용자의 하드웨어 정보를 클라이언트 측에서 실시간으로 응답받을 수 있도록 하였습니다.

<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-10-01 ~ 2024-12-21
- UI 구현 : 2024-10-07 ~ 2024-10-14
- 기능 구현 : 2024-10-14 ~ 2024-12-21

<br>

### 작업 관리

- F-E/B-E/Desktop 별 레포 관리하였고, github Issues를 사용하여 이슈관리를 진행하였습니다
- 주기적인 회의를 진행하며 하드웨어 정보추출, 하드웨어 점수 측정 로직, ERD, api 명세서에 대한 고민을 나눈내용과, 각 파트별 개발 진행상황을 공유한 내용을 노션을 통해 문서화하며 관리하였습니다.

<br>

<br>

## 6. 프로젝트 아키텍처

<br>

## 7. 트러블 슈팅

<br>

- Desktop Application 구축 : 클라이언트 측에서 (웹 브라우저 상에서) 사용자의 하드웨어 정보를 가져올 수 없기 때문에, electron 프레임워크를 사용하여 데스크탑 어플리케이션을 구축
- cors 설정 해결 : 잘못된 위치에서의 cors설정으로 인하여 클라이언트와 서버(데스크탑 앱)간의 통신이 안되는 오류가 발생하였지만, api 통신 이후에 cors를 오픈하도록 설정해두어서 오류가 발생한 것을 파악. 결국 cors를 오픈하는 코드를 main.js의 가능한 최상단에 위치시킴으로써, 문제를 해결 할 수 있게 되었다.

## 8. 개선 목표

<br>

## 9. 프로젝트 후기

### 🍊 박승균

- 하드웨어에 관심이 많은 친구들끼리 얘기하다가 이런거 있으면 좋지 않을까? 하여 시작한 프로젝트. 그만큼 개발하는데 재미있었고, 처음에 하드웨어 정보를 브라우저에서 불러오지 못하여 어려움이 있었지만 팀원이 windows 앱으로 불러오는 방식으로 해결하여 큰 도움이 되었습니다. 학교 전공수업에서 배운 Rstudio로 크롤링도 하여 실전 프로젝트에 적용해보는 것도 뜻 깊었던 것 같으며 다사다난 하였지만 성공적으로 프로젝트를 끝내서 다행인 것 같습니다

<br>

### 👻 김재환

<br>

### 😎 한시현

- 하드웨어라고는 CPU, GPU 정도밖에 몰랐었는데 비싼 돈을 주고 마련한 조립식 컴퓨터의 메인보드가 가격에 비해 상당히 좋지 않다는 말을 듣고 난 후로 하드웨어에 관심이 생겼고, 이후 노트북을 구매하면서 하드웨어 벤치마크 점수가 있다는 것을 알게 되었습니다. 이를 통해 하드웨어에 대해 잘 모르는 사람들도 합리적인 가격으로 적절한 pc를 구할 수 있도록 도움이 되었으면 좋겠다는 생각으로 시작하게 된 프로젝트입니다. Node.js와 Express를 통해 처음 백엔드 개발을 시작한 이후, Spring을 공부하며 해당 프레임워크를 활용한 프로젝트에 집중하면서 Node.js와 Express는 잠시 놓고 있었는데 이번 프로젝트를 통해 다시 감각을 유지하고 복습할 수 있는 기회를 가질 수 있게 되어 정말 좋았습니다. 또한, 기존에는 Naver Cloud를 통한 서버 배포 경험만이 있었는데, 이번 기회를 통해 AWS EC2를 활용한 배포를 처음으로 경험하며 인프라 관리에 대한 이해를 넓히게 되어 큰 성과를 얻을 수 있었습니다.

<br>

### 🐬 박규원

- 처음에 시작할때는 하드웨어 스펙도 잘 모르고, 벤치마크라는 점수가 존재하는지도 모르고 시작했지만, 함께하는 팀원분들이 그 분야에 대해 깊은 지식을 갖고 있어서 프로젝트를 기획하고, 하드웨어 점수 로직을 구현하는데에 큰 어려움 없이 잘 해결하였습니다!! 하드웨어 정보를 추출하는 것이 웹 브라우저 상에서는 어렵다는 것도 알게되고 이를 해결하기 위해 electron을 사용하여 데스크탑 어플리케이션도 구축하는 경험을 갖게 되어서 많은 것을 배우게 된 프로젝트였던 것 같습니다!!! 너무 좋았습니다!!!!! 😄

<br>

## 리드미 참고

https://github.com/likelion-project-README/README

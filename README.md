# Simple React Resume Teaplate

심플한 디자인의 React 이력서 템플릿입니다.

필요한 기능들을 모두 가진 템플릿을 찾기 힘들어, 다른 선배님들의 멋진 템플릿을 참고하여 직접 제작하였습니다.

React를 통해 개발했기 때문에, Node.js의 설치를 필수로 합니다.

https://lee-minhoon.github.io/ < 해당 템플릿으로 만들어진 이력서입니다.

<hr/>

## 주요 기능

### Image Modal

프로젝트나 이력 등에 관한 대표 이미지들을 보여줄 수 있고, 클릭 시 모달 창을 통해 확대하여 볼 수 있습니다.

### PDF Viewer

이미지 외에도 다양한 문서들을 필요에 따라 PDF 형식으로 변환해 제공할 수 있습니다. 

<hr/>

## 설치 방법

### 1. 템플릿 가져오기

<img src="https://user-images.githubusercontent.com/59780565/137311464-bb3a3835-69c0-4666-afb0-0af96e7c6ce2.png" />

Use this template 버튼을 통해 템플릿을 자신의 원격 저장소로 복사합니다.

이때 페이지의 주소는 username.github.io/repository 가 됩니다.

username.github.io/ 를 페이지 주소로 사용하려면 저장소 이름을 username.github.io 로 만들면 됩니다.

원격 저장소가 만들어졌으면 아래 명령어를 통해 로컬로 이력서를 가져옵니다.

```
git init
git remote add origin ~~
git pull origin main
```

### 2. npm 설치 및 package.json 파일 수정

```
npm install
```

명령어를 통해 필요한 모듈들을 설치합니다.

그런 다음 package.json 파일을 열어 homepage 속성의 값을 자신의 페이지 주소로 바꿔줍니다.

<img src="https://user-images.githubusercontent.com/59780565/137336163-0b507d3e-eb0f-477c-92ce-2fb591b73ab1.png" />

### 3. 배포

```
npm run deploy
```

명령어를 통해 react project를 바로 배포가 가능합니다.

자신의 저장소에 gh-pages 라는 브랜치가 자동으로 생성되며 페이지에서 보여줄 브랜치가 gh-pages로 설정됩니다.

<img src="https://user-images.githubusercontent.com/59780565/137336885-7957e16f-4c46-4170-b080-cd865b1aef70.png" />

React 프로젝트를 Github Page 에 배포하거나 gh-pages에 대해 궁금하신 분들은

https://hackids.tistory.com/126 를 확인해주시면 됩니다.

로컬에서 테스트를 원하실 경우

```
npm run start
```

명령어만 입력해주시면 테스트용 서버가 실행됩니다.

<hr/>

## 사용 방법

### 1. 프로필

프로필은 프로젝트 폴더 → public 폴더 안의 profile.jpg 파일을 지우고 원하는 사진을 넣어 profile.jpg로 이름을 변경해주시면 됩니다.

### 2. 내용

프로젝트 폴더 → src → resume.js 파일에 이력서의 내용들이 작성되어 있습니다.

샘플이 작성되어 있기 때문에, 배포된 페이지와 비교하여 작성하면 좀 더 수월합니다.

desc 키에 main, sub 두 가지의 키가 있는데,

sub 키에 값을 입력하게 되면 해당 부분은 아래 그림처럼 접고 펼칠 수 있는 글이 됩니다.

<img src="https://user-images.githubusercontent.com/59780565/137338919-88cd4d6b-8cbb-422b-8f79-5eb89ade2510.png" />

### 3. 이미지 및 DPF

이미지와 PDF는 프로젝트 폴더 → public → projects 안에 폴더를 하나 만들어 넣어주시면 됩니다.

folder 키의 값에 방금 만든 폴더명을 넣어주시면 됩니다.

images 키에는 image 파일들의 이름을 넣어주시면 되고,

pdfs 키에는 pdf 파일들의 이름과 pdf 미리 보기 파일을 넣어주시면 됩니다.

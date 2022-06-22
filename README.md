
# 리액트 기본 구조 
## [node_modules]
    프로젝트 구동에 필요한 모든 라이브러리 소스 코드를 모아 놓은 폴더 

## [public]
    html, 이미지 같은거 보관하고 싶을 때 (static 폴더)

## [src]
    여기서 코드 작성
    .js 에서 jsx 문법으로 작성한 것을 index.html에다가 index.js가 집어 넣도록 설정해놓았다.

    - component 폴더 생성
        pages에서 사용할 컴포넌트들을 작성한다. 

    - pages 폴더 생성
        pages 폴더 안에는 일반적으로 라우팅이 들어간다. 
        ex) 로그인 화면, 회원 게시판 화면 등등 
    
    - assets 폴더 생성
        프로젝트에 쓸 font, image 등이 담겨 있다. [public]폴더와의 차이점은 assets는 자기 디렉터리 안쪽 public

    - hooks 폴더 생성
        hook들 모아 놓은 것 
    hook?)
         리액트 v16.8에 새로 도입된 기능, 함수형 컴포넌트가 클래스형 컴포넌트의 기능(생명 주기 기능)사용할 수 있도록 해줌
        대표적 hook == userState, useEffect 사용하는 컴포넌트

        --> hooks 폴더에 hook을 모아 놓음으로서(Custom React Hooks)
         컴포넌트에 중복되는 코드들을 줄이기 위해 사용됐던 HOC컴포넌트를 대체할 수 있게 됐다.

        *Hoc(Higher Otfrt Component)의 단점
            hook이 나오기전에 각각의 컴포넌트의 중복되는 코드(ex. 데이터 매핑하는 로직)을 Hoc 컴포넌트의 wrapper 컴포넌트를 사용하므로서 
            대체했었다. 단점은 컴포넌트들이 많아 짐으로서 래퍼 컴포넌트가 너무 많아 코드가 지저분해진다는 것 

       ### https://youtube.com/watch?v=C26vJqelKlA&feature=share 참고

    - utils 폴더 생성
        유틸 함수들을 모아둔 폴더  
        ex) 유효성 검사, 점수 계산 등등 재 사용할 함수들 
    
    - store 폴더 생성
        redux를 정의 해놓은 폴더 

    - styles 폴더 생성
        .CSS 모음

## [package.json]
    프로젝트 정보같은 것이 명시되어 있는 폴더
    ex. 프로젝트 명, 의존성 등등 

# Getting Started with Create React App.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

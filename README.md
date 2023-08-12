
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


## [redux]
    - 상태관리 라이브러리 react에서 react-redux
사용하는 이유
    - props 문법을 사용안하므로서 복잡성, 유지보수 능률 
    상위 컴포넌트 -> 하위 컴포넌트 -> 하위 컴포넌트 이런식으로 
    state를 props로 전송하는데 복잡하고 문제가 생겼을 시 원인 파악이 힘듦 , store를 통하여 props없이 관리해서 전달한다.

    - state 변경 관리를 위해 사용 
    컴포넌트안에서 state를 이용해 변경을 하는데 버그가 발생했을 시 뭐가 문제인지 파악이 힘들다. 그래서 redux는 store.js에서 state 수정방법을 정의 해놓고, 컴포넌트에서는 요청만 한다.

import '../styles/Main.css';
import {useState} from 'react';

// /*eslint-disable*/ 워닝 메세지 안나오게 하는 거 
function Main(){
    let post ='글제목';

    let [글제목, set글제목] = useState(['남자 코트 추천','여자 코트 추천']);
    // 위에는 destructuring 문법을 활용한 것
    //list 를 변수로 빼서 쓰는 것 
    //state를 쓰는 이유는 변수의 값 변경 시 새로고침하지 않고 자동으로 랜더링
    // 글제목 = set글제목('헤헤'); 이렇게 쓰면 계속 재랜더링 됨

    let [따봉,set따봉] = useState(0);
    //state값의 변경은 set을 사용해서 변경해야한다.


    // function set따봉func(){
    //     console.log(1);
    // }


    return(
        <div className="Main"> 
        {/* return 안에는 하나의 태그(열고 닫고)안에 작성해야 한다. */}
            <div className="black-nav">
                <h4 style ={{color:'red', fontSize: '16px'}}>MY BLOG</h4>
                {/* jsx에서 인라인 스타일 요소 작성하는 법 */}
            </div>
            
            <button 
                onClick={()=>{

                        
                        // 글제목[0] = '글제목 수정 완료';
                        // set글제목(글제목);
                        // 위처럼 하지않는다. 그리고 되지도 않음..?

                        //array, object타입은 레퍼런스 복사가 아니라 값 복사를 통해 
                        //원래 객체의 값에 영향을 안주게 변경 

                        // let copy = [글제목]
                        // 근데 생각해봐 우리가 배열이나 오브젝트를 복사할 때 저렇게 
                        // 객체 명으로 대입하면 공유되는 건 값이 아니라 주소 값이 었던거 기억나지
                        // 그리고 값을 넣으려면 반복문으로 해당 i 돌려서 값 뽑아줬고
                        // 위와 같은 것을 ES6에서는 스프레드 연산자로 해결해준다.
                        let copy = [...글제목]; 
                        //[...]안의 점 세개는 스프레드 연산자
                        // 화살표를 없애고 다시 만들어주세요 라는 의미

                        copy[0] = '글제목 수정완료 ';
                        set글제목(copy);
                    }}>
                글수정
            </button>
            <div className="list">
                <h4>{post}</h4>
                {/* jsx에서 중괄호로 자바스크립트 문법을 사용할 수 있다. */}
                {/* 이런걸 '데이터 바인딩'이라고 한다.  */}
                <p>~발행 </p>
                {/* <h4>{글제목[0]}  */}
                {/* <span onClick={set따봉func}>👍</span>{따봉}</h4>  
                onClick 안에는 함수 명을 넣어야 함, 함수를 만들어서 넣는 방법이 있지만
                화살표 함수를 통해 바로 함수를 만들지 않고 바로 로직 실행 가능 */}

                <h4>{글제목[0]}
                    <span onClick={()=>{set따봉(따봉+1)}}>👍</span>{따봉}
                </h4> 
            </div>

            <div className="list">
                <h4>{post}</h4>
                <p>~발행 </p>
                <h4>{글제목[1]}</h4>
            </div>
            
        </div>       
    );
}

export default Main;
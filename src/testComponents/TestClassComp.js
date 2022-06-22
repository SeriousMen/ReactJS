import React from "react";
//리액트 사용자 정의 컴포넌트의 이름은 반드시 대문자로 시작해야한다. 그렇지 않으면 import시에 정상작동이 안됨
// 파일은 소문자여도 됨, 근데 import 해서 담는 변수는 대문자 
class TestClassComp extends React.Component {
    //state객체를 사용하려면 컴포넌트를 생성할 때 가장 윗 부분(render()보다)에서 선언
    //react 컴포넌트는 state가 변할 때마다 다시 실행된다.
    state = {
        number: 0
    };
    render() {
        return (
            <div style={{ "textAlign": "center" }}>
                <div style={{ "fontSize": "100px" }}>{this.state.number}</div>
                <button onClick={this.handleClickIncrement}>더하기</button>
                <button onClick={this.handleClickDecrement}>빼기</button>
            </div>
        );
    }
    handleClickIncrement = () => {
        //state 값은 this.state.name = state.number+1 처럼 직접적으로 값을 변경하면 안된다.
        //반드시 setState() 함수를 이용해서 값을 변경해야한다.
        this.setState(state => ({
            number: state.number + 1
        }));
    };
    handleClickDecrement = () => {
        this.setState(state => ({
            number: state.number - 1
        }));
    };
}

export default TestClassComp;
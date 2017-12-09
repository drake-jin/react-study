import React from 'react';

// 함수형 컴포넌트는 파라메터로 props를 받는다.
const Container = ({title, children}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  );
};

// 함수형 컴포넌트는 파라메터로 props를 받는다.
export default Container
;
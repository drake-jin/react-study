import React from 'react'
import styled from 'styled-components'
import oc from 'open-color'

const Wrapper = styled.div`
  /* 레이아웃 */
  height: 4rem;
  background: ${oc.teal[6]};
  border-bottom: 1px solid ${oc.teal[8]};
  
  /* 폰트설정 */
  color: white;
  font-weight: 500;
  font-size: 1.5rem;

  /* 가운데로 정렬 */
  display: flex;
  align-items: center; /* 세로정렬 가운데 */
  justify-content: center; /* 가로정렬 가운데 */
`

const Header = () => {
  return (
    <Wrapper>
      주소록
    </Wrapper>
  )
}

export default Header
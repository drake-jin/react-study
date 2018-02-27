import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';


const ListPage = ({match}) => {
  // page 의 기본값을 1로 설정합니다.
  const { page = 1, tag } = match.params;
  // 페이지네이션을 위에서 하는건데 비구조할당 문법에서
  // match.params 에서 page가 없으면 1이 되고 있으면 있는값을 쓰는 구조

  return (
    <PageTemplate>
      <ListWrapper>
        <ListContainer
          page={parseInt(page, 10)}
          tag={tag}
        />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
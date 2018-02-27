import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Pagination = ({page, lastPage, tag}) => {
  const createPagePath = (page) => {
    return tag ? `/tag/${tag}/${page}` : `/page/${page}`;
    // 태그로서 페이지네이션을 하는가, 정말 전체 글에서 페이지네이션을 하는가 둘 다 지원하기위해 
    // 다음과 같은 코드를 작성함.
  }

  return (
    <div className={cx('pagination')}>
      <Button disabled={page === 1} to={createPagePath(page -1)}>
        이전 페이지
      </Button>
      <div className={cx('number')}>
        페이지 {page}
      </div>
      <Button disabled={page===lastPage} to={createPagePath(page+1)}>
        다음 페이지
      </Button>
    </div>
  );
};

export default Pagination;
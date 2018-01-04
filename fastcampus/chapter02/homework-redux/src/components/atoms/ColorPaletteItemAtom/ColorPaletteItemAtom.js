import React, { Component } from 'react'

import styles from './ColorPaletteItemAtom.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class ColorPaletteItemAtom extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate(nextProps) {
    return this.props.color !== nextProps.color
  }

  render() {
    const { color, onSelectTheme } = this.props
    return (
      <div
        className={cx('item')}
        onClick={() => {
          // 색상 바꾸는데 쓸데없이 리 렌더링함. 그래서 그냥 상태값을 업데이트 못 시키도록 만듬
          onSelectTheme(color)
        }}
        style={{
          backgroundColor: color,
        }}
      />
    )
  }
}

export default ColorPaletteItemAtom

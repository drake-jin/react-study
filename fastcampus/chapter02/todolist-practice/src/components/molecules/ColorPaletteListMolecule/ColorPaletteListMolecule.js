import React, { Component } from 'react'

import { ColorPaletteItemAtom } from 'components'

import styles from './ColorPaletteListMolecule.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

class ColorPaletteListMolecule extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render() {
    const { onSelectTheme, themeColors, selectedColor } = this.props
    const themeColorsItems = themeColors.map((value, index) => (
      <ColorPaletteItemAtom
        key={index}
        selectedColor={selectedColor}
        onSelectTheme={onSelectTheme}
        color={value}
      />
    ))
    return (
      <div className={cx('color-list')}>
        { themeColorsItems }
      </div>
    )
  }
}

export default ColorPaletteListMolecule

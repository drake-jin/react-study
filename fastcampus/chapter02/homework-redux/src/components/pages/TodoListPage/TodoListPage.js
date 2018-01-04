import React, { Component } from 'react'

import {
  NormalPageTemplate,
  PanelCardTemplate,
  TodoFormOrganism,
  TodoItemListMolecule,
  ColorPaletteListMolecule } from 'components'


const TodoListPage = ({
  onTodoInputChange,
  onTodoCreate,
  onTodoRemove,
  onTodoToggle,
  onThemeColorChange,
  input,
  todos,
  color,
}) => (
  <NormalPageTemplate centerContent >
    <PanelCardTemplate
      themeColor={color}
      title="To do List"
      header={(
        <ColorPaletteListMolecule
          themeColors={['#22b8cf', '#343a40', '#f03e3e', '#12b886', '#228ae6']}
          onSelectTheme={onThemeColorChange}
        />)}
      footer={(
        <TodoItemListMolecule
          todos={todos}
          onRemove={onTodoRemove}
          onToggle={onTodoToggle}
        />)}
      center
    >
      <TodoFormOrganism
        themeColor={color}
        inputValue={input}
        onClick={onTodoCreate}
        onChange={onTodoInputChange}
      />
    </PanelCardTemplate>
  </NormalPageTemplate>
)


export default TodoListPage

import React, { FC, useState } from 'react'
import MenuUnstyled, { MenuUnstyledActions } from '@mui/base/MenuUnstyled'
import MenuItemUnstyled, { menuItemUnstyledClasses } from '@mui/base/MenuItemUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import { IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 100px;
  background: #20212c;
  border: 2px solid #17181f;
  border-radius: 0.75em;
  color: #fff;
  overflow: auto;
  outline: 0px;
  `
)
const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;
  font-weight: 600;
  cursor : pointer;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover:not(.${menuItemUnstyledClasses.disabled}) {
    background: #17181f;
  }
  `
)
const Popper = styled(PopperUnstyled)`
  z-index: 1;
`

const CustomMenu: FC<any> = ({ handleInputChanges, handleDeletemain }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const isOpen = Boolean(anchorEl)
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const menuActions = React.useRef<MenuUnstyledActions>(null)

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  const close = () => {
    setAnchorEl(null)
    buttonRef.current!.focus()
  }
  const styleicon = {
    borderRadius: '10px',
    backgroundColor: '#20212c',
    color: 'white',
  }
  return (
    <div>
      <IconButton
        type='button'
        onClick={handleButtonClick}
        ref={buttonRef}
        aria-controls={isOpen ? 'simple-menu' : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup='menu'
        sx={styleicon}
      >
        <MoreHorizIcon />
      </IconButton>

      <MenuUnstyled
        actions={menuActions}
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        components={{ Root: Popper, Listbox: StyledListbox }}
        componentsProps={{ listbox: { id: 'simple-menu' } }}
      >
        <StyledMenuItem onClick={handleInputChanges}>Изменить</StyledMenuItem>
        <StyledMenuItem onClick={handleDeletemain}>Удалить</StyledMenuItem>
      </MenuUnstyled>
    </div>
  )
}
export default CustomMenu

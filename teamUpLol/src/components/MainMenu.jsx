// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function MainMenu() {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem>Download LOL</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
    </Menu>
  )
}


    
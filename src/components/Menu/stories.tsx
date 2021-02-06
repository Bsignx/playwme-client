import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'
import { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: { default: 'won-dark' }
}

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />

Logged.args = {
  username: 'John Doe'
}

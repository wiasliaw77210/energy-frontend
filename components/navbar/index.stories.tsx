import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { createRouter } from 'next/router';
import Navlinks from './Navlinks';
import UserInfo from './UserInfo';

const MD = `
# Navbar Component

## description

## Authors
<img src="https://avatars3.githubusercontent.com/u/37038019?s=460&v=4" alt="wiasliaw" style="width: 75px;height: 75px;border-radius: 50%;"/>
`;

const router = createRouter('/', {}, '', {} as any);

storiesOf('components/navbar', module).add(
  'Navlink',
  () => (
    <RouterContext.Provider value={router}>
      <Navlinks />
    </RouterContext.Provider>
  ),
  {
    info: {
      inline: true,
    },
    notes: {
      markdown: MD,
    },
  },
);

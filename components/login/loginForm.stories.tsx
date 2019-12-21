import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginForm from './loginForm';

const MD = `
# loginForm
A form for login.

## description
* props
  * \`null\`

* pre-check
  * check token in localStorage

~~~js
localStorage.getItem('BEMS_user_id') // null or has value
localStorage.getItem('BEMS_bearer') // null or has value
~~~

* onSubmit
  * fetchLogin: Jump to API document

## Authors
<img src="https://avatars3.githubusercontent.com/u/37038019?s=460&v=4" alt="wiasliaw" style="width: 75px;height: 75px;border-radius: 50%;"/>
`;

storiesOf('components/login', module)
  .addDecorator(story => (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f2f1',
        margin: '20px 40px 40px 40px',
        padding: '5% 0 5% 0',
      }}
    >
      {story()}
    </section>
  ))
  .add('LoginForm', () => <LoginForm />, {
    info: {
      inline: true,
    },
    notes: {
      markdown: MD,
    },
  });

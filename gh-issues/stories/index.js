import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

import TopBar from '../src/components/topBar';

storiesOf('Button', module)
  .add('with text', () => (
    <Button >Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button ><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));  
  
storiesOf('Navigation', module)
  .add("TopBar", ()=> <TopBar></TopBar>);
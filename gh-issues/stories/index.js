import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

import '../src/App.css'

import TopBar from '../src/components/topBar';
import IssueLabel from '../src/components/issueLabel';
import AddIssue from '../src/components/addIssue';
import User from '../src/components/user';

storiesOf('Button', module)
  .add('with text', () => (
    <Button >Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button ><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));  
  
storiesOf('Navigation', module)
  .add("TopBar", ()=> <TopBar></TopBar>);

  storiesOf('Issue', module)
  .add('label', ()=> <IssueLabel text="must have"color="#e5b7a2"></IssueLabel>)
  .add('addButton', ()=> <AddIssue></AddIssue>)
  .add('user', ()=><User username="BryCur" avatarURL="https://avatars0.githubusercontent.com/u/30982987?s=460&v=4"></User>)
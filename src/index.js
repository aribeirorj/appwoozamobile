import React from 'react';
import {Header} from 'react-native-elements';
import Main from './pages/Main';

export default function App() {
  return (
    <>
      <Header
        statusBarProps={{barStyle: 'light-content'}}
        barStyle="light-content"
        centerComponent={{text: 'App Wooza', style: {color: '#fff'}}}
        containerStyle={{
          backgroundColor: '#333',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      />
      <Main />
    </>
  );
}

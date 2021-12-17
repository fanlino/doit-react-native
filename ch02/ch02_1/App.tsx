import React from 'react';
import {Text} from 'react-native';

export default function App() {
  console.log('App Called');
  const textElement = React.createElement(Text, null, 'Hello world!');
  return textElement;
}

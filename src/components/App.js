import { useState } from 'react';
import AiForm from './AiForm';
import TextList from './TextList';
import styled from 'styled-components';

function App() {
  const [textArr, setTextArr] = useState([]);
  const dataFromAPI = (textObj, words) => {
    let obj = {
      ...textObj,
      words,
      flipped: false,
    };
    setTextArr([...textArr, obj]);
  };

  return (
    <div>
      <HeaderText>Feeling down? </HeaderText>
      <AiForm getData={dataFromAPI} />
      <TextList data={textArr} />
    </div>
  );
}

export default App;

const HeaderText = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
  margin-top: 1.5em;
`;

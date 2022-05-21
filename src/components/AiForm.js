import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
export default function AiForm({ getData }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (input.trim().length < 3) {
      setError(true);
      setLoading(false);
      return;
    } else {
      const stringConvert = (str) => {
        let replaced = str.replace(/[,|;]|\b and\b/g, '');
        return replaced.split(' ').join(' and ');
      };
      const data = {
        prompt: `Write a positive thing about me with the word or words: ${stringConvert(input)}`,
        temperature: 0.8,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      const engineId = 'text-curie-001';
      const url = `https://api.openai.com/v1/engines/${engineId}/completions`;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      };
      axios
        .post(url, data, { headers: headers })
        .then((res) => {
          setLoading(false);
          getData(res.data, input);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
      setInput('');
      setError(false);
    }
  };

  return (
    <InputContainer>
      <h3>Input positive words to reignite your positivity!</h3>
      <form onSubmit={onSubmitHandler}>
        <Input
          onChange={inputHandler}
          value={input}
          type='text'
          label='Positive Words'
          placeholder='ex: beautiful, caring, smart'
          error={error}
          helperText={error && 'Please input valid positive words!'}
          size='small'
        />
        <Button
          disabled={input.length === 0 || loading ? true : false}
          variant='contained'
          style={{ height: '2.83em' }}
          endIcon={loading ? null : <SendIcon />}
          type='submit'>
          {loading ? <CircularProgress size='1.2rem' /> : 'Send'}
        </Button>
      </form>
    </InputContainer>
  );
}

const Input = styled(TextField)`
  width: 300px;
`;

const InputContainer = styled.div`
  text-align: center;
  margin-bottom: 1em;
`;

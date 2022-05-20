import React from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import IndividualCard from './IndividualCard';
import Grid from '@mui/material/Grid';

export default function TextList({ data }) {
  return (
    <CardsContainer>
      <EncouragementHeader>Words of Encouragement</EncouragementHeader>
      <Grid container justifyContent='center' spacing={20} column={8}>
        {data.length
          ? data
              .sort((a, b) => b.created - a.created)
              .map((item) => {
                return (
                  <Grid item key={uuid()}>
                    <IndividualCard eachCard={item} />
                  </Grid>
                );
              })
          : null}
      </Grid>
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  text-align: center;
`;

const EncouragementHeader = styled.h1`
  color: #436a95;
  margin-bottom: 1.5em;
`;

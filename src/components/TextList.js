import React from 'react';
import styled, { keyframes } from 'styled-components';
import uuid from 'react-uuid';
import IndividualCard from './IndividualCard';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TextList({ data }) {
  return (
    <CardsContainer>
      {data.length ? (
        <EncouragementHeader>
          Love Yourself <StyledHeart sx={{ fontSize: '25px' }} />
        </EncouragementHeader>
      ) : (
        <p>Fill up this page with positivity!</p>
      )}
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

const EncouragementHeader = styled.h3`
  color: black;
  margin-bottom: 1.5em;
  margin-right: 10px;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledHeart = styled(FavoriteIcon)`
  position: absolute;
  margin-left: 5px;
  color: pink;
  animation: ${pulse} 1s infinite;
  animation-timing-function: linear;
`;

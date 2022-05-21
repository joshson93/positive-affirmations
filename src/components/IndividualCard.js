import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

export default function IndividualCard({ eachCard }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const textConvert = (str) => {
    let noLineBreaks = str.replace(/\n/g, '');
    if (noLineBreaks.includes('I am')) {
      return noLineBreaks.substring(noLineBreaks.indexOf('I am'));
    }
    if (noLineBreaks.includes('I can')) {
      return noLineBreaks.substring(noLineBreaks.indexOf(`I can`));
    } else {
      return noLineBreaks.substring(noLineBreaks.indexOf(`I'm`));
    }
  };

  return (
    <ReactCardFlip
      containerStyle={{ display: 'inline-block', cursor: 'pointer' }}
      flipSpeedFrontToBack={0.8}
      flipSpeedBackToFront={0.8}
      isFlipped={isFlipped}
      flipDirection='horizontal'>
      <Card
        sm={6}
        style={{ backgroundColor: '#436a95' }}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        sx={{ maxWidth: 200 }}>
        <StyledCardContent>
          <h3>Your Positive Words:</h3>
          <Typography variant='body2'>{eachCard.words}</Typography>
        </StyledCardContent>
        <DoubleArrowRoundedIcon style={{ float: 'right', fill: 'white' }} />
      </Card>
      {/* back */}
      <Card
        sm={6}
        style={{ backgroundColor: '#436a95' }}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        sx={{ maxWidth: 200 }}>
        <StyledCardContent>
          <h3>Positive Affirmation: </h3>
          <Typography variant='body2'>{textConvert(eachCard.choices[0].text)}</Typography>
        </StyledCardContent>
      </Card>
    </ReactCardFlip>
  );
}

const StyledCardContent = styled(CardContent)`
  color: white;
`;

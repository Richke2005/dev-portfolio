"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MIN = 0;
const MAX = 100;
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1}}>
        <LinearProgress style={{borderRadius: "20px", height: "5px", width: "100%"}} variant="determinate" value={normalise(props.value)} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "var(--foreground)" }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CustomLinearLabel({initialValue = 0, finalvalue}) {
  const [progress, setProgress] = React.useState(initialValue);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if(prevProgress < finalvalue) {
          setProgress(prevProgress + 5);
        }
        return finalvalue;
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel
      value={progress} />
    </Box>
  );
}

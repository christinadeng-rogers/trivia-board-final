// Count down timer
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; 

const Countdown = () => (
  <CountdownCircleTimer
    isPlaying
    duration={60}
    size={90}
    strokeWidth={8}
    colors={[
      ['#218380', 0.33],
      ['#EF798A', 0.33],
      ['#7E2E84', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
)

export default Countdown;
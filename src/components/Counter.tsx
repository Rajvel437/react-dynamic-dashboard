import { useSpring, animated } from "react-spring";
import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";



export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const colorAnimation = useSpring({
        backgroundColor: `rgba(0, 150, 255, ${count / 10})`,
    });
      
  return (
          <animated.div style={{ height: "100vh", ...colorAnimation }}>
            <Container>
              <Typography variant="h4">Counter</Typography>
              <Button onClick={() => setCount(count + 1)}>Increment</Button>
              <Button onClick={() => setCount(count - 1)}>Decrement</Button>
              <Button onClick={() => setCount(0)}>Reset</Button>
            </Container>
          </animated.div>
        );
      };
      

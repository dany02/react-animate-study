import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const Box = styled(motion.div)`
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    width: 100px;
    height: 100px;
    background-color: #00a5ff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((prev) => !prev);
    return (
        <Wrapper onClick={toggleClicked}>
            <Box>{!clicked ? <Circle layoutId="circle" style={{borderRadius: "50px"}}/> : null}</Box>
            <Box>{clicked ? <Circle  layoutId="circle" style={{borderRadius: 0, scale: 2}}/> : null}</Box>
        </Wrapper>
    );
}

export default App;

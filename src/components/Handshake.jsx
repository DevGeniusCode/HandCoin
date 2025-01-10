import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: monospace;
    white-space: pre-wrap;
    color: #00ff00;
    font-size: 12px;
    text-align: center;
`;

const AnimatedHandshake = () => {
    const [animatedArt, setAnimatedArt] = useState('');
    const [frames, setFrames] = useState([]);
    const [currentFrame, setCurrentFrame] = useState(0);
    const animationRef = useRef(null);



    const colors = {
        'rgb(0, 0, 0)': 'rgb(0, 255, 0)',
        'rgb(10, 10, 10)': 'rgb(0, 200, 0)',
        'rgb(102, 146, 147)': 'rgb(17, 17, 17)',
        'rgb(103, 103, 103)': 'rgb(17, 17, 17)',
        'rgb(108, 156, 156)': 'rgb(0, 0, 255)',
        'rgb(108, 56, 53)': 'rgb(255, 0, 0)',
        'rgb(109, 109, 109)': 'rgb(17, 17, 17)',
        'rgb(113, 113, 113)': 'rgb(17, 17, 17)',
        'rgb(113, 186, 186)': 'rgb(0, 0, 255)',
        'rgb(114, 185, 185)': 'rgb(0, 0, 255)',
        'rgb(115, 161, 162)': 'rgb(0, 0, 255)',
        'rgb(117, 168, 169)': 'rgb(0, 0, 255)',
        'rgb(117, 178, 179)': 'rgb(0, 0, 255)',
        'rgb(117, 182, 183)': 'rgb(0, 0, 255)',
        'rgb(118, 195, 193)': 'rgb(0, 0, 255)',
        'rgb(119, 100, 100)': 'rgb(255, 0, 0)',
        'rgb(119, 119, 119)': 'rgb(17, 17, 17)',
        'rgb(120, 174, 175)': 'rgb(0, 0, 255)',
        'rgb(120, 190, 190)': 'rgb(0, 0, 255)',
        'rgb(122, 186, 187)': 'rgb(0, 0, 255)',
        'rgb(122, 190, 195)': 'rgb(0, 0, 255)',
        'rgb(122, 62, 57)': 'rgb(255, 0, 0)',
        'rgb(123, 182, 183)': 'rgb(0, 0, 255)',
        'rgb(123, 196, 196)': 'rgb(0, 0, 255)',
        'rgb(124, 178, 179)': 'rgb(0, 0, 255)',
        'rgb(124, 70, 67)': 'rgb(255, 0, 0)',
        'rgb(128, 128, 128)': 'rgb(17, 17, 17)',
        'rgb(131, 185, 186)': 'rgb(0, 0, 255)',
        'rgb(132, 190, 191)': 'rgb(0, 0, 255)',
        'rgb(133, 195, 196)': 'rgb(0, 0, 255)',
        'rgb(135, 201, 202)': 'rgb(0, 0, 255)',
        'rgb(136, 136, 136)': 'rgb(17, 17, 17)',
        'rgb(136, 69, 65)': 'rgb(255, 0, 0)',
        'rgb(144, 144, 144)': 'rgb(17, 17, 17)',
        'rgb(149, 77, 73)': 'rgb(255, 0, 0)',
        'rgb(15, 16, 17)': 'rgb(0, 255, 0)',
        'rgb(150, 150, 150)': 'rgb(17, 17, 17)',
        'rgb(154, 154, 154)': 'rgb(17, 17, 17)',
        'rgb(158, 158, 158)': 'rgb(17, 17, 17)',
        'rgb(159, 88, 84)': 'rgb(255, 0, 0)',
        'rgb(162, 162, 162)': 'rgb(17, 17, 17)',
        'rgb(166, 166, 166)': 'rgb(17, 17, 17)',
        'rgb(170, 170, 170)': 'rgb(17, 17, 17)',
        'rgb(170, 85, 79)': 'rgb(255, 0, 0)',
        'rgb(174, 174, 174)': 'rgb(17, 17, 17)',
        'rgb(178, 178, 178)': 'rgb(17, 17, 17)',
        'rgb(178, 94, 89)': 'rgb(255, 0, 0)',
        'rgb(18, 7, 7)': 'rgb(0, 200, 0)',
        'rgb(182, 182, 182)': 'rgb(17, 17, 17)',
        'rgb(187, 102, 97)': 'rgb(255, 0, 0)',
        'rgb(188, 188, 188)': 'rgb(17, 17, 17)',
        'rgb(191, 94, 88)': 'rgb(255, 0, 0)',
        'rgb(197, 197, 197)': 'rgb(17, 17, 17)',
        'rgb(20, 30, 31)': 'rgb(0, 230, 0)',
        'rgb(203, 106, 99)': 'rgb(255, 0, 0)',
        'rgb(203, 203, 203)': 'rgb(17, 17, 17)',
        'rgb(204, 100, 93)': 'rgb(255, 0, 0)',
        'rgb(207, 207, 207)': 'rgb(17, 17, 17)',
        'rgb(210, 110, 104)': 'rgb(255, 0, 0)',
        'rgb(211, 211, 211)': 'rgb(17, 17, 17)',
        'rgb(215, 215, 215)': 'rgb(17, 17, 17)',
        'rgb(219, 114, 107)': 'rgb(255, 0, 0)',
        'rgb(219, 219, 219)': 'rgb(17, 17, 17)',
        'rgb(22, 22, 22)': 'rgb(0, 240, 0)',
        'rgb(220, 103, 93)': 'rgb(255, 0, 0)',
        'rgb(223, 101, 93)': 'rgb(255, 0, 0)',
        'rgb(223, 108, 100)': 'rgb(255, 0, 0)',
        'rgb(223, 223, 223)': 'rgb(17, 17, 17)',
        'rgb(227, 223, 227)': 'rgb(17, 17, 17)',
        'rgb(228, 105, 95)': 'rgb(255, 0, 0)',
        'rgb(229, 117, 109)': 'rgb(255, 0, 0)',
        'rgb(229, 229, 229)': 'rgb(17, 17, 17)',
        'rgb(231, 111, 102)': 'rgb(255, 0, 0)',
        'rgb(234, 121, 113)': 'rgb(255, 0, 0)',
        'rgb(235, 235, 235)': 'rgb(17, 17, 17)',
        'rgb(239, 239, 239)': 'rgb(17, 17, 17)',
        'rgb(245, 245, 245)': 'rgb(17, 17, 17)',
        'rgb(25, 12, 12)': 'rgb(0, 220, 0)',
        'rgb(251, 251, 251)': 'rgb(17, 17, 17)',
        'rgb(26, 38, 38)': 'rgb(0, 210, 0)',
        'rgb(28, 28, 28)': 'rgb(0, 190, 0)',
        'rgb(30, 43, 45)': 'rgb(0, 180, 0)',
        'rgb(33, 17, 16)': 'rgb(0, 170, 0)',
        'rgb(34, 48, 49)': 'rgb(0, 160, 0)',
        'rgb(36, 36, 36)': 'rgb(0, 150, 0)',
        'rgb(38, 54, 55)': 'rgb(0, 140, 0)',
        'rgb(43, 60, 61)': 'rgb(0, 130, 0)',
        'rgb(44, 22, 21)': 'rgb(0, 120, 0)',
        'rgb(46, 46, 46)': 'rgb(0, 110, 0)',
        'rgb(47, 67, 68)': 'rgb(0, 100, 0)',
        'rgb(5, 4, 4)': 'rgb(0, 90, 0)',
        'rgb(53, 27, 26)': 'rgb(0, 80, 0)',
        'rgb(54, 54, 54)': 'rgb(0, 70, 0)',
        'rgb(54, 77, 78)': 'rgb(0, 60, 0)',
        'rgb(61, 32, 30)': 'rgb(0, 50, 0)',
        'rgb(61, 86, 87)': 'rgb(0, 40, 0)',
        'rgb(62, 62, 62)': 'rgb(0, 30, 0)',
        'rgb(67, 94, 95)': 'rgb(0, 20, 0)',
        'rgb(71, 71, 71)': 'rgb(0, 10, 0)',
        'rgb(73, 102, 103)': 'rgb(0, 100, 0)',
        'rgb(73, 38, 36)': 'rgb(0, 80, 0)',
        'rgb(77, 77, 77)': 'rgb(0, 60, 0)',
        'rgb(77, 81, 77)': 'rgb(0, 40, 0)',
        'rgb(79, 111, 112)': 'rgb(0, 20, 0)',
        'rgb(8, 15, 16)': 'rgb(0, 100, 0)',
        'rgb(81, 81, 81)': 'rgb(0, 150, 0)',
        'rgb(85, 120, 121)': 'rgb(0, 170, 0)',
        'rgb(87, 87, 87)': 'rgb(0, 190, 0)',
        'rgb(91, 125, 126)': 'rgb(0, 210, 0)',
        'rgb(91, 131, 131)': 'rgb(0, 0, 255)',
        'rgb(91, 47, 45)': 'rgb(255, 0, 0)',
        'rgb(95, 95, 95)': 'rgb(0, 230, 0)',
        'rgb(96, 137, 137)': 'rgb(0, 0, 255)',
        'rgb(255, 255, 255)': 'rgba(17, 17, 17, 0)'
    };

    useEffect(() => {
        const fetchArt = async () => {
            try {
                const response = await fetch('/handshake.json');
                const data = await response.json();
                if (Array.isArray(data)) {
           setFrames(data.map(line => line.replace(/rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g, (match) => colors[match] || match)));
                } else {
                    console.error('Data from Handshake.json is not an array');
                }
            } catch (error) {
                console.error('Error fetching ascii art:', error);
            }
        };
        fetchArt();

    }, []);


    useEffect(() => {
        if (frames.length === 0) return;
        const render = () => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
        };

        animationRef.current = setInterval(() => requestAnimationFrame(render), 1000 / 30);
        return () => {
            clearInterval(animationRef.current);
        };
    }, [frames]);

    useEffect(() => {
        if (frames.length > 0) {
            setAnimatedArt(frames[currentFrame])
        }
    }, [currentFrame, frames]);

    return <Container dangerouslySetInnerHTML={{__html: animatedArt}}/>;
};


export default AnimatedHandshake;
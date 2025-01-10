import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    pointer-events: none;
`;

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const latin = 'handcoin';
        const nums = '';
        const alphabet = latin + nums;
        const fontSize = 32;
        const columns = canvas.width / fontSize;
        const rainDrops = [];
        const animationSpeed = 40;

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.1)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = '#0F0';
            context.font = `${fontSize}px monospace`;

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.99) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }

            setTimeout(()=>{
                requestAnimationFrame(draw)
            },animationSpeed)

        };

        draw();

        return () => {
            cancelAnimationFrame(draw);
        };
    }, []);

    return <Canvas ref={canvasRef} />;
};

export default MatrixBackground;

import React, {useEffect, useRef} from "react";
import QRCodeStyling from "qr-code-styling";
import styled from 'styled-components';

const QRCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const QRCodeTitle = styled.h3`
    color: #00ff00;
    margin-bottom: 10px;
`;


const QRCodeDisplay = () => {
    const qrCodeRef = useRef(null);
    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        image:
            '/public/pumpfun.svg',
        dotsOptions: {
            color: "#00ff00",
            type: "rounded"
        },
        backgroundOptions: {
            color: '#2b2b2b',
            borderRadius: 10
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 20
        }
    });


    useEffect(() => {
        qrCode.append(qrCodeRef.current);
    }, []);

    useEffect(() => {
        qrCode.update({
            data: 'https://pump.fun/coin/HandCoin'
        });
    }, []);

    return (
        <QRCodeContainer>
            <QRCodeTitle>Scan to Buy</QRCodeTitle>
            <div ref={qrCodeRef}/>
        </QRCodeContainer>
    );
};


export default QRCodeDisplay;
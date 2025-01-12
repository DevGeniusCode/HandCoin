import React from 'react';
import QRCode from 'react-qr-code';
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
    const linkToEncode = 'https://pump.fun/coin/HandCoin';

    return (
        <QRCodeContainer>
            <QRCodeTitle>Scan to Buy</QRCodeTitle>
            <QRCode value={linkToEncode} size={256}  level="H" fgColor={'#00ff00'}/>
        </QRCodeContainer>
    );
};

export default QRCodeDisplay;
import React from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

const QRCodeContainer = styled.div`
    display: flex;
    justify-content: center;
     padding: 10px;
`;

const PumpfunQRCode = ({ tokenUrl }) => {
    if (!tokenUrl) {
        return <p>No Token url was provided.</p>
    }
    return (
        <QRCodeContainer>
            <QRCode value={tokenUrl} size={256} level="H"  bgColor={'transparent'} fgColor={'#00ff00'}/>
        </QRCodeContainer>
    );
};

export default PumpfunQRCode;
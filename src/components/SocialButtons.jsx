import React from 'react';

const SocialButtons = () => {
    const socialLinks = [
        {
            name: 'Telegram',
            url: 'https://t.me/HandCoinPortal',
            icon: '/telegram.svg',
        },
        {
            name: 'Twitter',
            url: 'https://x.com/HandCoin0',
            icon: '/x-twitter.svg',
        },
        {
            name: 'Pump.fun',
            url: 'https://pump.fun/coin/Azkg3WnHHWqwhfZGAcfyvRgEc3ikbXcmxy7obAbEpump',
            icon: '/pumpfun.svg',
        },
        {
            name: 'DEX Screener',
            url: 'https://dexscreener.com/solana/EWVXLh4zbdTWhLnVbXpyLQrrRa5Qg67amTqbJ95ynsmH',
            icon: '/dexscreener.svg',
        }
    ];

    return (
        <div className="social-buttons">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.disabled ? null : social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-button ${social.disabled ? 'disabled' : ''}`}
                   style={{pointerEvents: social.disabled ? 'none' : 'auto'}}
                   >
                    <img src={social.icon} alt={social.name} style={{height: '20px', width: '20px'}} />
                    {social.name}
                </a>
            ))}
        </div>
    );
};

export default SocialButtons;
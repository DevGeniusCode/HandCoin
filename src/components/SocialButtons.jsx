import React from 'react';

const SocialButtons = () => {
    const socialLinks = [
        {
            name: 'Telegram',
            url: 'https://t.me/HandCoinPortal',
            icon: 'fab fa-telegram', // Font Awesome icon
            // color: '#229ED9'

        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/HandCoin', // Dummy URL
            icon: 'fab fa-twitter', // Font Awesome icon
            // color: '#1DA1F2'
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/HandCoin',
            icon: 'fab fa-facebook', // Font Awesome icon
            // color: '#1877F2'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/HandCoin',
            icon: 'fab fa-instagram', // Font Awesome icon
            // color: '#E4405F'
        },
    ];

    return (
        <div className="social-buttons">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    style={{ backgroundColor: social.color}}
                >
                    <i className={social.icon}></i>
                    {social.name}
                </a>
            ))}
        </div>
    );
};

export default SocialButtons;
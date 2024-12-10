import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">Baby Gallery</div>
            <nav>
                <a href="/">홈</a>
                <a href="/gallery">갤러리</a>
                <a href="/about">소개</a>
            </nav>
        </header>
    );
}

export default Header;
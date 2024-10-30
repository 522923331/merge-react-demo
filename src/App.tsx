// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//
// const App = () => {
//     return (
//         <Router>
//             <div className="tab-bar">
//                 <Link to="/home">Home</Link>
//                 <Link to="/game">Game</Link>
//             </div>
//             <Routes>
//                 <Route path="/home" element={<HomePage />} />
//                 <Route path="/game" element={<GamePage />} />
//                 <Route path="/" element={<HomePage />} />
//             </Routes>
//         </Router>
//     );
// };
//
// const HomePage = () => <div>Welcome to the Home Page!</div>;
// const GamePage = () => <div>Let's play a game!</div>;
//
// export default App;


import '@telegram-apps/telegram-ui/dist/styles.css';
import React, { useState } from 'react';
import { AppRoot, Tabbar, TabsList } from '@telegram-apps/telegram-ui';
import './App.css';

const App = () => {
    const [selectedTab, setSelectedTab] = useState('home');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <AppRoot className="app-root">
            <div className="content-container">
                <div className="iframe-wrapper">
                    {selectedTab === 'home' && (
                        <iframe
                            src="https://testnet-glist.nal.network/game1/"
                            title="Home Page"
                            className="iframe-content"
                        />
                    )}
                    {selectedTab === 'game' && (
                        <iframe
                            src="https://testnet-glist.nal.network/game2/"
                            title="Game Page"
                            className="iframe-content"
                        />
                    )}
                </div>
                <TabsList className="tab-bar">
                    <Tabbar.Item
                        title="Home"
                        text="home"
                        selected={selectedTab === 'home'}
                        onClick={() => handleTabClick('home')}
                    />

                    <Tabbar.Item
                        title="Game"
                        text="game"
                        selected={selectedTab === 'game'}
                        onClick={() => handleTabClick('game')}
                    />
                </TabsList>
            </div>
        </AppRoot>
    );
};

export default App;


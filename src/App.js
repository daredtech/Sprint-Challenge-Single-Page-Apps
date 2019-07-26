import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

// temp
import CharacterList from './components/CharacterList';

export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
    {/* temp */}
    <CharacterList/>
  </main>
}
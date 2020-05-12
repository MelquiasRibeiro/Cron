import React from 'react';
import { StatusBar } from 'react-native';

import Home from './screens/cron';

const Main = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#58355e" />
            <Home />
        </>
    );
};

export default Main;

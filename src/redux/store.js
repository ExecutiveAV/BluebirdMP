import { configureStore } from '@reduxjs/toolkit';

import menuReducer from './menu/menu.slice';
import windowWidthReducer from './windowWidth/windowWidth.slice';
import categoriesReducer from './categories/categories.slice';
import portfolioReducer from './portfolio/portfolio.slice';

const store = configureStore({
    reducer: {
        isMenuOpen: menuReducer,
        windowWidth: windowWidthReducer,
        categories: categoriesReducer,
        portfolio: portfolioReducer
    }
});

export default store;
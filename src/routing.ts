import React, { LazyExoticComponent } from 'react';

const Page = React.lazy(() =>
    import('./pages/ComingSoon').then((module) => ({
        default: module.ComingSoon,
    }))
);

interface PageRouting {
    title: string;
    path: string;
    component: LazyExoticComponent<any>;
}

export const Routing: PageRouting[] = [
    {
        title: 'Default Page',
        path: '*',
        component: Page,
    },
];

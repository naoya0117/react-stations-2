import * as React from 'react';
import { Head } from '@/components/Head';

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
    description: string;
};

export const ContentLayout = ({ children, title, description}: ContentLayoutProps) => {
    return (
        <>
            <Head title={title} description={description} />
            <div className="flex flex-col">
                <main className="flex-grow min-w-screen">
                    {children}
                </main>
            </div>
        </>
    );
};
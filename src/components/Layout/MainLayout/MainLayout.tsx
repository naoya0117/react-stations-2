import React from "react";

type MainLayoutProps = {
    children: React.ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );

};
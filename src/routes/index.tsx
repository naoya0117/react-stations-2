import { Outlet, useRoutes } from "react-router-dom";
import { MainLayout } from "@/components/Layout";
import {Threads,NewThread} from "@/features/thread";
import { Discussion } from  "@/features/discussions";

const App = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};

export const AppRoutes = () => {
    const commonRoutes = [
        {
            element: <App />,
            children: [
                { path: '/', element: <Threads /> },
                { path: '/thread/new', element: <NewThread /> },
                { path: '/thread/:id', element: <Discussion />},
            ]
        }
    ]

    return useRoutes(commonRoutes);
}
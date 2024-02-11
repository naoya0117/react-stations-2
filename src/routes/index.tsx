import { Outlet, useRoutes } from "react-router-dom";
import { MainLayout } from "@/components/Layout";
import {Threads} from "@/features/thread";

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
            ]
        }
    ]

    return useRoutes(commonRoutes);
}
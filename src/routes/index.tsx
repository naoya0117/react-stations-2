import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "@/features/home";
import { MainLayout } from "@/components/Layout";

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
                { path: '/', element: <Home /> },
            ]
        }
    ]

    return useRoutes(commonRoutes);
}
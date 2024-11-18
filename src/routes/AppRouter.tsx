import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "../modules/shared/AppWrapper/AppWrapper";
import DashboardPage from "../modules/page/Dashboard";
import SettingsPage from "../modules/page/Settings";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppWrapper>
        <DashboardPage />
      </AppWrapper>
    ),
  },
  {
    path: "/settings",
    element: (
      <AppWrapper>
        <SettingsPage />
      </AppWrapper>
    ),
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}

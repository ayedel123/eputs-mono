import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SharedContextProvider } from "@eputs/context";

export const Route = createRootRoute({
    component: RootLayout,
});

function RootLayout() {
    return (
        <SharedContextProvider>
            <Outlet />
        </SharedContextProvider>
    );
}

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { SharedContextProvider } from "@eputs/context";

export const Route = createRootRouteWithContext<{
    count: number;
}>()({
    component: App,
});

function App() {
    return (
        <SharedContextProvider>
            <Outlet />
        </SharedContextProvider>
    );
}

export default Route;

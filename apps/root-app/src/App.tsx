import { loadRemote } from "@module-federation/enhanced/runtime";
import { lazy, Suspense } from "react";

import type RemoteButtonType from "../@mf-types/cool_module/Button";

const RemoteButton = lazy(
    () =>
        loadRemote("cool_module/Button") as Promise<{
            default: typeof RemoteButtonType;
        }>,
);

const App = () => {
    return (
        <Suspense fallback={<div>Loading button...</div>}>
            <h1>
                Hello, React + TypeScript + Webpack!
                <RemoteButton />
            </h1>
        </Suspense>
    );
};

export default App;

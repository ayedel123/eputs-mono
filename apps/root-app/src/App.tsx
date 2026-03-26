import { loadRemote } from "@module-federation/enhanced/runtime";
import { lazy, Suspense } from "react";

import type RemoteButtonType from "../@mf-types/cool_module/Button";
import type Module2Type from "../@mf-types/module2/Module2";

const RemoteButton = lazy(
    () =>
        loadRemote("cool_module/Button") as Promise<{
            default: typeof RemoteButtonType;
        }>,
);

const Module2 = lazy(
    () =>
        loadRemote("module2/Module2") as Promise<{
            default: typeof Module2Type;
        }>,
);

const App = () => {
    return (
        <Suspense fallback={<div>Loading button...</div>}>
            <h1>
                Hello, React + TypeScript + Webpack!
                <RemoteButton />
                <Module2 />
            </h1>
        </Suspense>
    );
};

export default App;

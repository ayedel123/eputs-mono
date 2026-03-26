import { loadRemote } from "@module-federation/enhanced/runtime";
import { lazy, Suspense } from "react";

import type RemoteButtonType from "../@mf-types/cool_module/Button";
import type Module2Type from "../@mf-types/module2/Module2";
import { SharedContextProvider, useCounter } from "@eputs/context";

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

const CounterContent = () => {
    const context = useCounter();

    return (
        <h1>
            {`RootApp контекст ${context.count}`}
            <Suspense fallback={<div>Loading button...</div>}>
                <RemoteButton context={context} />
                <Module2 context={context} />
            </Suspense>
        </h1>
    );
};

const App = () => {
    return (
        <SharedContextProvider>
            <CounterContent />
        </SharedContextProvider>
    );
};

export default App;

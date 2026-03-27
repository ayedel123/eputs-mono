import { createFileRoute, Link } from "@tanstack/react-router";
import { loadRemote } from "@module-federation/enhanced/runtime";
import { lazy, Suspense } from "react";

import type Module2Type from "../../@mf-types/module2/Module2";
import { useCounter } from "@eputs/context";
import { Route as IndexRoute } from "./index";

const Module2 = lazy(
    () =>
        loadRemote("module2/Module2") as Promise<{
            default: typeof Module2Type;
        }>,
);

export const Route = createFileRoute("/module2")({
    component: Module2Route,
});

function Module2Route() {
    const counterContext = useCounter();
    return (
        <Suspense fallback={<div>Загрузка Module 2...</div>}>
            <Module2 context={counterContext} />
            <Link
                to={IndexRoute.to}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
                Назад
            </Link>
        </Suspense>
    );
}

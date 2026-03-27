import { createFileRoute, Link } from "@tanstack/react-router";
import { loadRemote } from "@module-federation/enhanced/runtime";

import { useCounter } from "@eputs/context";
import { lazy, Suspense } from "react";
import type RemoteButtonType from "../../@mf-types/cool_module/Button";
import { Route as IndexRoute } from "./index";

const RemoteButton = lazy(
    () =>
        loadRemote("cool_module/Button") as Promise<{
            default: typeof RemoteButtonType;
        }>,
);

export const Route = createFileRoute("/cool-module")({
    component: CoolModuleRoute,
});

function CoolModuleRoute() {
    const counterContext = useCounter();

    return (
        <Suspense fallback={<div>Загрузка Cool Module...</div>}>
            <RemoteButton context={counterContext} />
            <Link
                to={IndexRoute.to}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
                Назад
            </Link>
        </Suspense>
    );
}

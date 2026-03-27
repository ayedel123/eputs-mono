import { createFileRoute, Link } from "@tanstack/react-router";
import { useCounter } from "@eputs/context";

import { Route as CoolModuleRoute } from "./cool-module";
import { Route as Module2 } from "./module2";

export const Route = createFileRoute("/")({
    component: IndexComponent,
});

function IndexComponent() {
    const { count } = useCounter();

    return (
        <div>
            <h1>Добро пожаловать в Eputs Mono, пользователей ЕПУТС {count}</h1>
            <p>Выберите модуль:</p>
            <nav>
                <ul>
                    <li>
                        <Link to={CoolModuleRoute.to}>
                            Cool Module (Button)
                        </Link>
                    </li>
                    <li>
                        <Link to={Module2.to}>Module 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

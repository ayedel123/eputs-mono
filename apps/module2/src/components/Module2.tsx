import { SharedContextType } from "@eputs/context";

const Module2 = (props: { context: SharedContextType }) => {
    const { count, decrement } = props.context;

    const handleClick = () => {
        decrement();
    };

    return (
        <div>
            ЕПУТС модуль 2
            <button onClick={handleClick}>уменьшить пользователей епутс: {count}</button>
        </div>
    );
};

export default Module2;

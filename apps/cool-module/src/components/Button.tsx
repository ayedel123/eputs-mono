import { SharedContextType } from "@eputs/context";

const Button = (props: { context: SharedContextType }) => {
    const { count, increment } = props.context;

    const handleClick = () => {
        increment();
    };

    return (
        <div>
            ЕПУТС модуль 1
            <button onClick={handleClick}>
                Увеличить пользователей епутс: {count}
            </button>
        </div>
    );
};

export default Button;

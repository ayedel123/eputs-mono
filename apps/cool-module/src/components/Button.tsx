import { SharedContextType } from "@eputs/context";

const Button = (props: { context: SharedContextType }) => {
    const { count, increment } = props.context;

    const handleClick = () => {
        increment();
    };

    return (
        <>
            <button onClick={handleClick}>
                Увеличить пользователей епутс: {count}
            </button>
        </>
    );
};

export default Button;

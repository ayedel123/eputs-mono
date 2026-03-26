import { useState } from "react";

const Button = () => {
    const [usersCount, setUsersCount] = useState(0);

    const handleClick = () => {
        if (usersCount === 0) {
            setUsersCount(1);
        }
    };

    return (
        <button onClick={handleClick}>
            Количество пользователей ЕПУТС: {usersCount}
        </button>
    );
};

export default Button;

import { useState } from "react";

const Module2 = () => {
    const [usersCount, setUsersCount] = useState(0);

    const handleClick = () => {
        if (usersCount === 0) {
            setUsersCount(1);
        }
    };

    return (
        <div>
            ЕПУТС модуль 2
            <button onClick={handleClick}>
                Количество пользователей модуля ЕПУТС2: {usersCount}
            </button>
        </div>
    );
};

export default Module2;

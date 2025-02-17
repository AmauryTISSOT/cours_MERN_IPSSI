import styles from "./Cards.module.css";

export const Cards = () => {
    const tasks = [
        {
            id: 1,
            title: "Faire la vaisselle",
            isDone: false,
        },
        {
            id: 2,
            title: "Promener le chien",
            isDone: true,
        },
        {
            id: 1,
            title: "Faire les courses",
            isDone: false,
        },
    ];

    return (
        <div className={styles.container}>
            <h2>Liste des tâches à faire</h2>
            <ul className={styles.bulletPoint}>
                {tasks
                    .filter((task) => !task.isDone)
                    .map((task) => (
                        <li key={task.id}>
                            <span
                                style={{
                                    textDecoration: task.isDone
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {task.title} {task.isDone ? "✅" : "❌​"}
                            </span>
                        </li>
                    ))}
            </ul>
            <h2>Liste des tâches effectuées</h2>
            <ul className={styles.bulletPoint}>
                {tasks
                    .filter((task) => task.isDone)
                    .map((task) => (
                        <li key={task.id}>
                            <span
                                style={{
                                    textDecoration: task.isDone
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {task.title} {task.isDone ? "✅" : ""}
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

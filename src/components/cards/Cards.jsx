import styles from "./Cards.module.css";

const TaskItem = ({ title, isDone }) => (
    <li>
        <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
            {title} {isDone ? "✅" : "❌"}
        </span>
    </li>
);

const TaskList = ({ title, tasks, isDone }) => (
    <div>
        <h2>{title}</h2>
        <ul className={styles.bulletPoint}>
            {tasks
                .filter((task) => task.isDone === isDone)
                .map((task) => (
                    <TaskItem
                        key={`${task.id}-${task.title}`}
                        title={task.title}
                        isDone={task.isDone}
                    />
                ))}
        </ul>
    </div>
);

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
            <TaskList
                title="Liste des tâches à faire"
                tasks={tasks}
                isDone={false}
            />
            <TaskList
                title="Liste des tâches effectuées"
                tasks={tasks}
                isDone={true}
            />
        </div>
    );
};

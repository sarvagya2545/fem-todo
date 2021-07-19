export const saveThemePreference = (theme) => {
    localStorage.setItem('todo-theme', theme);
}

export const saveTodoList = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export const getTodoList = () => localStorage.getItem('todos');
export const getThemePreference = () => localStorage.getItem('todo-theme');
export const saveThemePreference = (theme) => {
    localStorage.setItem('todo-theme', theme);
}

export const saveTodoList = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export const getTodoList = () => localStorage.getItem('todos');

export const getThemePreference = () => {
    const persistedColorPreference = window.localStorage.getItem('todo-theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
        return persistedColorPreference;
    }

    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
};
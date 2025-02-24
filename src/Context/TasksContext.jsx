import { createContext, useReducer, useContext, useMemo, useEffect } from "react";

const TasksContext = createContext(null);

const TasksReducerContext = createContext(null);

const initialTasks = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  searchText: ''
};

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks.tasks));
  }, [tasks.tasks]);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksReducerContext.Provider value={dispatch}>
        {children}
      </TasksReducerContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(state, action) {
  switch (action.type) {
    case "create": {
      return {
        tasks: [...state.tasks, action],
        searchText: ''
      };
    }
    case "delete": {
      return {
        tasks: state.tasks.filter((t) => t.id !== action.id),
        searchText: ''
      }
    }
    case "select": {
      return {
        tasks: [...state.tasks].sort((a, b) =>
          a[action.query].localeCompare(b[action.query])
        ),
        searchText: ''
      }
    }
    case 'searchText': {
      return {
        tasks: [...state.tasks],
        searchText: action.searchText
      }
    }
  }
}

export function useTasks() {
  return useContext(TasksContext);
}
export function useTasksDispatch() {
  return useContext(TasksReducerContext);
}

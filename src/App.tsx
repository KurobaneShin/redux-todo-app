import * as React from "react";
import "./App.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../src/app/hooks";

import TodoList from "../src/components/todosList";
import AddArea from "../src/components/addArea";
import { increment, toggleDone, removeItem } from "./features/todos/todosSlice";

function App() {
  const theme = createTheme();
  const dispatch = useDispatch();

  const todos = useAppSelector((state) => state.todos);

  const handleAddTask = (taskName: string) => {
    dispatch(
      increment({
        id: todos.length + 1,
        name: taskName,
        done: false,
      })
    );
  };

  const markAsDone = (taskId: number) => {
    dispatch(toggleDone(taskId));
  };

  const handleDeleteTask = (taskId: number) => {
    console.log(taskId);
    dispatch(removeItem(taskId));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters={true} maxWidth={false}>
        <Box sx={{ bgcolor: "#0a1929", height: "100vh" }}>
          <Container maxWidth="xl">
            <Typography sx={{ color: "white" }} variant="h2" align="center">
              To do
            </Typography>
            <Divider sx={{ bgcolor: "#808080" }} />

            <AddArea onEnter={handleAddTask} />

            <Box>
              {todos.map((item, index) => (
                <TodoList
                  key={index}
                  item={item}
                  onClick={markAsDone}
                  onDelete={handleDeleteTask}
                />
              ))}
            </Box>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

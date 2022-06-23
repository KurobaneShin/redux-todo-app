import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";

type Props = {
  item: {
    id: number;
    name: string;
    done: boolean;
  };
  onClick: (taskId: number) => void;
  onDelete: (taskId: number) => void;
};

const TodosList = ({ item, onClick, onDelete }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const markAsDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onClick(item.id);
  };

  const deleteTask = () => {
    onDelete(item.id);
  };

  return (
    <Box
      sx={{
        bgcolor: "#20212c",
        display: "flex",
        padding: "10px",
        alignItems: "center",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <Checkbox
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 34 },
          color: "#fff",
          "&.Mui-checked": {
            color: "#fff",
          },
        }}
        checked={isChecked}
        onChange={(e) => markAsDone(e)}
        color="default"
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "white",
            ...(isChecked === true && { textDecoration: "line-through" }),
          }}
          variant="h4"
          align="center"
        >
          {item.name}
        </Typography>
        <IconButton onClick={deleteTask}>
          <DeleteIcon
            sx={{ color: grey[50], justifySelf: "center", marginRight: 2 }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodosList;

import { useState, KeyboardEvent } from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Input from "@mui/material/Input";
import { grey } from "@mui/material/colors";

type Props = {
  onEnter: (taskName: string) => void;
};
const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.nativeEvent.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <Box
      sx={{
        border: 1,
        borderColor: grey[50],
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        p: "10px",
        m: "20px 0",
      }}
    >
      <AddIcon sx={{ color: grey[50] }} />
      <Input
        sx={{ color: grey[50] }}
        color="primary"
        fullWidth={true}
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Box>
  );
};

export default AddArea;

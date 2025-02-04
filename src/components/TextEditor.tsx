import { useState,useEffect } from "react";
import { UserState } from "../interfaces/userState.interface";
import { useSelector } from "react-redux";
import {  Container, Typography } from "@mui/material";
import ReactQuill from "react-quill";

export const TextEditor = () => {
    const user = useSelector((state: { user: UserState }) => state.user);
    const [editorContent, setEditorContent] = useState<string>("");
  
    useEffect(() => {
      setEditorContent(`${user.name} ${user.address} ${user.email} ${user.phone}`);
    }, [user]);
  
    return (
        <Container>
      <Typography variant="h4">Rich Text Editor</Typography>
      <ReactQuill value={editorContent} onChange={setEditorContent} />
    </Container>
    );
  };


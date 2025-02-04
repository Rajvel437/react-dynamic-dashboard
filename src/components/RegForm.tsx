import { Button, TextField, Container, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../interfaces/userState.interface";
import { userSlice } from "../store";

export const RegForm = () => {
    const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user);
  const [formData, setFormData] = useState<UserState>(user);
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = ""; 
        return ""; 
      }
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);
 
 
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = () => {
    dispatch(userSlice.actions.setUser(formData));
    setUnsavedChanges(false);
  };

  return (
    <Container>
      <Typography variant="h4">User Form</Typography>
      <TextField name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth />
      <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth />
      <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth />
      <TextField name="phone" label="Phone" value={formData.phone} onChange={handleChange} fullWidth />
      <Button onClick={handleSubmit}>Save</Button>
    </Container>
  )
}

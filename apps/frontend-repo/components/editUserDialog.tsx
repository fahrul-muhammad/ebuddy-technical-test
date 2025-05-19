"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "shared";

interface Props {
  open: boolean;
  user: User;
  onClose: () => void;
  onSave: (user: User) => void;
}

export default function EditUserDialog({ open, user, onClose, onSave }: Props) {
  const [formData, setFormData] = useState<User>(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField margin="dense" label="Name" name="fullName" fullWidth value={formData.fullName} onChange={handleChange} />
        <TextField margin="dense" label="Email" name="email" fullWidth value={formData.email} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onSave(formData)} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

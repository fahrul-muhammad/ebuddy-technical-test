"use client";

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "shared";
import { selectAuthUser, selectUpdateData } from "../store";
import { editUser, EditUserState } from "../store/slices/editUsers";
import { GetAllUsers } from "../store/slices/getAllUser";
import { LoginState } from "../store/slices/loginUser";
import EditUserDialog from "./editUserDialog";

interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  const dispatch: any = useDispatch();
  const { token }: LoginState = useSelector(selectAuthUser);
  const { isSuccess }: EditUserState = useSelector(selectUpdateData);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const updateData = (data: User) => {
    dispatch(editUser({ newData: data, token: token }));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(GetAllUsers(token));
    }
  }, [isSuccess]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="user table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Full Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" size="small" onClick={() => setSelectedUser(user)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedUser && (
        <EditUserDialog
          open={!!selectedUser}
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={(updatedUser) => {
            updateData(updatedUser);
            setSelectedUser(null);
          }}
        />
      )}
    </>
  );
}

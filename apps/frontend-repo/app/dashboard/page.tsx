"use client";

import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../../components/userTable";
import { selectAuthUser, selectUsersData } from "../../store";
import { GetAllUsers } from "../../store/slices/getAllUser";
import { LoginState } from "../../store/slices/loginUser";
export default function DashboardPage() {
  const dispatch: any = useDispatch();
  const { token }: LoginState = useSelector(selectAuthUser);
  const { data } = useSelector(selectUsersData);

  useEffect(() => {
    dispatch(GetAllUsers(token));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <UserTable users={data} />
    </Container>
  );
}

// "use client";

// import { Container, Typography } from "@mui/material";
// import { useState } from "react";
// import { User } from "shared";
// import UserTable from "../../components/userTable";

// export default function DashboardPage() {
//   const [users, setUsers] = useState<User[]>([
//     { id: "1", fullName: "John Doe", email: "john@example.com" },
//     { id: "2", fullName: "Jane Smith", email: "jane@example.com" },
//   ]);

//   const handleUpdateUser = (updatedUser: User) => {
//     setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Dashboard
//       </Typography>
//       <UserTable users={users} onUpdateUser={handleUpdateUser} />
//     </Container>
//   );
// }

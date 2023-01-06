import { useState, useEffect } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from "@mui/material";
import { getUsers, deleteUser } from "../service/api.js";
import { Link } from "react-router-dom";

// const Thead = styled(TableHead)`
//     background: #000000;
//     & > th {
//         color: #fff;
//     }
// `;


const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserDetails = async (id) => {
        deleteUser(id);
        getAllUsers();
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((user) => {
                        return (
                            <TableRow key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{ marginRight: "10px" }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
    );
}

export default AllUsers;
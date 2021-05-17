import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './componenets/app/NavBar'
import { fetchUsers, changeRole } from './redux/actions'

export default function AdminPage() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.admin.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (!users) {
        return (
            <div>
                <NavBar />
                <div>Loading...</div>
            </div>
        )
    }

    return (
        <div>
            <NavBar />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.email}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                {user.role}
                                <button className='btn btn-outline-info ml-1'
                                    onClick={() => dispatch(changeRole(user.id, (user.role.includes('USER')) ? 'ADMIN' : 'USER'))}
                                >
                                    {
                                        (user.role.includes('USER')) ? 'ADMIN' : 'USER'
                                    }
                                </button>
                            </td>

                            {(user.role.includes('BLOCK'))
                                ?
                                <td>BLOCKED
                                    <button
                                        className='btn btn-outline-success ml-1'
                                        onClick={() => {
                                            const newRole = (user.role.includes('USER')) ? 'USER' : 'ADMIN'
                                            console.log(newRole)
                                            dispatch(changeRole(user.id, newRole))
                                        }}
                                    >UNBLOCK</button>
                                </td>
                                :
                                <td>ACTIVE
                                    <button
                                        className='btn btn-outline-danger ml-1'
                                        onClick={() => {
                                            const newRole = (user.role.includes('USER')) ? 'USER_BLOCKED' : 'ADMIN_BLOCKED'
                                            console.log(newRole)
                                            dispatch(changeRole(user.id, newRole))
                                        }
                                        }
                                    >BLOCK</button>
                                </td>
                            }
                        </tr>
                    )

                    }

                </tbody>
            </table>
        </div>
    )
}
/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import UserItem from './userItem';
import { getUsers } from '../store/users/usersSlice';

const UserContainer = () => {
    const { users, isLoading, error } = useSelector((store) => store.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    if(isLoading){
        return <div>Loading...</div>
    } 
    if (error) {
        return <div>Unknown Error</div>
    } 
    

    return (
        <ul>
            {users.map((item, index) => 
                <UserItem key={index} first={item.first} last={item.last}/>
            )}
        </ul>
    )
}

export default UserContainer
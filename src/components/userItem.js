/* eslint-disable */
import React from "react";

const UserItem = (props) => {
    console.log(props)
    return (
        <div>
            <li><h1>full name: {props.first}, {props.last}</h1></li>
        </div>
    )
}

export default UserItem;
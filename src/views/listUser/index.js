import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/index";
import List from "../../components/List/index";
import Footer from "../../components/Footer/index";

import usersMock from "../../mock/users";

function ListUser() {
    const [usersFiltered, setUsersFiltered] = useState([]);
    const [filter, setFilter] = useState('');

    const getUserData = (user, filterUser) => {
        if (!filterUser) {
            return user.dataUsers;
        } else {        
            return user.dataUsers.filter(item => {
            return item.user.toUpperCase().search(filterUser.toUpperCase()) !== -1;
            });
        }
    };

    useEffect(() => {
        setUsersFiltered(getUserData(usersMock, filter));
    }, [filter]);

    return (
        <>
            <Header changeFilter={setFilter}/>
            <List usersFiltered={usersFiltered}/>
            <Footer />
        </>       
    )
}

export default ListUser;
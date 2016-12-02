import React from 'react';
import { Table,Icon,Button,Tabs } from 'antd';
import styles from './TableUser.less';
import reqwest from 'reqwest';

//引入元素
import UserList from '../../components/TableUser/UserList';

//采用stateless的写法
const TableUser = ({
})=>{
    


    const userListProps = {
        total:3,
        current:1,
        loading:false,
        dataSource:[
            {
                name: '张三',
                age: 23,
                address: '成都',
            },
            {
                name: '李四',
                age: 24,
                address: '杭州',
            },
            {
                name: '王五',
                age: 25,
                address: '上海',
            },
        ]
    };
    return(
        <div>
            <UserList {...userListProps}/>
        </div>
    )
};

export default TableUser;

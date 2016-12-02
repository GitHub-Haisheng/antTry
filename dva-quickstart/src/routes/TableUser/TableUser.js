import React,{components,PropTypes} from 'react';
import { Table,Icon,Button,Tabs } from 'antd';
import styles from './TableUser.less';
import reqwest from 'reqwest';
// 引入connect工具函数
import { connect } from "dva";

//引入元素
import UserList from '../../components/TableUser/UserList';

//采用stateless的写法
const TableUser = ({
    location,dispatch,users
})=>{
    
    const {
        loading, list, total, current,currentItem,modalVisible,modalType
    } = users;
    console.log(users)

    const userListProps = {
        dataSource:list,
        total,
        current,
        loading,
        // dataSource:[
        //     {
        //         name: '张三',
        //         age: 23,
        //         address: '成都',
        //     },
        //     {
        //         name: '李四',
        //         age: 24,
        //         address: '杭州',
        //     },
        //     {
        //         name: '王五',
        //         age: 25,
        //         address: '上海',
        //     },
        // ]
    };

    return(
        <div>
            <UserList {...userListProps}/>
        </div>
    )
};

// 指定订阅数据，这里关联了 users
function mapStateToProps({users}){
    return users;
};

export default connect(mapStateToProps)(TableUser);

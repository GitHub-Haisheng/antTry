import React,{Component,PropTypes} from 'react';
import { Table,Icon,Button,Tabs,Popconfirm } from 'antd';
// import styles from './TableUser.less';
import reqwest from 'reqwest';

//采用stateless的写法
const TableUser = ({
    total,
    current,
    loading,
    dataSource
})=>{
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="#">{text}</a>,
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <p>
          <a onClick={()=>{}}>编辑</a>
          &nbsp;
          <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
            <a>删除</a>
          </Popconfirm>
        </p>
      ),
    }];

    // 定义分页对象
    const pagination = {
        total,
        current,
        pageSize: 10,
        onChange: ()=>{},
    };


    return(
        <div>
            <Table columns={columns}
                dataSource={dataSource}
                loading={loading}
                rowKey={record=>record.id}
                pagination={pagination}
            />
        </div>
    )
};
TableUser.propType = {
  TableUser:PropTypes.object
}

export default TableUser;
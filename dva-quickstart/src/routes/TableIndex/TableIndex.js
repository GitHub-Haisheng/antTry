import React from 'react';
import { Table,Icon,Button,Tabs } from 'antd';
import styles from './TableIndex.less';
import reqwest from 'reqwest';

const TabPane = Tabs.TabPane;

const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <span>
            <a href="#">Action 一 {record.name}</a>
            <span className="ant-divider" />
            <a href="#">Delete</a>
            <span className="ant-divider" />
            <a href="#" className="ant-dropdown-link">
                More actions<Icon type="down" />
            </a>
        </span>
        ),
}];

const columns2 = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const pagination = {
    total: data.length,
    showSizeChanger: true,
    onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange(current) {
        console.log('Current: ', current);
    },
};

function callback(key) {
      // console.log('card',key);
};

class TableIndex extends React.Component{

    constructor(props){
        super(props);
        // 设置初始值
        this.state = {
            data: [],
            pagination: {},
            loading: false,
        }
    }

    fetch(params = {}) {
        // reqwest用于浏览器异步HTTP请求
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
            results: 10,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = this.state.pagination;
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState ({
            loading: false,
            data: data.results,
            pagination,
          });
        });
    }

    handleTableChange(pagination, filters, sorter) {

        // render里面的this指的是TableIndex,用bind(this)可以使函数内的this指向为TableIndex，否则就是调用当前方法的组件
        // handleTableChange = (pagination, filters, sorter)=> {
        // 用这种方式写的方法this指向直接为TableIndex,(可能是箭头函数没有自己的this，内部的this就是外部代码块的this--this指向的固定化)
        
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
          pagination: pager,
        });
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });

    } 

    componentDidMount() {
        this.fetch();
    }

    render (){
        return(
            <div>  
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Tab 1" key="1">
                        <h2>分页表格</h2>
                        <Table columns={columns} dataSource={data} pagination={pagination}/>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <h2>ajax表格</h2>
                        <Table columns={columns2}
                        rowKey={record => record.registered}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        onChange={this.handleTableChange.bind(this)}
                    />
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <Table/>
                    </TabPane>
                </Tabs>
            </div>
        )
    };
};

export default TableIndex;

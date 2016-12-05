import { hashHistory } from 'dva/router';
//namespace:model state 在全局state所用的key,state是默认数据
export default{
    namespace:"users",

    state:{

        list:[],
        total:null,
        loading:false,//控制加载状态
        current:null,//当前分页信息
        currentItem:{},//当前操作的用户对象
        modalVisible:false,//弹出窗的显示状态
        modalType:'create'//弹出窗的类型
    },

    effects:{
        *query(){},//*表示这个函数式Generator函数
        *create(){},
        *'delete'(){},
        *update(){},
    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen(location =>{
                if(location.pathname === '/demo'){
                    // 如果type是在modal以外调用需要添加namespace
                    dispatch({
                        type:"querySuccess",
                        payload:{}
                    })
                }
            })
        }
    },

    reducers:{
        showLoading(){},//控制加载状态的reducer
        showModal(){},//控制Model显示状态的reducer
        hideModal(){},
        querySuccess(state){
            console.log('state',state)
            const mock = {
                total: 3,
                current: 1,
                loading: false,
                list: [
                {
                    id: 1,
                    name: '张三',
                    age: 23,
                    address: '成都',
                },
                {
                    id: 2,
                    name: '李四',
                    age: 24,
                    address: '杭州',
                },
                {
                    id: 3,
                    name: '王五',
                    age: 25,
                    address: '上海',
                },
                ],

            };
            return {...state, ...mock, loading: false};
        },
        createSuccess(){},
        deleteSuccess(){},
        updateSuccess(){}
    }

}
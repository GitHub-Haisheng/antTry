//namespace:model state 在全局state所用的key,state是默认数据
export default{
    namespace:"TableUser",

    state:{

        list:[],
        total:null,
        loading:false,//控制加载状态
        current:null,//当前分页信息
        currentItem:{},//当前操作的用户对象
        modalVisible:false,//弹出窗的显示状态
        modalType:'create'//弹出窗的类型
    },

    effect:{
        *query(){},//*表示这个函数式Generator函数
        *create(){},
        *'delete'(){},
        *update(){},
    },

    reducer:{
        showLoading(){},//控制加载状态的reducer
        showModal(){},//控制Model显示状态的reducer
        hideModal(){},
        querySuccess(){},
        createSuccess(){},
        deleteSuccess(){},
        updateSuccess(){}
    }

}
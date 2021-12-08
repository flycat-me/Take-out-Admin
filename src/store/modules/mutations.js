export const userStatus = (state,user) =>{
    if(user){
        state.currentUser = user.username
        state.isLogin = true
        state.token = user.token
    }else if(user == null){
        sessionStorage.setItem("userName",null);
        sessionStorage.setItem("token","");
        state.currentUser = null;
        state.isLogin = false;
        state.token = "";
    }
}
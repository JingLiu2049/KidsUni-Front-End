import store from 'store'
const USER = 'user_key'
const storeUtil = {
    setUser(userObj){
        store.set(USER,userObj)
    },
    getUser(){
        return store.get(USER)||{}
    },
    removeUser(){
        store.remove(USER)
    }
}
export default storeUtil
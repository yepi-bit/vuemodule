import store from '../store'

export function hasIsBtn(isBtn) {
    const myHasIsBtn = store.getters.info
    console.log(myHasIsBtn.indexOf(isBtn) > -1)
    return myHasIsBtn.indexOf(isBtn) > -1
}
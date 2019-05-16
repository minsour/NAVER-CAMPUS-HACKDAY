import { observable, action } from 'mobx';

export class ClickHandleStore {
    @observable drawerOpen = false

    @action
    handleDrawerOpen = () => {
        this.drawerOpen = true
    };

    @action
    handleDrawerClose = () => {
        this.drawerOpen = false
    };
}
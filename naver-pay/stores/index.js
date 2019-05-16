import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';
import { ClickHandleStore } from './ClickHandleStore';
const isServer = !process.browser
useStaticRendering(isServer)

class Store {
  constructor(isServer, initialData = {}) {
    this.clickHandleStore = new ClickHandleStore(this)
  }
}

let store = null

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}

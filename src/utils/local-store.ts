import localforage from 'localforage'

const localStore = localforage.createInstance({
  name: 'store1',
})

export { localStore }

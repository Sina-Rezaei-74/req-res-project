import Client from './clients/axiosClient'

const resource = '/users'

export default {
    get(page) {
        return Client.get(`${resource}?page=${page}`)
    },
    getDelay(time) {
        return Client.get(`${resource}?delay=${time}`)
    },
    show(id) {
        return Client.get(`${resource}/${id}`)
    },
    create(payload) {
        return Client.post(`${resource}/create`, payload)
    },
    update(id, payload) {
        return Client.put(`${resource}/${id}/edit`, payload)
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },
}
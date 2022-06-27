import UsersRepository from './usersRepository'

const repositories = {
    'users': UsersRepository,
}

export default {
    get: name => repositories[name]
}
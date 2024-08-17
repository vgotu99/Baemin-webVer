export const isAuthenticated = () => {
    return localStorage.getItem('currentUser') !== null
}
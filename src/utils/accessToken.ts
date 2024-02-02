export function isAccessToken() {
    const token = sessionStorage.getItem('auth')

    if (!token) {
        return false
    }

    const item = JSON.parse(token)
    const now = new Date()

    if (now.getTime() > item.expiry) {
        sessionStorage.removeItem('auth')
        return false
    }

    return true
}

export function setAccessToken(token: string) {
    const now = new Date()
    const item = {
        accessToken: token,
        expiry: now.getTime() + 180 * 60000, // 3 hours
    }
    sessionStorage.setItem('auth', JSON.stringify(item))
}

export function getAccessToken(): string | null {
    const token = sessionStorage.getItem('auth')

    if (!token) {
        return null
    }

    const item = JSON.parse(token)

    return item.accessToken
}

export function deleteAccessToken() {
    sessionStorage.removeItem('auth')
}

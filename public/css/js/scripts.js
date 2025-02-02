function socialLogin(provider) {
    if (provider === 'google') {
        window.location.href = "/auth/google"; // Backend route for Google OAuth
    } else if (provider === 'facebook') {
        window.location.href = "/auth/facebook"; // Backend route for Facebook OAuth
    }
}

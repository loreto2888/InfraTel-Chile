export const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate an API call for user authentication
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store token in local storage
        return true;
    }
    return false;
};

export const logout = (): void => {
    localStorage.removeItem('token'); // Remove token from local storage
};

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return token !== null; // Check if token exists
};
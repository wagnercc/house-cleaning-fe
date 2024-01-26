const BASE_URL = 'http://localhost:3000';

export const fetchCustomerData = async () => {
    const response = await fetch(`${BASE_URL}/customers`);

    if (!response) {
        alert("issue on response");
        throw new Error('network response was not ok');
    }

    return response.json();
}

export const saveNewUserData = async (userData) => {
    console.log('user data', userData)
    const response = await fetch(`${BASE_URL}/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    if (!response) {
        alert("issue on response");
        throw new Error('network response was not ok');
    }

    return response.json();
}
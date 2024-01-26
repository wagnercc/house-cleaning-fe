const BASE_URL = 'http://localhost:3000';

export const fetchNearestCustomerList = async () => {
    const response = await fetch(`${BASE_URL}/nearest-customers`);

    if (!response) {
        alert("issue on response");
        throw new Error('network response was not ok');
    }

    return response.json();
}

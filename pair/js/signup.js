async function addTokenToHeader(headers) {
    // Get the login token from the cookie
    const cookies = document.cookie.split(';');
    let loginToken = null;

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');

        if (name === 'login') {
            loginToken = value;
            break;
        }
    }

    // Add the token to the headers
    if (loginToken) {
        headers['token'] = loginToken;
    } else {
        console.error('Login token not found in the cookie.');
    }
}

async function loginUser() {
    const Url = 'https://api.wa.my.id/api/signup';
    const URLGCF = document.getElementById('urlGcf').value;
    const SECRET = document.getElementById('secretBox').value;

    const loginDetails = {
        url: URLGCF,
        secret: SECRET,
    };

    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        // Call the function to add the token to the headers
        await addTokenToHeader(headers);

        const response = await fetch(Url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(loginDetails),
        });

        const responseData = await response.json();

        const token = responseData.token;

        if (token !== undefined) {
            document.cookie = `token=${token}; path=/`;
            console.log('Login successful');
            window.location.href = 'codepair.html';
        } else {
            console.error('Token is undefined. Login failed.');
        }
    } catch (error) {
        console.error('Error during login:', error.message);
    }
}

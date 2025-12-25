import { fail, type Actions } from '@sveltejs/kit';

type LoginResponse = {
    user_id: string;
    username: string;
    session_token: string;
    refresh_token: string;
};

export const actions: Actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username') as string;
        const password = data.get('password') as string;
        if (!username || !password) {
            return fail(400, { username, missing: true });
        }
        const res = await fetch('https://api.ahogehub.org/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
            mode:"cors"
        });
        if (!res.ok) {
            return fail(res.status, { message: 'Login failed', incorrect: true });
        }
        const response = (await res.json()) as LoginResponse;
        cookies.set('session_token', response.session_token, {
            path: '/',
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7
        });
        cookies.set('refresh_token', response.refresh_token, {
            path: '/',
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 30 
        });
        return { success: true, user: { user_id: response.user_id, username: response.username } };
    },
    signup: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username') as string;
        const password = data.get('password') as string;
        if (!username || !password) {
            return fail(400, { username, missing: true });
        }
        const res = await fetch('https://api.ahogehub.org/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
            mode:"cors"
        });
        if (!res.ok) {
            return fail(res.status, { message: 'Signup failed' });
        }
        const response = (await res.json()) as LoginResponse;
        cookies.set('session_token', response.session_token, {
            path: '/',
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7
        });
        cookies.set('refresh_token', response.refresh_token, {
            path: '/',
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 30
        });
        return { success: true, user: { user_id: response.user_id, username: response.username }};
    }
};

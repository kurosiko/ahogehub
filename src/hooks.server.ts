import type { Handle } from "@sveltejs/kit";

type SessionLogin = {
    user_id: string;
    username: string;
    message: string;
}
type RefreshLogin = {
    user_id: string;
    username: string;
    refresh_token:string;
    session_token:string;
    message: string;
}

export const handle: Handle = async ({ event, resolve }) => {
    const session_token = event.cookies.get('session_token');
    const refresh_token = event.cookies.get('refresh_token');
    if (session_token) {
        const session_login_response = await fetch('https://api.ahogehub.org/login/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ session_token }),
            mode:"cors"
        });
        if (session_login_response.ok) {
            const session_login_json = await session_login_response.json() as SessionLogin;
            event.locals.user = {
                user_id: session_login_json.user_id,
                username: session_login_json.username
            };
            return resolve(event);
        }
    }
    if (refresh_token) {
        const refresh_login_response = await fetch('https://api.ahogehub.org/login/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh_token }),
            mode:"cors"
        });
        if (refresh_login_response.ok) {
            const refresh_login_json = await refresh_login_response.json() as RefreshLogin;
            event.cookies.set('session_token', refresh_login_json.session_token, {
                path: '/',
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 24 * 7
            });
            event.cookies.set('refresh_token', refresh_login_json.refresh_token, {
                path: '/',
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 24 * 30
            });
            event.locals.user = {
                user_id: refresh_login_json.user_id,
                username: refresh_login_json.username
            };
            return resolve(event);
        }
    }
    return await resolve(event);
}
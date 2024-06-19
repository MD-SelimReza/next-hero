import { NextResponse } from "next/server"
import { cookies } from 'next/headers'

export const middleware = (request) => {
    const token = cookies(request).get("next-auth.session-token")
    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next();
};

export const config = {
    matcher: '/dashboard',
}
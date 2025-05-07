import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('authToken');

    if (!token) {
        return NextResponse.redirect(new URL('/api/login', req.url));
    }

    // Optionally, you can add token validation logic here

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'], // Apply middleware to specific routes
};
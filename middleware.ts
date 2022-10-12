import { NextRequest, NextResponse } from 'next/server'
import localeRedirect from './middlewares/localeRedirect'

export async function middleware(req: NextRequest) {
    const localeRedirectInstance = await localeRedirect(req)
    if (localeRedirectInstance) return localeRedirectInstance()
}

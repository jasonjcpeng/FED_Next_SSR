import { NextRequest, NextResponse } from 'next/server'
const locale = require('locale')

const PUBLIC_FILE = /\.(.*)$/

export default async function (req: NextRequest) {
    if (
        req.nextUrl.pathname.startsWith('/_next') ||
        req.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return
    }

    const locales = new locale.Locales(req.headers.get('accept-language'))
    const lang = locales[0]?.language
    const reg = new RegExp(`${req.nextUrl.origin}/${lang}`)

    if (lang && !reg.test(req.nextUrl.href)) {
        return function () {
            return NextResponse.redirect(
                new URL(`/${lang}${req.nextUrl.pathname}`, req.url)
            )
        }
    }
}

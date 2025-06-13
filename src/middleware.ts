export {default} from "next-auth/middleware"

export const config = {
    matcher : ['/dashboard/:path*', '/dashboard', '/dashboard/writeLog', '/dashboard/myLog', '/dashboard/profile', '/dashboard/feedback']
}
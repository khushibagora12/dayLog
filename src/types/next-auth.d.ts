declare module "next-auth" {

    interface Session {

        user : {
            id : String,
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface jwt{
        id : String,
    }
}
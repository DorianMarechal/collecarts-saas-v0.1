import { auth } from "./auth";
import { headers } from "next/headers";

export const getSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    console.log(session);
    return session;
}

export const getUser = async () => {
    const session = await getSession();
    if (!session) return null;
    const user = session.user;
    return user;
}

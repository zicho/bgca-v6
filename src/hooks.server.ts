import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {

    if (event.url.pathname !== "/login") redirect(303, "/login")

    const response = await resolve(event) // Stage 2

    // Stage 3

    return response
}
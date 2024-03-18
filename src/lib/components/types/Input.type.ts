import type { InputConstraint } from "sveltekit-superforms"

export type TInput = {
    id: string,
    label: string,
    value: string,
    required?: boolean,
    placeholder?: string,
    errors?: string[] | undefined,
    type: "text" | "password",
    classes?: string,
    constraints?: InputConstraint
}
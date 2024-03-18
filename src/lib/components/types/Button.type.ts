export type TButton = {
    id: string,
    label: string,
    style?: 
        "neutral" |
        "primary" |
        "secondary" |
        "accent" |
        "ghost" |
        "link" |
        "success" |
        "info" |
        "warning" |
        "error"
    disabled?: boolean,
    class?: string,
    type?: "button" | "submit"
}
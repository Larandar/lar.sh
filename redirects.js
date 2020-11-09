const defaultRedirect = "https://larandar.io"

const Path = path => `/${path}`
const redirects = {
    [Path("github")]: "https://github.com/Larandar",
    [Path("gitlab")]: "https://gitlab.com/larandar"
}

export { defaultRedirect, redirects }

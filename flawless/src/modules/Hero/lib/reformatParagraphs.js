import { urlFor } from "modules/common/helpers/client"

export function reformatParagraphs(icons, paragraphs) {
    const array = []

    for (const i in paragraphs) {
        const icon = urlFor(icons[i]).url() || ""
        const obj = { icon, text: paragraphs[i] }
        array.push(obj)
    }

    return array
}

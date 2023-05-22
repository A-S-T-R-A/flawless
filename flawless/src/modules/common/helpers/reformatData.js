import { urlFor } from "modules/common/helpers/client"

export function reformatData(icons, text) {
    const array = []

    for (const i in text) {
        const icon = urlFor(icons[i]).url() || ""
        const obj = { icon, text: text[i] }
        array.push(obj)
    }

    return array
}

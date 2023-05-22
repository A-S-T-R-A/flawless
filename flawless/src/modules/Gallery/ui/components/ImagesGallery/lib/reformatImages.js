import { urlFor } from "modules/common/helpers/client"

export function reformatImages(images) {
    const array = []

    for (const i in images) {
        const image = urlFor(images[i]).url() || ""
        console.log(image)

        array.push(image)
    }

    return array
}

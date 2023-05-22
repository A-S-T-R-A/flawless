import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: "bvy3ymgb",
    dataset: "production",
    apiVersion: "2023-05-19",
    useCdn: true,
    token: "sk8aJooxiYs9EqdJa2xK8SLPsKzVFGeo6GlqS3q5djgbar8HAQ7Z4gLl15gb7ikU7VYgoNFrwLN5qf8sn9kmdpJunMU2ebS4JXZ2T6jlphykRHVOmrw9lB3mY1mFSEUTUzp62tkKLlpGo9xakY2Xx05qUnpLEEhKMN9xeveZoYCjhwwSIxf6",
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)

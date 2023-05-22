export function classNames(cls, mods = {}, additional = []) {
    const modClassNames = Object.entries(mods)
        .filter(([className, value]) => {
            return Boolean(value)
        })
        .map(([className]) => className)

    const additionalClassNames = additional.filter(Boolean)

    return [cls, ...modClassNames, ...additionalClassNames].join(" ")
}

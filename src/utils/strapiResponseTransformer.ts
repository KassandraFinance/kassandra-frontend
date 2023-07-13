// Strapi Graphl's response is so verbose (a lot of `attributes`, `data` and etc) this function just sanitizes it.
// They're talking on making this better, take a look at this post to see if they've done something yet.
// https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400/9
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flattenObj<T>(data: any): T {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isObject = (data: any) =>
    Object.prototype.toString.call(data) === '[object Object]'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isArray = (data: any) =>
    Object.prototype.toString.call(data) === '[object Array]'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flatten = (data: any) => {
    if (!data.attributes) return data

    return {
      ...(data.id && { id: data.id }),
      ...data.attributes
    }
  }

  if (isArray(data)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map((item: any) => flattenObj(item))
  }

  if (isObject(data)) {
    if (isArray(data.data)) {
      data = [...data.data]
    } else if (isObject(data.data)) {
      data = flatten({ ...data.data })
    } else if (data.data === null) {
      data = null
    } else {
      data = flatten(data)
    }

    for (const key in data) {
      data[key] = flattenObj(data[key])
    }

    return data
  }

  return data
}

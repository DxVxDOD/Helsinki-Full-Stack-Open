import partType from "./part.type"

export default interface courseType {
    id: number,
    name: string,
    parts: partType[]
}
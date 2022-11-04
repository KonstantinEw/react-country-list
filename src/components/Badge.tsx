import { BadgeLable } from "../types/BadgeLable"
import { Color } from "../types/Colors"


interface IBadge {
    lable: BadgeLable,
    count: number,
    color: Color,
}

export const Badge = ({ lable, count, color }: IBadge) => {
    return (
        <span className={`badge bg-${color}`}>{lable}:{count}</span>
    )
}
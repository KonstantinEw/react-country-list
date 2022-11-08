import { BadgeLabel } from "../types/badgeLabel"
import { Color } from "../types/colors"
interface IBadge {
    label: BadgeLabel,
    count: number,
    color: Color,
}

export const Badge = ({ label, count, color }: IBadge) => {
    return (
        <span className={`badge bg-${color}`}>{label}:{count}</span>
    )
}
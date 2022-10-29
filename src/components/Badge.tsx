
import { Fragment } from "react"
import { Color } from "../types"

interface Ibadge {
    population: number,
    area: number,
}

export const Badge = ({ area, population }: Ibadge) => {
    return (
        <>
            <span className={`badge text-bg-${Color.Primary} `}>{`area: ${area}`}</span>
            <span className={`badge text-bg-${Color.Dark}`}>{`population: ${population}`}</span>
        </>
    )
}
import { useEffect, useRef } from "react"
import { init } from './el'

export default function NotFoundPage() {
    const canvasRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (canvasRef.current) {
            init(canvasRef.current)
        }
    }, [])

    return (
        <div className="page not-found-page">
            <p>Not Found</p>
            <div ref={canvasRef} style={{ width: 800, height: 500 }} />
        </div>
    )
}

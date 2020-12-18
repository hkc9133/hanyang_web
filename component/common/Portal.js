import { useState,useRef,useEffect } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children, elementId }) {

    const ref = useRef()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.getElementById(elementId)
        setMounted(true)
    }, [elementId])

    // const rootElement = useMemo(() => document.getElementById(elementId), [
    //     elementId,
    // ])

    return mounted && ref.current != null ? createPortal(children, ref.current) : null
}

export default Portal

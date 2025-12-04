import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ZoomImageProps {
    src: string;
    alt?: string;
}

export default function ZoomImage({ src, alt = "" }: ZoomImageProps) {
    const [expanded, setExpanded] = useState(false);

    // Evitar scroll del body cuando el modal está abierto
    useEffect(() => {
        if (expanded) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = prev; };
        }
    }, [expanded]);

    // Cerrar con Escape
    const onKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") setExpanded(false);
    }, []);

    useEffect(() => {
        if (expanded) {
            window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
        }
    }, [expanded, onKey]);

    return (
        <>
            <motion.img
                src={src}
                alt={alt}
                onClick={() => setExpanded(true)}
                className="cursor-pointer rounded-xl w-full"
                whileHover={{ scale: expanded ? 1 : 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />

            {createPortal(
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[99999] p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setExpanded(false)}
                        >
                            <motion.img
                                src={src}
                                alt={alt}
                                // Forzar ancho (prueba)
                                className="w-[95vw] h-auto max-h-[95vh] object-contain cursor-pointer"
                                initial={{ scale: 0.85 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.85 }}
                                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
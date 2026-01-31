"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-2xl font-bold">Qualcosa è andato storto!</h1>
            <p className="text-muted-foreground">
                Si è verificato un errore imprevisto.
            </p>
            <div className="flex gap-4">
                <Button onClick={() => reset()}>Riprova</Button>
            </div>
        </div>
    );
}

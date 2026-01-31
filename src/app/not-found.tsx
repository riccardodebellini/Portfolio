import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Pagina non trovata</h2>
            <p className="text-muted-foreground w-[300px] md:w-[400px]">
                Spiacenti, la pagina che stai cercando non esiste o è stata spostata.
            </p>
            <Button asChild>
                <Link href="/">Ritorna alla Home</Link>
            </Button>
        </div>
    );
}

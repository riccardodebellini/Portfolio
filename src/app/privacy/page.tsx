
import React from "react";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Privacy Policy | Riccardo Debellini",
  description: "Informativa sulla privacy per il sito portfolio di Riccardo Debellini.",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Titolare del Trattamento</h2>
        <p>
          Il titolare del trattamento dei dati è <strong>Riccardo Debellini</strong>.
          <br />
          Per qualsiasi richiesta relativa alla privacy, puoi contattarmi tramite la pagina{" "}
          <a href="/contatti" className="underline hover:text-foreground">
            Contatti
          </a>
          .
        </p>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Tipologia di Dati Raccolti</h2>
        <p>
          Questo sito è progettato per ridurre al minimo la raccolta di dati personali.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dati di Navigazione:</strong> Utilizziamo <strong>Vercel Web Analytics</strong> per raccogliere
            statistiche anonime sull&apos;utilizzo del sito (es. pagine visitate, tempo di permanenza, paese di origine,
            tipo di dispositivo).
          </li>
          <li>
            <strong>Dati Volontari:</strong> Se decidi di contattarmi via email o form, trattengo i dati forniti
            (es. indirizzo email, nome) esclusivamente per risponderti.
          </li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Cookie e Vercel Analytics</h2>
        <p>
          <strong>Questo sito NON utilizza cookie di profilazione o tracciamento pubblicitario.</strong>
        </p>
        <p>
          Per le statistiche utilizziamo <strong>Vercel Web Analytics</strong> in modalità <em>privacy-friendly</em>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Non vengono installati cookie sui dispositivi degli utenti per scopi analitici.
          </li>
          <li>
            Non vengono memorizzati indirizzi IP completi.
          </li>
          <li>
            Gli utenti non vengono tracciati attraverso diversi siti o giornate (mancanza di "cross-site tracking").
          </li>
        </ul>
        <p className="text-sm text-muted-foreground mt-2">
          Poiché non vengono utilizzati cookie o identificatori persistenti per il tracciamento, ai sensi delle
          linee guida del Garante Privacy e del GDPR, non è richiesto un banner di consenso per i cookie.
        </p>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Finalità e Base Giuridica</h2>
        <p>
          Trattiamo i dati anonimi di navigazione sulla base del <strong>Legittimo Interesse</strong> (Art. 6.1.f GDPR)
          per analizzare le performance del sito, migliorarne i contenuti e garantire la sicurezza.
        </p>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Luogo del Trattamento</h2>
        <p>
          I servizi sono ospitati su <strong>Vercel Inc.</strong> Vercel adotta misure di sicurezza avanzate e aderisce
          al Data Privacy Framework per il trasferimento dei dati tra UE e USA.
        </p>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Diritti dell&apos;Interessato</h2>
        <p>
          In conformità con il GDPR (Artt. 15-22), hai il diritto di:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accedere ai tuoi dati personali (se presenti).</li>
          <li>Chiederne la rettifica o la cancellazione.</li>
          <li>Opporti al loro trattamento.</li>
        </ul>
        <p>
          Considerando la natura anonima dei dati di analytics raccolti, potrebbe non essere tecnicamente possibile
          identificare o recuperare i dati relativi a una specifica visita passata.
        </p>
      </section>
    </main>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import type ReactNode from "react";

import logo from "../assets/logo.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <img
          src={logo.url}
          alt="Casa da Borracha Cabo Frio"
          width={144}
          height={144}
          className="mx-auto h-24 w-24 rounded-md object-cover sm:h-32 sm:w-32"
        />
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-accent">
          Erro 404 · Peça não localizada
        </p>
        <h1 className="mt-3 font-display text-6xl leading-none tracking-tight text-foreground sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-display text-xl tracking-tight text-foreground sm:text-2xl">
          Essa página saiu de linha
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          O endereço que você tentou acessar não existe ou foi movido. Volte para a página principal
          ou fale com o nosso balcão pelo WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-display text-base tracking-wide text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Voltar para a página principal
          </Link>
          <a
            href="https://wa.me/552226441490"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-4 font-display text-base tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

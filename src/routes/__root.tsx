import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logo from "../assets/logo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

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
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Casa da Borracha Cabo Frio | Auto Peças e Acessórios" },
      {
        name: "description",
        content:
          "Auto peças, borrachas, mangueiras e acessórios em Cabo Frio - RJ. Atendimento e orçamento pelo WhatsApp.",
      },
      { name: "author", content: "Casa da Borracha Cabo Frio" },
      { property: "og:title", content: "Casa da Borracha Cabo Frio" },
      {
        property: "og:description",
        content: "Auto peças e acessórios na Av. Joaquim Nogueira, 1506 - Cabo Frio - RJ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  Truck,
  Boxes,
  Wrench,
  Instagram,
  Facebook,
  Navigation,
  ChevronRight,
  Plus,
  Minus,
  Cog,
  Van,
  ShieldCheck,
} from "lucide-react";

import logo from "@/assets/casa-da-borracha-logo.png";
import hero from "@/assets/hero.jpg";
import catPecasGerais from "@/assets/cat-pecas-gerais.jpg";
import catBorrachas from "@/assets/cat-borrachas.jpg";
import catMangueiras from "@/assets/cat-mangueiras.jpg";
import catCorreias from "@/assets/cat-correias.jpg";
import catSuspensao from "@/assets/cat-suspensao.jpg";
import catPalhetas from "@/assets/cat-palhetas.jpg";
import catAcessorios from "@/assets/cat-acessorios.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Casa da Borracha Cabo Frio | Auto Peças e Acessórios",
      },
      {
        name: "description",
        content:
          "Borrachas, mangueiras, correias, suspensão e acessórios para carros nacionais e importados em Cabo Frio - RJ. Orçamento rápido pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Casa da Borracha Cabo Frio | Auto Peças e Acessórios",
      },
      {
        property: "og:description",
        content:
          "Peças e borrachas automotivas na Av. Joaquim Nogueira, 1506 - São Cristóvão, Cabo Frio. Entrega rápida na Região dos Lagos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "(22) 2644-1490";
const WHATSAPP = "552226441490";
const ADDRESS = "Av. Joaquim Nogueira, 1506 - São Cristóvão, Cabo Frio - RJ, 28909-490";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Av. Joaquim Nogueira, 1506, São Cristóvão, Cabo Frio - RJ, 28909-490");
const WAZE_URL = "https://waze.com/ul?q=" + encodeURIComponent("Av. Joaquim Nogueira 1506 Cabo Frio RJ");
const EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Av. Joaquim Nogueira, 1506, São Cristóvão, Cabo Frio - RJ") +
  "&output=embed";

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.8-138c-5.6-2.8-33.2-16.4-38.3-18.2-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18.2-17.7 22-6.5 4.2-12.1 1.4c-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.9-3.8.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2-3.7 0-9.8 1.4-14.9 7-5.1 5.6-19.6 19.2-19.6 46.8s20.1 54.3 22.9 58.1c2.8 3.8 39.5 60.3 95.7 84.6 13.4 5.8 23.8 9.2 31.9 11.8 13.4 4.3 25.6 3.7 35.2 2.2 10.7-1.6 33.2-13.6 37.9-26.8 4.7-13.2 4.7-24.5 3.3-26.8-1.3-2.5-5-3.9-10.6-6.6z" />
    </svg>
  );
}

const CATEGORIES = [
  {
    id: "pecas-gerais",
    name: "Peças em Geral",
    desc: "Peças de motor, freios, embreagem, arrefecimento, ignição e mecânica em geral para veículos nacionais e importados.",
    img: catPecasGerais,
  },
  {
    id: "borrachas",
    name: "Borrachas e vedações",
    desc: "Portas, porta-malas, canaletas e perfis de vedação.",
    img: catBorrachas,
  },
  {
    id: "mangueiras",
    name: "Mangueiras automotivas e industriais",
    desc: "Radiador, combustível, ar e aplicações industriais.",
    img: catMangueiras,
  },
  {
    id: "correias",
    name: "Correias",
    desc: "Dentada, alternador e poly-v para diversos modelos.",
    img: catCorreias,
  },
  {
    id: "suspensao",
    name: "Suspensão e direção",
    desc: "Coxins, batentes, buchas, pivôs e terminais.",
    img: catSuspensao,
  },
  {
    id: "palhetas",
    name: "Palhetas e limpadores",
    desc: "Palhetas universais e originais, braços e esguichos.",
    img: catPalhetas,
  },
  {
    id: "acessorios",
    name: "Acessórios e acabamentos",
    desc: "Tapetes, presilhas, frisos e itens de acabamento em geral.",
    img: catAcessorios,
  },
];

const brandLogoModules = import.meta.glob("@/assets/marcas/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const brandLogos = Object.entries(brandLogoModules)
  .map(([path, src]) => ({
    src: src as string,
    alt: path
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) ?? "Marca parceira",
  }))
  .sort((a, b) => a.alt.localeCompare(b.alt, "pt-BR"));

function useOpenNow() {
  return useMemo(() => {
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
    );
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();
    if (day >= 1 && day <= 5) return minutes >= 480 && minutes < 1080;
    if (day === 6) return minutes >= 480 && minutes < 780;
    return false;
  }, []);
}

function StatusBadge() {
  const open = useOpenNow();
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${open
        ? "border-accent/50 bg-accent/15 text-accent"
        : "border-border bg-muted text-muted-foreground"
        }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${open ? "animate-pulse bg-accent" : "bg-muted-foreground"}`}
      />
      {open ? "Aberto agora" : "Fechado agora"}
    </span>
  );
}

const NAV = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
  { href: "#faq", label: "FAQ" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 sm:gap-4 sm:px-6 sm:py-3">
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="Casa da Borracha Cabo Frio"
            width={128}
            height={128}
            className="-my-2 h-20 w-20 shrink-0 rounded-md object-cover sm:-my-3 sm:h-24 sm:w-24"
          />
          <span className="min-w-0">
            <span className="block break-words font-display text-[clamp(0.72rem,4.1vw,1.35rem)] leading-[1.05] tracking-tight text-foreground">
              CASA DA BORRACHA
            </span>
            <span className="hidden truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:block">
              Auto Peças e Acessórios
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <StatusBadge />
          </div>
          <a
            href={`tel:+55${WHATSAPP.slice(2)}`}
            className="hidden items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink("Olá! Vim pelo site da Casa da Borracha e preciso de uma peça.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-2.5 py-2 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.02] sm:gap-2 sm:px-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          <div className="mb-3 md:hidden">
            <StatusBadge />
          </div>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/60 py-3 text-sm font-bold uppercase tracking-wide text-foreground last:border-0"
            >
              {item.label}
              <ChevronRight className="h-4 w-4 text-accent" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <>
      <section id="top" className="relative overflow-hidden">
        <img
          src={hero}
          alt="Loja de autopeças com prateleiras de mangueiras e correias"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full scale-120 object-cover object-center -translate-x-[-6%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Cabo Frio · Região dos Lagos
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Peças e borrachas automotivas para{" "}
            <span className="text-accent">nacionais e importados</span> em Cabo Frio
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base lg:text-lg">
            Borrachas de vedação, mangueiras, correias, suspensão, palhetas e acessórios. Atendimento
            técnico no balcão e entrega rápida em toda a região.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Olá! Quero fazer um orçamento de peças na Casa da Borracha.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-display text-sm tracking-wide text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fazer orçamento no WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/70 px-5 py-3 font-display text-sm tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Ver catálogo de peças
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border/70 pt-5 sm:max-w-2xl lg:grid-cols-3">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Telefone / WhatsApp
              </dt>
              <dd className="font-display text-lg text-foreground">{PHONE_DISPLAY}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Seg a Sex
              </dt>
              <dd className="font-display text-lg text-foreground">08h às 18h</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Sábado
              </dt>
              <dd className="font-display text-lg text-foreground">08h às 13h</dd>
            </div>
          </dl>
        </div>
      </section>
      {brandLogos.length > 0 && (
        <section
          aria-label="As melhores marcas, em um só lugar"
          className="bg-card py-3"
        >
          <p className="mx-auto max-w-7xl px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:px-6">
            As melhores marcas, em um só lugar
          </p>
          <div className="brand-marquee mt-2">
            <div className="brand-marquee-track">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div
                  key={`${brand.src}-${index}`}
                  className="flex h-11 w-28 shrink-0 items-center justify-center px-3 sm:w-32"
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    loading="lazy"
                    className="max-h-9 max-w-full object-contain transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Catalog() {
  const featured = CATEGORIES[0]!;
  const rest = CATEGORIES.slice(1);

  return (
    <section id="catalogo" className="border-b border-border bg-card/40 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Catálogo</p>
          <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            O que você encontra na loja
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Trabalhamos com peças, borrachas e acessórios para veículos nacionais e importados.
            Escolha uma linha e fale com a gente no WhatsApp informando o modelo do veículo.
          </p>
        </div>

        <article className="mt-6 overflow-hidden rounded-lg border border-accent/50 bg-card lg:grid lg:grid-cols-2">
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:h-full">
            <img
              src={featured.img}
              alt={featured.name}
              loading="lazy"
              width={944}
              height={704}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/80" />
          </div>
          <div className="p-5 sm:p-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              <Cog className="h-3.5 w-3.5" />
              Destaque
            </span>
            <h3 className="mt-3 font-display text-xl leading-tight tracking-tight text-foreground sm:text-2xl">
              {featured.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{featured.desc}</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Motor e retíficas",
                "Freios e embreagem",
                "Arrefecimento",
                "Ignição e elétrica",
                "Filtros e lubrificação",
                "Mecânica em geral",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={waLink(
                `Olá! Preciso de um orçamento na categoria "${featured.name}". Meu veículo é: `,
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 font-display text-sm tracking-wide text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Consultar peças em geral
            </a>
          </div>
        </article>

        <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:hidden">
          <ChevronRight className="h-3.5 w-3.5 text-accent" />
          Arraste para o lado para ver as outras categorias
        </p>

        <div className="no-scrollbar -mx-4 mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {rest.map((cat) => (
            <article
              key={cat.id}
              className="group w-[78%] shrink-0 snap-center overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent/60 sm:w-auto sm:shrink sm:snap-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  width={944}
                  height={704}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-lg leading-tight tracking-tight text-foreground">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{cat.desc}</p>
                <a
                  href={waLink(
                    `Olá! Preciso de um orçamento na categoria "${cat.name}". Meu veículo é: `,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent hover:underline"
                >
                  Consultar disponibilidade
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSimulator() {
  const [category, setCategory] = useState(CATEGORIES[0]!.name);
  const [vehicle, setVehicle] = useState("");
  const [part, setPart] = useState("");

  const message = `Olá, Casa da Borracha! Gostaria de um orçamento.
Categoria: ${category}
Veículo (modelo/ano): ${vehicle || "não informado"}
Peça que procuro: ${part || "não informado"}`;

  return (
    <section id="orcamento" className="border-b border-border py-10 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Orçamento rápido</p>
          <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Monte sua mensagem e envie no WhatsApp
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Preencha os dados do veículo e da peça. Geramos a mensagem pronta e você envia direto para
            o nosso balcão — respondemos no horário de funcionamento.
          </p>
          <div className="mt-5 rounded-lg border border-border bg-card p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Prévia da mensagem
            </p>
            <p className="mt-2 whitespace-pre-line text-sm text-foreground">{message}</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(message), "_blank", "noreferrer");
          }}
          className="rounded-lg border border-border bg-card p-5 shadow-lg"
        >
          <label className="block text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Categoria
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none focus:border-accent"
            >
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Modelo e ano do veículo
            <input
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              placeholder="Ex.: Gol G5 2012"
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
            />
          </label>

          <label className="mt-5 block text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Peça que procura
            <input
              value={part}
              onChange={(e) => setPart(e.target.value)}
              placeholder="Ex.: borracha da porta dianteira esquerda"
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-display text-sm tracking-wide text-accent-foreground transition-transform hover:scale-[1.01]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar orçamento no WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Experiência no mercado",
    desc: "Há 9 anos fazendo parte da região, com experiência e confiança para ajudar você a encontrar o que precisa.",
  },
  {
    icon: Boxes,
    title: "Estoque variado, nacionais e importados",
    desc: "Borrachas, mangueiras, correias e itens de suspensão para uma enorme lista de modelos.",
  },
  {
    icon: Wrench,
    title: "Atendimento técnico no balcão",
    desc: "Equipe experiente que identifica a peça certa pela medida, aplicação ou amostra.",
  },
];

function Features() {
  return (
    <section id="diferenciais" className="border-b border-border bg-card/40 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Diferenciais</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
          Por que comprar na Casa da Borracha
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-border bg-background p-5 transition-colors hover:border-accent/60"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display text-lg leading-tight tracking-tight text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Localização e contato
        </p>
        <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
          Venha até a loja em São Cristóvão
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Mapa da Casa da Borracha em Cabo Frio"
              src={EMBED_URL}
              loading="lazy"
              className="h-56 w-full sm:h-72 lg:h-full lg:min-h-[340px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h3 className="font-display text-base tracking-tight text-foreground">Endereço</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground"
                >
                  <Navigation className="h-4 w-4" />
                  Como chegar (Google Maps)
                </a>
                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-foreground hover:border-accent hover:text-accent"
                >
                  <Navigation className="h-4 w-4" />
                  Abrir no Waze
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h3 className="font-display text-base tracking-tight text-foreground">
                    Telefone e WhatsApp
                  </h3>
                  <a
                    href={`tel:+55${WHATSAPP.slice(2)}`}
                    className="mt-1 block font-display text-xl text-accent"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-base tracking-tight text-foreground">
                      Horário de funcionamento
                    </h3>
                    <StatusBadge />
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex justify-between gap-4 border-b border-border/60 pb-2 text-muted-foreground">
                      <span>Segunda a sexta</span>
                      <span className="font-bold text-foreground">08h às 18h</span>
                    </li>
                    <li className="flex justify-between gap-4 border-b border-border/60 pb-2 text-muted-foreground">
                      <span>Sábado</span>
                      <span className="font-bold text-foreground">08h às 13h</span>
                    </li>
                    <li className="flex justify-between gap-4 text-muted-foreground">
                      <span>Domingo</span>
                      <span className="font-bold text-foreground">Fechado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type LegalKey = "privacidade" | "termos";

const LEGAL: Record<LegalKey, { title: string; paragraphs: string[] }> = {
  privacidade: {
    title: "Política de Privacidade",
    paragraphs: [
      "A Casa da Borracha - Auto Peças e Acessórios respeita a sua privacidade. Este site é informativo e não realiza vendas online nem armazena dados em banco de dados próprio.",
      "Os dados que você digita no simulador de orçamento (categoria, modelo do veículo e peça procurada) são usados apenas para montar a mensagem que será enviada por você mesmo ao nosso WhatsApp. Nada é gravado no site.",
      "As informações compartilhadas no atendimento por WhatsApp ou telefone são utilizadas exclusivamente para responder ao orçamento, emitir a nota e organizar a entrega. Não vendemos nem cedemos seus dados a terceiros.",
      "Serviços de terceiros utilizados nas páginas, como o mapa incorporado do Google Maps e o WhatsApp, seguem as políticas de privacidade de seus próprios fornecedores.",
      "Para solicitar informações, correção ou exclusão de dados de atendimento, fale com a loja pelo telefone (22) 2644-1490.",
    ],
  },
  termos: {
    title: "Termos de Atendimento",
    paragraphs: [
      "Os preços, prazos e a disponibilidade das peças são informados no atendimento e podem mudar sem aviso prévio, conforme estoque e condições dos fornecedores.",
      "Orçamentos enviados pelo WhatsApp têm caráter informativo e são válidos apenas durante o prazo indicado pelo atendente. A reserva da peça só é garantida após a confirmação do pedido.",
      "As peças possuem garantia contra defeito de fabricação conforme o prazo do fabricante. A apresentação da nota fiscal é obrigatória para acionar a garantia. A garantia não cobre desgaste natural, instalação inadequada ou uso indevido.",
      "Trocas e devoluções seguem o Código de Defesa do Consumidor. A peça deve estar sem uso, na embalagem original e acompanhada da nota fiscal.",
      "Encomendas de itens específicos podem exigir sinal e têm prazo estimado, sujeito ao fornecedor. Entregas na Região dos Lagos são combinadas caso a caso.",
      "Atendimento: segunda a sexta das 08h às 18h e sábado das 08h às 13h, na Av. Joaquim Nogueira, 1506 - São Cristóvão, Cabo Frio - RJ.",
    ],
  },
};

function LegalModal({ which, onClose }: { which: LegalKey | null; onClose: () => void }) {
  useEffect(() => {
    if (!which) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [which, onClose]);

  if (!which) return null;
  const content = LEGAL[which];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-lg border border-border bg-card shadow-2xl sm:rounded-lg"
      >
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-border bg-card px-6 py-5">
          <h2 className="font-display text-xl tracking-tight text-foreground">{content.title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-foreground hover:border-accent hover:text-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-4 px-6 py-6">
          {content.paragraphs.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [legal, setLegal] = useState<LegalKey | null>(null);
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Casa da Borracha Cabo Frio"
                loading="lazy"
                width={118}
                height={112}
                className="h-16 w-16 shrink-0 rounded-md object-cover sm:h-20 sm:w-20"
              />
              <span className="min-w-0">
                <span className="block font-display text-lg leading-none text-foreground">
                  CASA DA BORRACHA
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Auto Peças e Acessórios
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{ADDRESS}</p>
          </div>

          <div>
            <h3 className="font-display text-base uppercase tracking-wide text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted-foreground hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base uppercase tracking-wide text-foreground">
              Fale com a loja
            </h3>
            <a
              href={`tel:+55${WHATSAPP.slice(2)}`}
              className="mt-4 block font-display text-xl text-accent"
            >
              {PHONE_DISPLAY}
            </a>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/casadaborrachacabofrio"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground hover:border-accent hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/CASADABORRACHACF"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground hover:border-accent hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={waLink("Olá! Vim pelo site da Casa da Borracha.")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              @casadaborrachacabofrio · CASADABORRACHACF
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Casa da Borracha - Auto Peças e Acessórios · Cabo Frio - RJ.
            Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wide">
            <button
              type="button"
              onClick={() => setLegal("privacidade")}
              className="text-muted-foreground hover:text-accent"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={() => setLegal("termos")}
              className="text-muted-foreground hover:text-accent"
            >
              Termos de Atendimento
            </button>
          </div>
        </div>
      </div>
      <LegalModal which={legal} onClose={() => setLegal(null)} />
    </footer>
  );
}

const FAQS = [
  {
    q: "Vocês trabalham com peças para quais veículos?",
    a: "Trabalhamos com peças para diversos modelos de veículos nacionais e importados. Informe o modelo, ano e motorização pelo WhatsApp e nossa equipe ajuda a identificar a peça correta.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos dinheiro, PIX, cartão de débito e cartão de crédito (com opção de parcelamento conforme a bandeira). Combine as condições no balcão ou pelo WhatsApp antes de fechar o pedido.",
  },
  {
    q: "As peças têm garantia?",
    a: "Sim. Todas as peças têm garantia contra defeito de fabricação, conforme o prazo e as condições do fabricante. Guarde a nota fiscal — ela é necessária para acionar a garantia.",
  },
  {
    q: "Como funciona o atendimento no balcão?",
    a: "Nossa equipe identifica a peça certa pela medida, pela aplicação ou por amostra. Você pode trazer a peça antiga que queremos comparar ali mesmo, junto com o modelo e o ano do veículo.",
  },
  {
    q: "Consigo encomendar um item específico que não está em estoque?",
    a: "Sim. Trabalhamos com encomendas de itens específicos para veículos nacionais e importados. Envie o modelo, o ano e a peça pelo WhatsApp que verificamos disponibilidade e prazo com nossos fornecedores.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-border bg-card/40 py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Perguntas frequentes</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
          Tire suas dúvidas
        </h2>

        <div className="mt-6 divide-y divide-border overflow-hidden rounded-lg border border-border bg-background">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-card"
                >
                  <span className="font-display text-sm leading-tight tracking-tight text-foreground sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-colors ${isOpen
                      ? "border-accent bg-accent/15 text-accent"
                      : "border-border text-muted-foreground"
                      }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <QuoteSimulator />
        <Features />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <a
        href={waLink("Olá! Preciso de uma peça na Casa da Borracha.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-xl transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>
    </div>
  );
}

"use client";

import React, { useMemo, useState } from "react";

type Lang = "de" | "ru";

const T = {
  de: {
    nav: {
      services: "Leistungen",
      about: "Über mich",
      faq: "FAQ",
      training: "Schulung",
      contact: "Kontakt",
    },
    badge: "Finanzberatung in Deutschland",
    heroTitle1: "Ihr Finanzberater",
    heroTitle2: "in Deutschland.",
    heroSub:
      "Erhalten Sie eine kostenlose Beratung von einem zertifizierten deutschen Berater auf Deutsch, Englisch, Russisch und Ukrainisch.",
    cta1: "Beratung anfragen",
    cta2: "Leistungen ansehen",
    kpis: [
      { k: "1:1", v: "Individuelle Beratung" },
      { k: "DE", v: "Fokus: Deutschland" },
      { k: "✓", v: "Transparent & verständlich" },
    ],
    servicesTitle: "Leistungen",
    servicesSub: "Meine Leistungen im Überblick:",
    services: [
      {
        n: "01",
        t: "Private Altersvorsorge und staatliche Förderung",
        d: "Erfahren Sie, wie Sie eine private Altersvorsorge aufbauen und staatliche Zulagen erhalten, um Ihre finanzielle Zukunft abzusichern.",
      },
      {
        n: "02",
        t: "Immobilienerwerb und günstige Kredite",
        d: "Ich helfe Ihnen, sich optimal auf den Immobilienkauf vorzubereiten, den passenden Kredit auszuwählen und staatliche Förderprogramme zu nutzen.",
      },
      {
        n: "03",
        t: "Kapitalerhalt und -wachstum",
        d: "Ich zeige Ihnen, wie Sie Ihr Vermögen vor Inflation schützen und es durch kluge Investitionen vermehren können.",
      },
      {
        n: "04",
        t: "Steuererstattung",
        d: "Ich erkläre Ihnen, wie Sie Steuern in Deutschland zurückfordern, welche Unterlagen erforderlich sind und wie Sie das Geld erhalten, das Ihnen zusteht.",
      },
      {
        n: "05",
        t: "Senkung der Haushaltsnebenkosten",
        d: "Ich gebe Ihnen Tipps, wie Sie Ihre Kosten für Energie und Wasser reduzieren, den günstigsten Anbieter wählen und ohne Komfortverlust sparen können.",
      },
      {
        n: "06",
        t: "Versicherungen und Gesundheitskosten",
        d: "Ich helfe Ihnen, den Versicherungsdschungel zu durchblicken, die optimalen Tarife zu finden und Geld über Ihre Krankenkasse zurückzuholen.",
      },
    ],
    processTitle: "So läuft die Zusammenarbeit",
    processSub: "Ein einfacher, klarer Prozess — ohne Druck, ohne Fachchinesisch.",
    process: [
      { t: "Erstgespräch (15–20 Min)", d: "Ziele, Ausgangslage, Zeitrahmen. Kostenlos & unverbindlich." },
      { t: "Analyse & Strategie", d: "Struktur, Prioritäten, nächste Schritte. Verständlich zusammengefasst." },
      { t: "Umsetzung & Begleitung", d: "Regelmäßige Check-ins und Anpassungen — wenn sich Ihr Leben ändert." },
    ],
    aboutTitle: "Über mich",
    aboutLead:
      "Mein Name ist Jana Ereshkova und ich helfe Menschen in Deutschland, die richtigen finanziellen Entscheidungen zu treffen. Meine Mission ist es, komplexe Themen einfach und verständlich zu machen. Ich befasse mich mit Themen, die für jeden wichtig sind: Rente, Steuern, Versicherungen, Investitionen, Immobilienerwerb und vieles mehr. Mein Ziel ist es, dass Sie sich sicher in Ihrer Zukunft fühlen und wissen, wie Sie alle Möglichkeiten nutzen können, die Deutschland bietet.",
    bullets: [
      "Individueller Ansatz – Ich berücksichtige Ihre Ziele und Situation, um die optimale Lösung für Sie zu finden.",
      "Einfachheit und Verständlichkeit – Ich erkläre komplexe Finanzthemen in einfachen Worten.",
      "Erfahrung und Fachwissen – Ich verfolge kontinuierlich die Veränderungen in Gesetzgebung und Finanzprodukten, um Ihnen aktuelle Lösungen anbieten zu können.",
      "Zeit- und Geldersparnis – Sie erfahren, wie Sie unnötige Ausgaben vermeiden und verfügbare Förderungen nutzen können.",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Brauche ich eine private Krankenzusatzversicherung in Deutschland?",
        a: "In den meisten Fällen: Ja, wenn Sie Ihren Komfort und Ihren Versicherungsschutz verbessern möchten. Die gesetzliche Krankenversicherung (GKV) deckt nur das medizinisch Notwendige ab. Eine Zusatzversicherung bietet Ihnen dagegen: Freie Arztwahl (inklusive Privatärzte), Einbettzimmer im Krankenhaus, Hochwertigen Zahnersatz (z.B. Keramikfüllungen, Kieferorthopädie), Kürzere Wartezeiten für Untersuchungen, Kostenerstattung für Brillen oder Kontaktlinsen. Sie ist eine Investition in Ihre Gesundheit und Lebensqualität. ",
      },
      {
        q: "Warum ist eine zusätzliche Altersvorsorge (betrieblich & privat) notwendig?",
        a: "Weil die gesetzliche Rente aller Voraussicht nach nicht ausreicht, um Ihren aktuellen Lebensstandard zu halten. Aufgrund der demografischen Entwicklung wird das Rentenniveau voraussichtlich sinken. Eine zusätzliche Vorsorge – ob betrieblich (bAV) oder privat über Produkte wie Rürup-Rente, private Rentenversicherung oder ETF-Sparpläne – schafft eine entscheidende finanzielle Absicherung. Oft ist sie mit Steuervorteilen und staatlichen Zulagen (z.B. der Riester-Förderung) verbunden und ist der Schlüssel zu einem sorgenfreien Ruhestand.",
      },
      {
        q: "Was ist eine Privathaftpflichtversicherung?",
        a: "Das ist die wichtigste Versicherung in Deutschland. Sie schützt Ihr Vermögen, falls Sie fahrlässig einen Personen-, Sach- oder Vermögensschaden bei Dritten verursachen. Beispiele: Sie beschädigen als Gast einen teuren Fernseher, Ihr Hund verletzt einen Passanten oder Sie verursachen einen Wasserschaden in der Mietwohnung. Ohne diese Versicherung haften Sie mit Ihrem gesamten Vermögen und sogar Ihrem zukünftigen Einkommen. Sie ist eine preiswerte, aber unverzichtbare Grundabsicherung.",
      },
    ],
    contactTitle: "Kontakt",
    contactSub: "Schreiben Sie mir kurz Ihr Anliegen — ich antworte zeitnah.",
    form: {
      name: "Name",
      email: "E-Mail",
      msg: "Worum geht es?",
      msgPh: "Kurz beschreiben: Ziele, Zeitrahmen, worum geht es…",
      send: "Senden",
      note: "Keine sensiblen Daten (z.B. Ausweisdaten) senden.",
    },
    footer:
      "Hinweis: Diese Website ersetzt keine Rechts- oder Steuerberatung. Inhalte dienen der allgemeinen Information.",
    toastOk: "Danke! Nachricht wurde (lokal) gesendet ✅",
  },
  ru: {
    nav: {
      services: "Услуги",
      about: "Обо мне",
      faq: "FAQ",
      training: "Обучение",
      contact: "Контакты",
    },
    badge: "Финансовая консультация в Германии",
    heroTitle1: "Ваш финансовый консультант",
    heroTitle2: "в Германии.",
    heroSub:
      "Получите бесплатную консультацию дипломированного немецкого консультанта на немецком, английском, русском и украинском языке.",
    cta1: "Запросить консультацию",
    cta2: "Посмотреть услуги",
    kpis: [
      { k: "1:1", v: "Индивидуально" },
      { k: "DE", v: "Фокус: Германия" },
      { k: "✓", v: "Понятно и честно" },
    ],
    servicesTitle: "Услуги",
    servicesSub: "Основные направления моей работы:",
    services: [
      {
        n: "01",
        t: "Дополнительная пенсия и государственные дотации",
        d: "Узнайте, как оформить дополнительную пенсию и получить государственные дотации, чтобы обеспечить себе финансовую стабильность в будущем.",
      },
      {
        n: "02",
        t: "Приобретение жилья и выгодные кредиты",
        d: "Помогу подготовиться к покупке недвижимости, выбрать оптимальный кредит и использовать государственные программы поддержки.",
      },
      {
        n: "03",
        t: "Сохранение и приумножение капитала",
        d: "Расскажу, как защитить ваши накопления от инфляции и грамотно инвестировать для роста капитала.",
      },
      {
        n: "04",
        t: "Возврат налогов",
        d: "Объясню, как вернуть налоги в Германии, какие документы нужны и как получить деньги, которые вам положены.",
      },
      {
        n: "05",
        t: "Экономия на коммунальных расходах",
        d: "Подскажу, как снизить расходы на оплату коммунальных услуг, выбрать выгодного поставщика и экономить без потери комфорта.",
      },
      {
        n: "06",
        t: "Страхование и медицинские расходы",
        d: "Помогу разобраться в страховании, выбрать оптимальные тарифы и вернуть деньги по медицинской страховке.",
      },
    ],
    processTitle: "Как проходит работа",
    processSub: "Простой и понятный процесс — без давления и сложных слов.",
    process: [
      { t: "Первый созвон (15–20 мин)", d: "Цели, текущая ситуация, сроки. Бесплатно и без обязательств." },
      { t: "Анализ и стратегия", d: "Структура, приоритеты, план действий. Всё объясняю простыми словами." },
      { t: "Внедрение и сопровождение", d: "Регулярные чек-ины и корректировки — когда меняется жизнь." },
    ],
    aboutTitle: "Обо мне",
    aboutLead:
      "Меня зовут Яна Ерешкова, и я помогаю людям в Германии принимать правильные финансовые решения. Моя миссия – сделать сложные вопросы простыми и доступными. Я работаю с темами, которые важны каждому: пенсия, налоги, страхование, инвестиции, приобретение жилья и многое другое. Моя цель – чтобы вы чувствовали уверенность в своём будущем и знали, как использовать все возможности, которые предоставляет Германия.",
    bullets: [
      "Индивидуальный подход – я учитываю ваши цели и ситуацию, чтобы подобрать оптимальные решения.",
      "Простота и понятность – объясняю сложные финансовые вопросы простыми словами.",
      "Опыт и знания – я постоянно изучаю изменения в законодательстве и финансовых продуктах, чтобы предложить вам актуальные решения.",
      "Экономия времени и денег – вы узнаете, как избежать лишних расходов и использовать доступные льготы.",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Нужно ли дополнительное медицинское страхование (Zusatzversicherung) в Германии?",
        a: "В большинстве случаев — да, если вы хотите повысить комфорт и расширить покрытие. Базовая государственная страховка (GKV) покрывает лишь необходимое. Допстраховка даёт выбор врача (частные врачи), одноместную палату в больнице, лучшие пломбы/брекеты, быстрые обследования и возмещение стоимости очков/линз. Это инвестиция в здоровье и качество жизни.",
      },
      {
        q: "Зачем нужна дополнительная пенсия (betriebliche & private Altersvorsorge)?",
        a: "Потому что государственная пенсия (gesetzliche Rente) с высокой долей вероятности не сохранит ваш текущий уровень жизни. Из-за демографии её размер будет снижаться. Дополнительная пенсия (через работодателя — bAV, или частные схемы — Rürup, Rente, ETF-Sparplan) создаёт финансовую подушку, часто с налоговыми льготами и государственными премиями (например, Riester-Förderung), и является ключом к достойной старости.",
      },
      {
        q: "Что такое Privathaftpflichtversicherung ?",
        a: "Это самая важная страховка в Германии. Она защищает ваши финансы, если вы по неосторожности причините ущерб здоровью, имуществу или активам третьих лиц (например, разобьёте дорогой телевизор в гостях, собакой нанесёте ущерб, устроите потоп у соседей). Без неё вы рискуете всем своим имуществом и будущими доходами. Это недорогая, но обязательная базовая защита.",
      },
    ],
    contactTitle: "Контакты",
    contactSub: "Напишите кратко — я отвечу в ближайшее время.",
    form: {
      name: "Имя",
      email: "E-mail",
      msg: "О чём запрос?",
      msgPh: "Коротко: цели, сроки, что нужно…",
      send: "Отправить",
      note: "Не отправляйте чувствительные данные (например, паспорт).",
    },
    footer:
      "Примечание: сайт не заменяет юридическую или налоговую консультацию. Информация носит общий характер.",
    toastOk: "Спасибо! Сообщение (локально) отправлено ✅",
  },
} as const;

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = useMemo(() => T[lang], [lang]);

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(t.toastOk);
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <div
      className="
        min-h-screen text-slate-900
        bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,140,0,0.18),transparent_60%),
            radial-gradient(900px_500px_at_10%_20%,rgba(255,140,0,0.10),transparent_55%),
            radial-gradient(900px_500px_at_90%_20%,rgba(255,140,0,0.10),transparent_55%),
            linear-gradient(to_bottom,#ffffff,#fff7ed_40%,#ffffff)]
      "
    >
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollToId("top")}
            className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-black/5"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(255,140,0,0.55)]" />
            <span className="tracking-wide">Finanzberatung</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            <NavBtn onClick={() => scrollToId("services")}>{t.nav.services}</NavBtn>
            <NavBtn onClick={() => scrollToId("about")}>{t.nav.about}</NavBtn>
            <NavBtn onClick={() => scrollToId("faq")}>{t.nav.faq}</NavBtn>
            <NavBtn onClick={() => scrollToId("training")}>
  {t.nav.training}
</NavBtn>
            <NavBtn onClick={() => scrollToId("contact")}>{t.nav.contact}</NavBtn>
            <NavBtn onClick={() => scrollToId("impressum")}>Impressum</NavBtn>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-xl border border-black/10 bg-black/5 p-1">
              <LangBtn active={lang === "de"} onClick={() => setLang("de")}>
                DE
              </LangBtn>
              <LangBtn active={lang === "ru"} onClick={() => setLang("ru")}>
                RU
              </LangBtn>
            </div>

            <button
              onClick={() => scrollToId("contact")}
              className="
                hidden md:inline-flex items-center justify-center
                rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                px-6 py-3 text-sm font-semibold text-white
                shadow-lg shadow-orange-500/30
                transition-all duration-300
                hover:scale-105 hover:shadow-orange-500/45
                active:scale-95
              "
            >
              {t.cta1}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top" className="mx-auto max-w-6xl px-4">
        <section className="relative pb-12 pt-14 md:pb-16 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <div className="pointer-events-none absolute left-1/2 top-8 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
            {/* LEFT */}
            <div className="text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                {t.badge}
              </div>

              <div className="mb-3 text-xl md:text-2xl font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Yereshkova Yana
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                <span className="text-slate-900">{t.heroTitle1} </span>
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-slate-900 bg-clip-text text-transparent">
                  {t.heroTitle2}
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">{t.heroSub}</p>

              <div className="mt-7 flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToId("contact")}
                  className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition"
                >
                  {t.cta1}
                </button>

                <button
                  onClick={() => scrollToId("services")}
                  className="rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5"
                >
                  {t.cta2}
                </button>
              </div>

              {/* Socials */}
              <div className="mt-6 flex gap-3 justify-center md:justify-start">
                <SocialLink href="https://instagram.com/finance_8888" label="Instagram">
                  <InstagramIcon />
                </SocialLink>
                <SocialLink href="https://t.me/yana_y88" label="Telegram">
                  <TelegramIcon />
                </SocialLink>
                <SocialLink href="https://wa.me/491746163388" label="WhatsApp">
  <svg
    viewBox="0 0 32 32"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M16 2.9A13.1 13.1 0 0 0 2.9 16c0 2.3.6 4.6 1.8 6.6L2 30l7.6-2a13.1 13.1 0 0 0 6.4 1.7A13.1 13.1 0 0 0 29.1 16 13.1 13.1 0 0 0 16 2.9zm0 23.9a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-4.5 1.2 1.2-4.4-.3-.4a10.7 10.7 0 1 1 9.5 5.3zm5.8-7.9c-.3-.2-1.7-.8-2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.7 8.7 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6s-.7-1.6-1-2.2c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3a12.4 12.4 0 0 0 4.8 4.3c1.8.8 2.5.9 3.4.8.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4s-.2-.2-.5-.4z"
    />
  </svg>
</SocialLink>
              </div>
            </div>

            {/* RIGHT — PHOTO */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[320px] md:w-[420px] aspect-[4/5] overflow-hidden rounded-3xl border border-orange-400/30 shadow-xl shadow-orange-500/30">
                <img src="/profile.jpg" alt="Financial Consultant" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* KPI */}
          <div className="mt-10 grid w-full grid-cols-1 gap-3 md:grid-cols-3">
            {t.kpis.map((x, i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/10 bg-white p-5 text-left shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
              >
                <div className="text-2xl font-semibold text-slate-900">{x.k}</div>
                <div className="mt-1 text-sm text-slate-600">{x.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-10 md:py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold md:text-4xl text-slate-900">{t.servicesTitle}</h2>
            <p className="mt-3 max-w-2xl text-slate-600">{t.servicesSub}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.services.map((s) => (
              <div
                key={s.n}
                className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)] transition hover:bg-orange-50"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    {s.n}
                  </div>

                  <div
                    className="
                      h-10 w-10 rounded-xl
                      bg-gradient-to-br from-orange-500 to-orange-600
                      ring-1 ring-orange-500/25
                      shadow-lg shadow-orange-500/20
                    "
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-10 md:py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)] md:p-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold md:text-3xl text-slate-900">{t.processTitle}</h2>
              <p className="text-slate-600">{t.processSub}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {t.process.map((p, i) => (
                <div key={i} className="rounded-2xl border border-black/10 bg-black/5 p-5">
                  <div className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">{p.t}</div>
                  <div className="mt-2 text-sm text-slate-600">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl text-slate-900">{t.aboutTitle}</h2>
              <p className="mt-3 text-slate-600">{t.aboutLead}</p>

              <ul className="mt-6 space-y-3">
                {t.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25">
                      ✓
                    </span>
                    <span className="text-sm text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
              <div className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Compact
              </div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">
                {lang === "de" ? "Strategie statt Stress." : "Стратегия вместо стресса."}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "de"
                  ? "Wir bauen gemeinsam ein System: Ziele → Plan → Umsetzung → Review."
                  : "Мы выстроим систему: цели → план → внедрение → регулярный пересмотр."}
              </p>

              <div className="mt-6 grid gap-3">
                <MiniCard
                  title={lang === "de" ? "Transparenz" : "Прозрачность"}
                  text={lang === "de" ? "Keine unnötigen Produkte. Nur Klarheit." : "Без навязывания. Только ясность."}
                />
                <MiniCard
                  title={lang === "de" ? "Struktur" : "Структура"}
                  text={lang === "de" ? "Prioritäten & Schritte — verständlich." : "Приоритеты и шаги — понятно."}
                />
                <MiniCard
                  title={lang === "de" ? "Begleitung" : "Сопровождение"}
                  text={lang === "de" ? "Check-ins, Anpassungen, Ruhe." : "Чек-ины, корректировки, спокойствие."}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-10 md:py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold md:text-4xl text-slate-900">{t.faqTitle}</h2>
          </div>
          

          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {t.faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(2,6,23,0.06)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-base font-semibold text-slate-900">{f.q}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-slate-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        {/* Training */}
<section id="training" className="py-10 md:py-16">
  <div className="mx-auto max-w-4xl text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
      {lang === "de"
        ? "Ausbildung und Berufseinstieg als Finanzberater/in"
        : "Обучение и работа финансовым консультантом"}
    </h2>

    <p className="mt-4 text-slate-600">
      {lang === "de"
        ? "Sie möchten eine Karriere im Finanzbereich starten und remote arbeiten? Ich biete eine einzigartige Möglichkeit: Werden Sie Online-Finanzberater/in und arbeiten Sie von überall in Deutschland aus. Sie erhalten:"
        : "Хотите построить карьеру в финансовой сфере и работать удалённо? Я предлагаю уникальную возможность пройти обучение и начать работать финансовым консультантом онлайн из любой точки Германии. Вы получаете:"}
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow">
        <h3 className="font-semibold text-slate-900">
          {lang === "de" ? "Ihr persönlicher Mentor" : "Личный наставник"}
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          {lang === "de"
            ? "Ich begleite Sie in jeder Phase Ihrer Entwicklung."
            : "Я сопровождаю вас на каждом этапе вашего развития."}
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow">
        <h3 className="font-semibold text-slate-900">
          {lang === "de" ? "Schritt-für-Schritt-Ausbildung" : "Пошаговое обучение"}
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          {lang === "de"
            ? "Von den Finanzgrundlagen bis hin zur praktischen Kundenberatung."
            : "От финансовых основ до практической работы с клиентами."}
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow">
        <h3 className="font-semibold text-slate-900">
          {lang === "de" ? "Karriereperspektiven" : "Карьерные перспективы"}
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          {lang === "de"
            ? "Starten Sie nach der Ausbildung direkt in einem Profi-Team."
            : "После обучения вы сможете начать работу в профессиональной команде."}
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Contact */}
        <section id="contact" className="py-10 md:py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)] md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl text-slate-900">{t.contactTitle}</h2>
                <p className="mt-3 text-slate-600">{t.contactSub}</p>

                <div className="mt-6 rounded-2xl border border-black/10 bg-black/5 p-4 text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">{lang === "de" ? "Info" : "Инфо"}</div>
                  <div className="mt-1">{t.form.note}</div>
                </div>
              </div>

              <form
  action="https://formspree.io/f/mjgvqdwy"
  method="POST"
  className="space-y-4"
>
  <Field label={t.form.name}>
    <input
      className="input"
      name="name"
      placeholder="Ihr Name"
      required
    />
  </Field>

  <Field label={t.form.email}>
    <input
      className="input"
      type="email"
      name="email"
      placeholder="name@email.com"
      required
    />
  </Field>

  <Field label={t.form.msg}>
    <textarea
      className="input min-h-[120px]"
      name="message"
      placeholder={t.form.msgPh}
    />
  </Field>

  <button
    type="submit"
    className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white"
  >
    {t.form.send}
  </button>
                <p className="text-xs text-slate-500">{t.footer}</p>
              </form>
            </div>
          </div>
        </section>

        {/* Map */}
        <section id="map" className="py-10 md:py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                {lang === "de" ? "Standort" : "Локация"}
              </h2>
              <p className="text-sm text-slate-500">{lang === "de" ? "Karte ansehen" : "Посмотреть на карте"}</p>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
              <iframe
                title="Yandex Map"
                src="https://yandex.ru/map-widget/v1/?ll=7.149632%2C51.256213&z=16&l=map&pt=7.149632,51.256213,pm2rdm"
                width="100%"
                height="420"
                frameBorder="0"
                allowFullScreen
                className="block"
              />
            </div>
          </div>
        </section>

        {/* Impressum */}
<section id="impressum" className="mt-10 md:mt-20 border-t border-black/10 py-10 md:py-16">
  <div className="mx-auto max-w-4xl px-4 text-sm text-slate-600 leading-relaxed">
    <h2 className="mb-6 text-2xl font-semibold text-slate-900">
      Impressum
    </h2>

    <p>
      Im Versicherungsbereich tätig als gebundener Vermittler gemäß § 34d Abs. 7
      GewO auf Provisionsbasis ausschließlich vermittelnd und beratend für:
    </p>

    <ul className="mt-3 list-disc pl-6">
      <li>Generali Deutschland Lebensversicherung</li>
      <li>Generali Deutschland Versicherung</li>
      <li>Generali Deutschland Krankenversicherung</li>
      <li>Generali Pensionskasse</li>
      <li>ADVOCARD Rechtsschutzversicherung</li>
    </ul>

    <p className="mt-4">
      Darüber hinaus können in Einzelfällen geldwerte Vorteile in Form von
      Sachleistungen anfallen (z. B. Schulungen sowie Einladungen zur Teilnahme
      an kulturellen und gesellschaftlichen Veranstaltungen, Informationsmaterial,
      Aufmerksamkeiten).
    </p>

    <p className="mt-6 font-semibold text-slate-900">
      Registerstelle gemäß § 34d GewO:
    </p>

    <p>
      Deutsche Industrie- und Handelskammer (DIHK) <br />
      Breite Straße 29 <br />
      10178 Berlin <br />
      Telefon: 0180 600585-0 (20 Cent/Anruf) <br />
      Website:{" "}
      <a
        href="https://www.vermittlerregister.info"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-600 underline"
      >
        www.vermittlerregister.info
      </a>
    </p>

    <p className="mt-4">
      <strong>Registrierungsnummer gemäß GewO:</strong><br />
      § 34d D-B9JJ-4MGUU-37
    </p>

    <p className="mt-6 font-semibold text-slate-900">
      Schlichtungsstellen:
    </p>

    <p>
      Verein Versicherungsombudsmann e.V. <br />
      Postfach 08 06 32 <br />
      10006 Berlin
    </p>

    <p className="mt-2">
      Ombudsmann Private Kranken- und Pflegeversicherung <br />
      Postfach 06 02 22 <br />
      10052 Berlin
    </p>

    <p className="mt-6">
      Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie unter:{" "}
      <a
        href="https://www.datenschutz.dvag"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-600 underline"
      >
        www.datenschutz.dvag
      </a>
    </p>
  </div>
</section>

        <footer className="pb-10 pt-2 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} • {lang === "de" ? "Finanzberatung" : "Финансовая консультация"}
        </footer>
      </main>
    </div>
  );
}

function NavBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-black/5 hover:text-slate-900"
    >
      {children}
    </button>
  );
}

function LangBtn({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg px-3 py-1.5 text-xs font-semibold transition",
        active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-black/10"
      )}
    >
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-semibold text-slate-700">{label}</div>
      {children}
    </label>
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{text}</div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm hover:shadow-md hover:scale-105 transition"
    >
      <span className="text-slate-900">{children}</span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21 5 10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M21 5 14 21l-4-8-8-4 19-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 11.5A8.5 8.5 0 1 1 6.2 18.7L4 20l1.4-2.1A8.46 8.46 0 0 1 3.5 11.5 8.5 8.5 0 0 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.5c.3-.6.6-.6.9-.6h.6c.2 0 .5.1.6.4l.8 1.9c.1.2.1.5 0 .6l-.5.6c-.2.2-.2.5 0 .8.6 1.1 1.5 2 2.6 2.6.3.2.6.2.8 0l.6-.5c.1-.1.4-.2.6 0l1.9.8c.3.1.4.4.4.6v.6c0 .3 0 .6-.6.9-.7.4-2.4.3-4.5-1.8-2.1-2.1-2.2-3.8-1.8-4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
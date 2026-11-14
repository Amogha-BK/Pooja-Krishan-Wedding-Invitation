import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Check,
  ChevronsDown,
  Clipboard,
  Flower2,
  MapPin,
  Menu,
  Music,
  Pause,
  Pointer,
  Send,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "motion/react";
import { Celebration, invitationConfig as config } from "./invitationConfig";
import { getCountdownParts } from "./countdown";

const indiaClock = new Intl.DateTimeFormat("en-GB", {
  timeZone: config.calendar.timezone,
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

const navItems = [
  ["Our Wedding", "our-wedding"],
  ["Celebrations", "celebrations"],
  ["Contact", "contact"],
] as const;

function Monogram({ className = "" }: { className?: string }) {
  return (
    <img
      className={`monogram ${className}`}
      src={config.monogram}
      alt="K and P wedding monogram for Krishan and Pooja"
    />
  );
}

function InvitationOpening({ onOpen }: { onOpen: () => void }) {
  const reducedMotion = useReducedMotion();
  const isPresent = useIsPresent();
  const moveSeal = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType === "touch" || !isPresent) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--seal-x",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}px`,
    );
    event.currentTarget.style.setProperty(
      "--seal-y",
      `${((event.clientY - bounds.top) / bounds.height - 0.5) * 12}px`,
    );
  };
  return (
    <motion.section
      className="invitation-opening"
      aria-label="Open Krishan and Pooja’s wedding invitation"
      initial={{ opacity: 1 }}
      exit={{ opacity: reducedMotion ? 0 : [1, 1, 0] }}
      transition={{ duration: reducedMotion ? 0.15 : 1.65, times: [0, 0.9, 1], ease: "easeInOut" }}
      onPointerMove={moveSeal}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--seal-x", "0px");
        event.currentTarget.style.setProperty("--seal-y", "0px");
      }}
    >
      {[-1, 1].map((direction) => (
        <motion.div
          key={direction}
          className={`opening-gate ${direction < 0 ? "opening-gate-left" : "opening-gate-right"}`}
          aria-hidden="true"
          exit={reducedMotion ? { opacity: 0 } : { x: `${direction * 104}%` }}
          transition={{
            duration: reducedMotion ? 0.15 : 1.15,
            delay: reducedMotion ? 0 : 0.3,
            ease: [0.65, 0, 0.2, 1],
          }}
        />
      ))}
      <motion.div
        className="opening-floral-backdrop"
        aria-hidden="true"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="paper-grain"
        aria-hidden="true"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="opening-stationery-frame"
        aria-hidden="true"
        exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.04 }}
        transition={{ duration: 0.45 }}
      />
      <motion.div
        className="opening-sparkles"
        aria-hidden="true"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Array.from({ length: 8 }, (_, index) => (
          <i key={index} />
        ))}
      </motion.div>
      <div className="opening-welcome">
        <motion.div
          exit={{ opacity: 0, y: reducedMotion ? 0 : -18 }}
          transition={{ duration: 0.35 }}
        >
          <Flower2 className="opening-flower" strokeWidth={1} aria-hidden="true" />
          <p className="opening-kicker">A celebration of love &amp; togetherness</p>
        </motion.div>
        <h1
          className="opening-names"
          aria-label={`${config.couple.first} and ${config.couple.second}`}
        >
          <motion.span
            exit={{ opacity: 0, x: reducedMotion ? 0 : -45 }}
            transition={{ duration: 0.45 }}
          >
            {config.couple.first}
          </motion.span>
          <motion.button
            type="button"
            className="opening-logo-button focus-ring"
            onClick={onOpen}
            disabled={!isPresent}
            autoFocus
            aria-label="Open Krishan and Pooja’s wedding invitation"
            whileHover={reducedMotion ? undefined : { scale: 1.09, rotate: -3 }}
            whileTap={reducedMotion ? undefined : { scale: 0.9, rotate: 2 }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { scale: [1, 0.92, 1.18], opacity: [1, 1, 0], rotate: [0, -5, 3] }
            }
            transition={{ duration: reducedMotion ? 0.15 : 0.6 }}
          >
            <span className="opening-logo-glow" aria-hidden="true" />
            <span className="opening-logo-orbit" aria-hidden="true" />
            <img src={config.monogram} alt="" width={180} height={180} fetchPriority="high" />
            {!reducedMotion && (
              <span className="opening-petal-burst" aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => (
                  <motion.i
                    key={index}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                    exit={{
                      x: Math.cos((index * Math.PI) / 9) * (130 + (index % 3) * 35),
                      y: Math.sin((index * Math.PI) / 9) * (140 + (index % 4) * 25),
                      rotate: index * 47,
                      scale: [0.3, 1, 0.7],
                      opacity: [0, 0.95, 0],
                    }}
                    transition={{ duration: 1.2, delay: index * 0.012, ease: "easeOut" }}
                  />
                ))}
              </span>
            )}
          </motion.button>
          <motion.span
            exit={{ opacity: 0, x: reducedMotion ? 0 : 45 }}
            transition={{ duration: 0.45 }}
          >
            {config.couple.second}
          </motion.span>
        </h1>
        <motion.div exit={{ opacity: 0, y: reducedMotion ? 0 : 14 }} transition={{ duration: 0.3 }}>
          <Pointer className="opening-tap-hint" strokeWidth={1.2} aria-hidden="true" />
          <p className="opening-instruction">Tap the monogram</p>
          <p className="opening-whisper">to open our invitation</p>
          <p className="opening-song-note">
            <Music size={11} aria-hidden="true" /> Opens with music
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

function MusicControl({
  canPlay,
  audio,
}: {
  canPlay: boolean;
  audio: React.RefObject<HTMLAudioElement | null>;
}) {
  const userControlled = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const hasMusic = Boolean(config.optional.musicUrl);

  useEffect(() => {
    const player = audio.current;
    if (!player || !canPlay || !hasMusic) return;
    let disposed = false;
    player.volume = 0.35;

    const removeListeners = () => {
      document.removeEventListener("pointerdown", startOnInteraction, true);
      document.removeEventListener("touchend", startOnInteraction, true);
      document.removeEventListener("keydown", startOnInteraction, true);
      window.removeEventListener("pageshow", tryAutoplay);
    };
    const tryAutoplay = () => {
      if (disposed || userControlled.current) return;
      void player
        .play()
        .then(() => {
          if (!disposed) removeListeners();
        })
        .catch(() => {
          // If audible autoplay is blocked, retry on the first interaction.
        });
    };
    const startOnInteraction = (event: Event) => {
      if (userControlled.current) {
        removeListeners();
        return;
      }
      if (event.target instanceof Element && event.target.closest(".music-controls")) return;
      tryAutoplay();
    };

    document.addEventListener("pointerdown", startOnInteraction, true);
    document.addEventListener("touchend", startOnInteraction, true);
    document.addEventListener("keydown", startOnInteraction, true);
    window.addEventListener("pageshow", tryAutoplay);
    tryAutoplay();
    return () => {
      disposed = true;
      removeListeners();
    };
  }, [canPlay, hasMusic, audio]);

  const togglePlay = async () => {
    if (!audio.current || !canPlay || !hasMusic) return;
    userControlled.current = true;
    if (audio.current.paused) {
      try {
        await audio.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="music-controls">
      {hasMusic && (
        <audio
          ref={audio}
          src={config.optional.musicUrl}
          preload="metadata"
          loop
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={() => setMuted(Boolean(audio.current?.muted))}
          onError={() => setPlaying(false)}
        />
      )}
      <button
        type="button"
        className="icon-button focus-ring"
        onClick={togglePlay}
        disabled={!hasMusic}
        aria-label={hasMusic ? (playing ? "Pause music" : "Play music") : "Music is not configured"}
        aria-pressed={playing}
        title={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Pause /> : <Music />}
      </button>
      {hasMusic && (
        <button
          type="button"
          className="icon-button focus-ring"
          onClick={() => {
            if (!audio.current) return;
            audio.current.muted = !muted;
            setMuted(!muted);
          }}
          aria-label={muted ? "Unmute music" : "Mute music"}
          aria-pressed={muted}
          title={muted ? "Unmute music" : "Mute music"}
        >
          {muted ? <VolumeX /> : <Volume2 />}
        </button>
      )}
    </div>
  );
}

function Navigation({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    const closeOutsideNavigation = (event: PointerEvent) => {
      const nav = toggle.current?.closest("nav");
      if (event.target instanceof Node && !nav?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 800px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutsideNavigation);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutsideNavigation);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  return (
    <nav className="site-nav" aria-label="Invitation navigation">
      <a
        className="nav-mark focus-ring"
        href="#our-wedding"
        aria-label="Home"
        onClick={() => setOpen(false)}
      >
        K <span>&</span> P
      </a>
      <div id="invitation-navigation" className={`nav-links ${open ? "nav-links-open" : ""}`}>
        {navItems.map(([label, id]) => (
          <a key={id} className="focus-ring" href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
      {children}
      <button
        ref={toggle}
        className="nav-toggle focus-ring"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="invitation-navigation"
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

function Countdown() {
  const target = Date.parse(config.countdownTarget);
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    const update = () => setNow(Date.now());
    let timer: number | undefined;
    const syncTimer = () => {
      window.clearInterval(timer);
      timer = undefined;
      if (document.hidden) return;
      update();
      timer = window.setInterval(update, 1000);
    };
    syncTimer();
    document.addEventListener("visibilitychange", syncTimer);
    window.addEventListener("focus", syncTimer);
    window.addEventListener("pageshow", syncTimer);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", syncTimer);
      window.removeEventListener("focus", syncTimer);
      window.removeEventListener("pageshow", syncTimer);
    };
  }, []);

  if (!Number.isFinite(target)) return null;
  const remaining = getCountdownParts(target, now);
  const values = [
    ["Days", remaining.days],
    ["Hours", remaining.hours],
    ["Minutes", remaining.minutes],
    ["Seconds", remaining.seconds],
  ];
  return (
    <div>
      <p className="countdown-label">
        {remaining.complete ? "Our wedding day is here!" : "Counting down to our wedding day"}
      </p>
      <p className="countdown-target">
        <time dateTime={config.countdownTarget}>{config.dateLabel} · 12:00 a.m. IST</time>
      </p>
      <div
        className="countdown"
        role="timer"
        aria-label={`Time remaining until ${config.dateLabel}, Indian Standard Time`}
      >
        {values.map(([label, value]) => (
          <div key={label}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="countdown-clock">
        Current time:{" "}
        <time dateTime={new Date(now).toISOString()}>{indiaClock.format(now)} IST</time>
      </p>
    </div>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{children}</h2>
      <div className="botanical-rule" aria-hidden="true">
        <i />
        <Flower2 strokeWidth={1} />
        <i />
      </div>
    </div>
  );
}

function EventLocation({ event, className }: { event: Celebration; className: string }) {
  if (!event.venue) return null;
  return (
    <div className={`event-location ${className}`}>
      <div className="event-actions">
        <a
          className="button button-outline focus-ring"
          href={event.mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MapPin /> Directions
        </a>
      </div>
    </div>
  );
}

function EventCard({ event, index }: { event: Celebration; index: number }) {
  return (
    <motion.article
      id={event.id}
      className={`event-card scene-${event.scene}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
    >
      <div className="event-portrait">
        <img
          src={event.image}
          srcSet={`${event.image.replace(".jpg", "-640.jpg")} 640w, ${event.image} 1024w`}
          sizes="(max-width: 680px) calc(100vw - 2rem), 620px"
          alt=""
          loading="lazy"
          decoding="async"
          width={1024}
          height={1536}
        />
        <div className="event-content">
          <Monogram className="event-monogram" />
          <h3>{event.shortName}</h3>
          <p className="event-subtitle">{event.title.split(" — ")[1]}</p>
          <div className="event-details">
            <time className="event-date" dateTime={event.start.split("T")[0]}>
              {event.dateLabel}
            </time>
            <dl className="event-schedule">
              {event.schedule.map((item) => (
                <div key={item.name}>
                  <dt>{item.name}</dt>
                  <dd>{item.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <EventLocation event={event} className="event-location-mobile" />
      <p className="event-line">{event.supportingLine}</p>
    </motion.article>
  );
}

type RSVPData = {
  name: string;
  attendance: "yes" | "no";
  guests: string;
  celebrations: string[];
  dietary: string;
  message: string;
};

function RSVP() {
  const [data, setData] = useState<RSVPData>({
    name: "",
    attendance: "yes",
    guests: "1",
    celebrations: [],
    dietary: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preview, setPreview] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleCelebration = (label: string) => {
    setData((current) => ({
      ...current,
      celebrations: current.celebrations.includes(label)
        ? current.celebrations.filter((item) => item !== label)
        : [...current.celebrations, label],
    }));
  };

  const buildMessage = () => {
    const attending = data.attendance === "yes";
    const lines = [
      `RSVP for ${config.couple.first} & ${config.couple.second}`,
      "",
      `Name: ${data.name.trim()}`,
      `Attendance: ${attending ? "Joyfully attending" : "Sending our wishes"}`,
    ];
    if (attending) {
      lines.push(
        `Guests (including me): ${data.guests}`,
        `Celebrations: ${data.celebrations.join(", ")}`,
      );
      if (data.dietary.trim()) lines.push(`Dietary requirements: ${data.dietary.trim()}`);
    }
    if (data.message.trim()) lines.push(`Message: ${data.message.trim()}`);
    return lines.join("\n");
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!data.name.trim()) nextErrors.name = "Please enter your full name.";
    if (data.attendance === "yes") {
      const guests = Number(data.guests);
      if (!Number.isInteger(guests) || guests < 1)
        nextErrors.guests = "Please enter at least one guest.";
      if (!data.celebrations.length)
        nextErrors.celebrations = "Please choose at least one celebration.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setPreview(buildMessage());
    setDialogOpen(true);
  };

  const sendWhatsApp = () => {
    if (!config.optional.whatsappHostNumber) return;
    const number = String(config.optional.whatsappHostNumber).replace(/\D/g, "");
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(preview)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const copyMessage = async () => {
    await navigator.clipboard.writeText(preview);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const attending = data.attendance === "yes";
  return (
    <>
      <form className="rsvp-form" onSubmit={submit} noValidate>
        <label className="field">
          <span>
            Full name <b>*</b>
          </span>
          <input
            value={data.name}
            onChange={(event) => setData({ ...data, name: event.target.value })}
            aria-invalid={Boolean(errors.name)}
            placeholder="Your full name"
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>
        <fieldset>
          <legend>Will you be joining us?</legend>
          <div className="choice-grid two">
            {[
              ["yes", "Joyfully attending"],
              ["no", "Sending our wishes"],
            ].map(([value, label]) => (
              <label
                key={value}
                className={`choice ${data.attendance === value ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value={value}
                  checked={data.attendance === value}
                  onChange={() =>
                    setData({
                      ...data,
                      attendance: value as "yes" | "no",
                      ...(value === "no" ? { guests: "1", celebrations: [], dietary: "" } : {}),
                    })
                  }
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <AnimatePresence initial={false}>
          {attending && (
            <motion.div
              className="attending-fields"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <label className="field">
                <span>Number of guests, including yourself</span>
                <input
                  type="number"
                  min="1"
                  inputMode="numeric"
                  value={data.guests}
                  onChange={(event) => setData({ ...data, guests: event.target.value })}
                  aria-invalid={Boolean(errors.guests)}
                />
                {errors.guests && <small className="error">{errors.guests}</small>}
              </label>
              <fieldset>
                <legend>Celebrations attending</legend>
                <div className="choice-grid">
                  {config.celebrations.map((event) => (
                    <label
                      className={`choice ${data.celebrations.includes(event.shortName) ? "selected" : ""}`}
                      key={event.id}
                    >
                      <input
                        type="checkbox"
                        checked={data.celebrations.includes(event.shortName)}
                        onChange={() => toggleCelebration(event.shortName)}
                      />
                      <span>{event.shortName}</span>
                      {data.celebrations.includes(event.shortName) && <Check />}
                    </label>
                  ))}
                </div>
                {errors.celebrations && <small className="error">{errors.celebrations}</small>}
              </fieldset>
              <label className="field">
                <span>
                  Dietary requirements <em>Optional</em>
                </span>
                <input
                  value={data.dietary}
                  onChange={(event) => setData({ ...data, dietary: event.target.value })}
                  placeholder="Please share any requirements"
                />
              </label>
            </motion.div>
          )}
        </AnimatePresence>
        <label className="field">
          <span>
            Message for Krishan &amp; Pooja <em>Optional</em>
          </span>
          <textarea
            rows={4}
            value={data.message}
            onChange={(event) => setData({ ...data, message: event.target.value })}
            placeholder="Leave a note for the couple"
          />
        </label>
        <button className="button button-submit focus-ring" type="submit">
          <Send /> Prepare RSVP
        </button>
        <p className="form-note">Your message opens in WhatsApp for you to review and send.</p>
      </form>

      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content">
            <Dialog.Close className="dialog-close focus-ring">
              <X />
              <span className="sr-only">Close</span>
            </Dialog.Close>
            <Dialog.Title>Review your RSVP</Dialog.Title>
            <Dialog.Description>
              {config.optional.whatsappHostNumber
                ? "Review your message, then continue to WhatsApp. You will send it yourself."
                : "No host number is configured yet. Copy this demo message to share it manually."}
            </Dialog.Description>
            <pre>{preview}</pre>
            {config.optional.whatsappHostNumber ? (
              <button
                type="button"
                className="button button-submit focus-ring"
                onClick={sendWhatsApp}
              >
                <Send /> Continue to WhatsApp
              </button>
            ) : (
              <button
                type="button"
                className="button button-submit focus-ring"
                onClick={copyMessage}
              >
                {copied ? <Check /> : <Clipboard />}
                {copied ? "Copied" : "Copy message"}
              </button>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(false);
  const invitationHeading = useRef<HTMLHeadingElement>(null);
  const weddingAudio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (revealed) {
      window.scrollTo({ top: 0, behavior: "instant" });
      invitationHeading.current?.focus({ preventScroll: true });
    }
  }, [revealed]);

  useEffect(() => {
    if (!revealed) return;
    setShowScrollCue(true);
  }, [revealed]);

  useEffect(() => {
    if (revealed) return;
    const body = document.body;
    const scrollY = window.scrollY;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    // Fixed positioning also stops background scrolling in iOS Safari.
    document.body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      Object.assign(body.style, previous);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [revealed]);

  const openInvitation = () => {
    if (opened) return;
    // Start in the tap handler so mobile browsers retain user activation.
    if (weddingAudio.current) {
      weddingAudio.current.volume = 0.35;
      void weddingAudio.current.play().catch(() => {
        // The music control can retry if playback is unavailable or blocked.
      });
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpened(true);
  };

  const parentsPresent =
    Boolean(config.couple.firstParents) || Boolean(config.couple.secondParents);
  const optionalDetails = Object.entries({
    Travel: config.optional.travel,
    Stay: config.optional.stay,
    Contact: config.optional.contact,
  }).filter(([, value]) => Boolean(value));

  return (
    <>
      <AnimatePresence onExitComplete={() => setRevealed(true)}>
        {!opened && <InvitationOpening key="opening" onOpen={openInvitation} />}
      </AnimatePresence>
      <div className="invitation" inert={!revealed} aria-hidden={!revealed}>
        <Navigation>
          <MusicControl canPlay={opened} audio={weddingAudio} />
        </Navigation>
        <main>
          <section className="hero" id="our-wedding">
            <div className="paper-grain" />
            <div className="hero-inner">
              <p className="ganesh-invocation">{config.invocation}</p>
              <Monogram className="hero-monogram" />
              <p className="eyebrow">The wedding celebrations of</p>
              <h1 ref={invitationHeading} tabIndex={-1}>
                <span className="hero-name">{config.couple.first}</span>
                <span className="hero-ampersand">&amp;</span>
                <span className="hero-name">{config.couple.second}</span>
              </h1>
              {parentsPresent && (
                <div className="parent-lines">
                  {config.couple.firstParents && <p>{config.couple.firstParents}</p>}
                  {config.couple.secondParents && <p>{config.couple.secondParents}</p>}
                </div>
              )}
              <p className="hero-mantra" lang="sa">
                {config.ganeshMantra[0]}
                <br />
                {config.ganeshMantra[1]}
              </p>
              <div className="hero-invitation">
                <div className="scroll-cue-slot">
                  {showScrollCue && (
                    <a
                      className="scroll-cue scroll-cue-highlight focus-ring"
                      href="#invitation"
                      aria-label="Scroll down to the invitation details"
                      onClick={() => setShowScrollCue(false)}
                    >
                      <span>Scroll down</span>
                      <ChevronsDown aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="hero-invitation-title">You’re Invited</p>
                <p>
                  With joyful hearts, we invite you to celebrate our wedding and bless our new
                  beginning.
                </p>
              </div>
            </div>
            <div className="hero-artwork" aria-hidden="true">
              <img
                src={config.artwork}
                srcSet={`${config.artwork.replace(".jpg", "-768.jpg")} 768w, ${config.artwork} 1536w`}
                sizes="(min-width: 1100px) 1040px, (min-width: 760px) 760px, 100vw"
                alt=""
                loading="lazy"
                decoding="async"
                width={1536}
                height={1024}
              />
            </div>
          </section>

          <section className="family-section" id="invitation">
            <div className="edge-flower edge-flower-left" aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <p className="ganesh-invocation family-invocation">{config.invocation}</p>
              <p className="translated-blessing">{config.openingBlessing}</p>
              <p className="family-memory">{config.memorialLine}</p>
              <p className="family-blessing">{config.blessingLine}</p>
              <Monogram />
            </motion.div>
          </section>

          <section className="celebrations-section" id="celebrations">
            <SectionHeading>Join our celebrations</SectionHeading>
            <div className="events">
              {config.celebrations.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </section>

          {optionalDetails.length > 0 && (
            <section className="optional-section">
              {optionalDetails.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <p>{value}</p>
                </div>
              ))}
            </section>
          )}

          <section className="countdown-section" id="countdown">
            <SectionHeading eyebrow="Until we celebrate">Our forever begins in</SectionHeading>
            <Countdown />
          </section>

          <footer id="contact">
            <div className="closing-copy">
              <Monogram />
              <span>From:</span>
              <p className="closing-message">{config.hosts}</p>
              <p>{config.homeAddress}</p>
              <div className="family-contacts">
                <div className="contact-numbers" aria-label="Family contact numbers">
                  <span className="contact-label">Contact:</span>
                  {config.contacts.map((number) => (
                    <span key={number} className="contact-number">
                      {number.length === 10 ? (
                        <a className="focus-ring" href={`tel:+91${number}`}>
                          {number}
                        </a>
                      ) : (
                        number
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div className="closing-rule" aria-hidden="true" />
              <p>Our celebration is complete with you.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

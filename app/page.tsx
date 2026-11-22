import Image from "next/image";
import { Birds, Branch, Fret, Gate, InkFilters, Wanderer } from "@/components/Ink";
import Reveal from "@/components/Reveal";
import SealNav from "@/components/SealNav";
import { education, experience, links, profile, works } from "@/lib/content";

const petals = [
  [12, 0, 15], [27, 5, 19], [41, 9, 14], [58, 2, 21], [66, 12, 17], [79, 6, 16], [90, 14, 20],
];

/** Lily clumps as [stencil, width, left, bottom, behind the skeleton?], in fractions of the garden box. */
const garden: [string, number, number, number, boolean][] = [
  ["-b", 0.78, -0.14, 0.2, true],
  ["", 0.7, 0.5, 0.24, true],
  ["", 0.62, -0.1, 0, false],
  ["-b", 0.66, 0.44, 0, false],
  ["-b", 0.4, 0.22, -0.02, false],
];

function lily([stencil, width, left, bottom, back]: (typeof garden)[number], i: number) {
  const mask = `url(/ink-lilies${stencil}.png), linear-gradient(to top, transparent, #000 22%)`;
  return (
    <i
      key={`${back}${i}`}
      className={back ? "lily back" : "lily"}
      style={{
        width: `${width * 100}%`,
        left: `${left * 100}%`,
        bottom: `${bottom * 100}%`,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

function WorkRow({ work: w }: { work: (typeof works)[number] }) {
  const body = (
    <>
      <span className="brush numeral" aria-hidden="true">{w.numeral}</span>
      <span className="workMain">
        <span className="workTitle">{w.title}</span>
        <span className="workDesc">{w.description}</span>
      </span>
      <span className="workTags">{w.tags.join(" · ")}</span>
      <span className="workYear">{w.href ? "GitHub ↗" : "Private"}</span>
    </>
  );
  return w.href ? (
    <a href={w.href} target="_blank" rel="noreferrer" className="workRow">{body}</a>
  ) : (
    <div className="workRow">{body}</div>
  );
}

export default function Home() {
  const year = profile.year;

  return (
    <main>
      <InkFilters />
      <div className="grain" aria-hidden="true" />
      <SealNav />

      {/* 序 — Intro */}
      <section id="intro" className="hero">
        <Fret className="tl" />
        <Fret className="tr" />
        <Fret className="bl" />
        <Fret className="br" />

        {/* a skeleton keeping its red blossoms, in a garden of black spider lilies */}
        <div className="soul" aria-hidden="true">
          {garden.filter((g) => g[4]).map(lily)}
          <div className="soulSkeleton">
            <Image src="/ink-skeleton.webp" alt="" fill sizes="(max-width: 1100px) 1px, 24vw" />
          </div>
          {garden.filter((g) => !g[4]).map(lily)}
        </div>

        <div className="dragon" aria-hidden="true">
          <Image src="/ink-dragon.jpg" alt="" fill preload sizes="(max-width: 1100px) 90vw, 32vw" />
        </div>

        <p className="corner tl">
          Portfolio
          <span>作品集 · {year}</span>
        </p>

        <div className="petals" aria-hidden="true">
          {petals.map(([left, delay, dur], i) => (
            <i key={i} style={{ left: `${left}%`, animationDelay: `${delay}s`, animationDuration: `${dur}s` }} />
          ))}
        </div>
        <Birds className="heroBirds" />

        <div className="sun" aria-hidden="true" />
        <div className="signature" aria-hidden="true">
          <span className="brush">{profile.nameCn}</span>
          <span className="chop">{profile.seal}</span>
        </div>

        <Gate />

        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role} · {profile.location}</p>

        <a href="#about" className="drip" aria-label="Scroll to about">
          <span />
        </a>
      </section>

      {/* 我 — About */}
      <section id="about" className="section about">
        <div className="aboutBg" aria-hidden="true">
          <Image src="/ink-pavilion.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
        <Reveal className="heading">
          <span className="brush">壹</span>
          <h2>About</h2>
        </Reveal>

        <div className="aboutGrid">
          <Reveal className="prose">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="meta">{profile.location} · {profile.availability}</p>
            <ul className="tools">
              {profile.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="motto" delay={150}>
            <p className="brush" lang="zh">{profile.motto.cn}</p>
            <p className="mottoEn">{profile.motto.en}</p>
          </Reveal>

        </div>

        <Branch />
      </section>

      {/* 作 — Work */}
      <section id="work" className="section work">
        <Fret className="tr" />
        <Fret className="bl" />
        <Reveal className="heading">
          <span className="brush">贰</span>
          <h2>Selected Work</h2>
        </Reveal>

        <ol className="works">
          {works.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={Math.min(i, 3) * 80}>
                <WorkRow work={w} />
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* 历 — Path */}
      <section id="path" className="section path">
        <Reveal className="heading">
          <span className="brush">叁</span>
          <h2>Path</h2>
        </Reveal>

        <ol className="steps">
          {experience.map((e) => (
            <li key={e.title + e.when}>
              <Reveal className="step">
                <span className="stepWhen">{e.when}</span>
                <span className="stepMain">
                  <span className="stepTitle">{e.title}</span>
                  <span className="stepPlace">{e.place}</span>
                  <span className="stepDesc">{e.description}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <h3 className="subheading">Education</h3>
        </Reveal>
        <ol className="steps">
          {education.map((e) => (
            <li key={e.title}>
              <Reveal className="step">
                <span className="stepWhen">{e.when}</span>
                <span className="stepMain">
                  <span className="stepTitle">{e.title}</span>
                  <span className="stepPlace">{e.place}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* 信 — Contact */}
      <section id="contact" className="contact">
        <div className="contactBg" aria-hidden="true">
          <Image src="/ink-figure.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 45vw" />
        </div>
        <div className="contactTop">
          <p className="shout">
            Let&rsquo;s
            <br />
            make
            <br />
            something
            <span lang="zh">静 候 佳 音</span>
          </p>
          <span className="chopOutline brush" aria-hidden="true">
            {profile.nameCn.slice(0, 2)}
            <br />
            {profile.nameCn.slice(2)}
          </span>
        </div>

        <div className="contactMid">
          <p className="ghost" aria-hidden="true">
            <span>S A Y</span>
            <span>H E L L O</span>
          </p>
          <Reveal className="greeting">
            <p className="brush" lang="zh">见字如面</p>
            <p className="pinyin">Jian · Zi · Ru · Mian<span>to read these words is to meet in person</span></p>
          </Reveal>
        </div>

        <div className="contactBottom">
          <div>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <ul className="links">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <p className="colophon">© {year} {profile.name}</p>
          <Wanderer className="contactWanderer" />
        </div>
      </section>
    </main>
  );
}

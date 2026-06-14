# Blackstar Website — Redesign Brief

A copy-and-direction brief for rebuilding the Blackstar homepage. Hand this to Code to implement against the existing Next.js / Tailwind / shadcn codebase. Keep the current dark/orange visual language — this is a refinement and a re-messaging, not a from-scratch rebuild.

---

## 1. Strategy

- **Audience (primary):** flight training organizations — flight schools, academies, and the instructors/owners who buy and run training devices.
- **Positioning:** The Blackstar ATD is the **connected hub of a complete flight-training ecosystem**, ending the decades-old fragmentation where the simulator was an isolated box. It integrates VR, a training operating system, live navigation data, and an instructor station — on one device that runs both Prepar3D and X-Plane.
- **Core message:** *This Changes Everything* — now backed by the ecosystem story rather than left as an empty claim.
- **Primary CTA (every section funnels here):** **Book a Consultation.**
- **The unlock:** VR and the full ecosystem were deliberately hidden on the old site for competitive reasons (pre-AirVenture). That constraint is gone. VR is now a **co-equal** centerpiece of the ecosystem — not the lead, not hidden.

---

## 2. Page structure (top to bottom)

1. Navigation (persistent "Book a Consultation" button)
2. Hero — *This Changes Everything*
3. The Shift — the island-to-hub story
4. The Ecosystem — four co-equal components (the new heart of the site)
5. One Device, Two Platforms — the P3D ↔ X-Plane switch
6. Atlas — the instructor station, in depth
7. The Hardware — military-spec build + real specs
8. Closing CTA — Book a Consultation
9. Footer

---

## 3. Section-by-section copy

### Navigation
- Logo: **BLACKSTAR** / Flight Simulations
- Links: Ecosystem · Atlas · Platforms · Hardware · Timeline
- Persistent button (right): **Book a Consultation**

### Hero
- Eyebrow: `Integrated Flight Training Ecosystem`
- Headline: **This Changes Everything**
- Subhead: *The Blackstar ATD is the hub of a complete flight-training ecosystem — professional VR, live global navigation data, and a full training operating system, on one device that runs both Prepar3D and X-Plane.*
- Primary button: **Book a Consultation**
- Secondary link: **Explore the Ecosystem** (scrolls to section 4)
- Keep the existing hero video background.

### The Shift
- Eyebrow: `The Problem`
- Headline: **For decades, the simulator has been an island.**
- Body: *Flight training resources have been fragmented forever, and the aviation training device has been the most isolated piece of all — a closed box, cut off from a school's scheduling, curriculum, and student progress. Blackstar changes that. We built the ATD as an open platform that connects to everything your program already runs on — turning the most isolated tool in the building into the hub that ties it all together.*

### The Ecosystem (centerpiece)
- Eyebrow: `The Ecosystem`
- Headline: **Four systems. One connected whole.**
- Intro: *Each component is powerful on its own. Connected through Blackstar, they become something none of them is alone: a fully integrated flight-training ecosystem.*
- Visual suggestion: a hub-and-spokes motif with the Blackstar ATD at the center and the four components around it, connected.
- Four **co-equal** cards (equal visual weight):

  1. **Virtual Reality — Varjo XR-4**
     *Professional mixed-reality, proven in military and government training and now making its general-aviation debut. With adjustable masking you see your real hands and real controls inside a true-to-life virtual cockpit — reach out and turn a real knob.*

  2. **Operating System — Community Aviation**
     *Scheduling, records, curriculum, lesson plans, and scenarios in one place — all grounded in the Learn-Do-Fly Training Standard, with a built-in knowledge engine.*

  3. **Navigation Data — RealNav Data**
     *Global, commercially licensed navigation data on 4x and 13x cycles. Students train on the same data the real world flies on.*

  4. **Instructor Station — Atlas**
     *The integrator. Build scenarios, inject weather, accept bookings, and communicate across the entire ecosystem — from one station built specifically for the Blackstar family.*

### One Device, Two Platforms
- Eyebrow: `No Compromises`
- Headline: **One device. Both platforms.**
- Body: *A single Blackstar ATD runs on both Lockheed Martin Prepar3D and X-Plane — switchable at the flip of a switch, on the same machine. No second device, no second purchase. Varjo, RealNav Data, Community Aviation, and Atlas all work on either engine.*

### Atlas — the instructor station (in depth)
- Eyebrow: `Atlas — The Instructor Station`
- Headline: **Total control of every training session.**
- Subhead: *Atlas gives instructors complete command of the ecosystem — integrated with both Prepar3D and X-Plane for one unified teaching experience.*
- Six feature cards (carry over from the current site, lightly polished):
  - **Real-Time Monitoring** — Watch student performance live with comprehensive flight-data overlays and instrument tracking.
  - **Multi-Student Sessions** — Manage multiple simulator stations simultaneously from a single instructor interface.
  - **Performance Analytics** — Detailed post-flight debriefs with recorded metrics, scoring, and progress tracking over time.
  - **Integrated Comms** — Built-in ATC simulation and direct communication between instructor and student.
  - **Scenario Control** — Inject weather, failures, and traffic in real time to create dynamic training scenarios.
  - **Instant Replay** — Pause, rewind, and replay any moment of the flight for detailed analysis.

### The Hardware
> **Note:** This is NOT a motion platform and there are no wraparound displays. The realism comes from **mixed-reality VR paired with real physical controls**. All "6-DOF motion," "2G sustained," and "8K wraparound display" claims from the old site are removed.

- Eyebrow: `Hardware Engineering`
- Headline: **Built for realism.**
- Body: *The Blackstar ATD blends a professional Varjo headset with real flight hardware. In VR or mixed-reality with masking, you see a true-to-life cockpit and your own hands — and when you reach out to set a frequency or enter a flight plan, you're turning real knobs and pressing real buttons. Virtual instruments, paired one-to-one with physical controls.*
- Three cards:
  - **Mixed-Reality Immersion** — A professional Varjo headset runs full VR or mixed-reality passthrough with masking, blending a true-to-life virtual cockpit with your real hands and surroundings.
  - **Real Controls, Virtual Cockpit** — Physical knobs, switches, and instruments are paired one-to-one with their virtual counterparts. Reach out and you're working real hardware — identical tactile feedback, exactly where you expect it.
  - **Authentic Flight Models** — Powered by Lockheed Martin Prepar3D and X-Plane for accurate, certifiable aircraft behavior.
- **Stat counters — real Varjo XR-4 specs (source: varjo.com/products/xr-4). Drop "Axes of Motion."**
  - Field of View: **120°** (120° × 105°)
  - Visual Resolution: **51** pixels per degree (near-human-eye); label could read "51 PPD" or "Retina-class"
  - Mixed-Reality Cameras: **Dual 20 MP** passthrough
  - Contrast Ratio: **10,000:1** (or swap for "200 Hz eye tracking")
  - (These are headset specs — present them as the visual system of the Blackstar ATD, e.g. "Powered by Varjo XR-4.")

### Closing CTA
- Headline: **See it for yourself.**
- Body: *Book a consultation and we'll show you how a Blackstar ATD fits into your training program.*
- Button: **Book a Consultation** → embed the **Calendly "Blackstar Consultation"** event inline (so the surrounding Blackstar branding frames it). Live now: `https://calendly.com/billywin/blackstar-consultation` (30 min, Google Meet, host: Billy Winburn, accent `#ff4f00`). Host can be reassigned later.

### Footer
- Fix the dead **Contact** and **Support** links (currently `#`).
- Keep Privacy; wire up or remove Cookies.
- Wire **Book a Consultation** to a real destination (see Open Questions).

---

## 4. Visual direction (refine, don't replace)

- **Keep:** near-black background (`#0a0a0a`), orange/amber accent, bold condensed uppercase display type, video/motion in the hero.
- **Readability & responsiveness (REQUIRED):**
  - **Type is currently too small.** Increase base body size (≥18px on desktop, scaling up for large headers) and ensure strong contrast against dark backgrounds. Generous line-height and spacing.
  - **Mobile-first.** The site must be fully optimized for phones — readable type, tap-friendly buttons, stacked layouts, no horizontal scroll, the nav and "Book a Consultation" button working cleanly on small screens. Test at common phone widths.
- **Sharpen:**
  - Add tonal range (dark grays, subtle gradients) so it's not flat black + orange.
  - Make **real cockpit / VR / hardware photography** the hero of each section — this is the true differentiator over generic dark "tech" sites.
  - Introduce a **hub-and-spokes / connection motif** to carry the ecosystem idea visually (lines connecting the four components to the central ATD).
  - Tighten type hierarchy; ensure body copy is highly legible against dark backgrounds.
- **Tone:** confident and precise, not hype. Let the specifics (VR, dual-platform, real nav data, instructor control) do the persuading.

---

## 5. Decisions & open questions

**Decided / done:**
- Audience = flight training organizations. Hero = "This Changes Everything." VR = co-equal ecosystem component.
- No partner/school logos or proof yet — **omit any trust/logo strip** for now.
- Ecosystem components **stay as cards** on the homepage — no separate deeper pages for now.
- Hardware realism = **mixed-reality VR + real physical controls** (no motion platform, no wraparound displays).
- ✅ **Calendly event created**: `https://calendly.com/billywin/blackstar-consultation` — 30 min, Google Meet, host Billy Winburn (head of sales for now, reassign later). Embed inline on the Blackstar site.
- ✅ **FAA classification** — the Blackstar ATD is an **AATD (Advanced Aviation Training Device)**. Use **"FAA-approved AATD"** as a credibility point (it earns more loggable training credit than a basic ATD). Do **not** state specific hour allowances until confirmed.
- ✅ **XR-4 variant** — default is the **Varjo XR-4**, with the **XR-4 Focal Edition** (gaze-driven autofocus, sharper for reading small instruments) offered as a supported option.

**Still open (need Billy):**
1. **Real photos** of the rig (headset, paired physical controls, a session in progress) — the single biggest upgrade over the current stock-feeling video.
2. **Specific AATD hour allowances** — only to be added once Billy confirms the exact loggable-credit figures.

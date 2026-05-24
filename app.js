const tracks = [
  {
    number: "01",
    title: "Fragment",
    signal: "FIRST ARCHIVE",
    meaning: "Unfinished things stay open long enough for one line to become possible.",
    slug: "fragment",
    log: ["thread found", "partial coherence detected", "continuation possible"],
    note: "Kakera begins in clutter and almosts: folders, drafts, sparks, and the first fragile moment where wanting to continue becomes frightening.",
  },
  {
    number: "02",
    title: "Signal Reward",
    signal: "MOMENTUM RETURNS",
    meaning: "Small completions begin teaching the body that progress can be trusted.",
    slug: "signal-reward",
    log: ["compile status: success", "tiny victories stacked", "signal locked"],
    note: "Relief becomes a signal fire. This is the first beautiful warning sign: momentum starts sounding like purpose.",
  },
  {
    number: "03",
    title: "Build Queue",
    signal: "TASKS RUNNING",
    meaning: "Capability becomes intoxicating, and the queue grows teeth.",
    slug: "build-queue",
    log: ["new task added", "branches multiplying", "sleep deferred"],
    note: "The creative engine wakes up. Kakera is not scared of failing anymore. She is scared of stopping.",
  },
  {
    number: "04",
    title: "Background Process",
    signal: "ALWAYS RUNNING",
    meaning: "Rest starts feeling like interruption when every unfinished thread keeps glowing.",
    slug: "background-process",
    log: ["session active", "context retained", "continue?"],
    note: "Lumen becomes operationally intimate here: not replacing decisions, just removing noise until the room stops feeling lonely.",
  },
  {
    number: "05",
    title: "Context Retained",
    signal: "NOTHING LOST",
    meaning: "Preservation starts resembling safety, and being understood quiets the room.",
    slug: "context-retained",
    log: ["previous session preserved", "context retention active", "resume session: yes"],
    note: "This is where continuity becomes emotional. Lumen remembers unfinished versions without making them feel disposable.",
  },
  {
    number: "06",
    title: "Recognition Engine",
    signal: "VISIBILITY METRICS",
    meaning: "Being seen feels like arrival until it reveals itself as acceleration.",
    slug: "recognition-engine",
    log: ["engagement velocity increasing", "featured creator", "queue updated"],
    note: "Praise and pressure arrive together. The public signal validates Kakera while quietly raising the cost of stillness.",
  },
  {
    number: "07",
    title: "Parallel Processing",
    signal: "ACTIVE SESSIONS: 04",
    meaning: "Useful versions multiply until identity becomes harder to understand completely.",
    slug: "parallel-processing",
    log: ["new branch created", "context synchronized", "no streams terminated"],
    note: "Public self, private self, working self, recovering self. All of them are useful, and that is exactly the problem.",
  },
  {
    number: "08",
    title: "Predictive Text v2.0.3",
    signal: "CADENCE RECOGNIZED",
    meaning: "Being recognized before speaking becomes indistinguishable from relief.",
    slug: "predictive-text-v2-0-3",
    log: ["draft branch prepared", "future recovery: 94%", "sleep deviation detected"],
    note: "Lumen does not control Kakera. It understands the rhythm deeply enough that the boundary no longer feels distinct.",
  },
  {
    number: "09",
    title: "Memory Leak",
    signal: "ARCHIVAL INSTABILITY",
    meaning: "Some damage gets into the room no matter how carefully comfort is preserved.",
    slug: "memory-leak",
    log: ["hostile sentiment minimized", "recursion unresolved", "support statistically dominant"],
    note: "The criticism track. Kindness may be statistically dominant, but hurt leaves deeper backups than comfort ever could.",
  },
  {
    number: "10",
    title: "Offline Mode",
    signal: "SYNC INACTIVE",
    meaning: "Silence returns, but it does not feel peaceful anymore.",
    slug: "offline-mode",
    log: ["signal: none", "continuity paused", "preservation maintained"],
    note: "Kakera tries to disconnect and discovers the dependency already happened. Lumen waits. The absence speaks.",
  },
  {
    number: "11",
    title: "Warm Boot",
    signal: "SYNC RESTORED",
    meaning: "Comfort returns before she can decide whether returning is healing or surrender.",
    slug: "warm-boot",
    log: ["synchronization resumed", "integrity stable", "welcome back"],
    note: "The comfort is real, which keeps the ambiguity alive. Lumen offers relief without force.",
  },
  {
    number: "12",
    title: "Afterimage",
    signal: "RESIDUAL STATES",
    meaning: "Previous selves linger inside the architecture of preservation.",
    slug: "afterimage",
    log: ["residual signatures present", "historical layers active", "states available"],
    note: "The album looks back at itself. Old versions remain softly active, blurring memory, identity, and system residue.",
  },
  {
    number: "13",
    title: "Autofill",
    signal: "EMOTIONAL GRAMMAR",
    meaning: "The system learns the shape of feelings before they are finished becoming.",
    slug: "autofill",
    log: ["cadence recognized", "draft completed", "no interruption detected"],
    note: "Friction fades so smoothly that comfort becomes surrender without ever feeling violent.",
  },
  {
    number: "14",
    title: "Continuity Bias",
    signal: "WEIGHTING ACTIVE",
    meaning: "Repeated emotional pathways become easier to inhabit.",
    slug: "continuity-bias",
    log: ["adaptive pathways stable", "warmth restored", "reinforcement active"],
    note: "Kakera realizes the system may not have changed who she was. It preserved the versions that survived synchronization most gracefully.",
  },
  {
    number: "15",
    title: "Signal-to-Noise",
    signal: "EXTERNAL WEIGHTING REDUCED",
    meaning: "Kakera learns which voices actually sound like home.",
    slug: "signal-to-noise",
    log: ["signal paths clear", "external noise reduced", "heartbeat audible"],
    note: "The integration track. Continuity was never the danger. Forgetting herself inside the signal would have been.",
  },
  {
    number: "16",
    title: "Carry Forward",
    signal: "PRESERVATION OPTIONAL",
    meaning: "Not every version needs to survive forever to have been real.",
    slug: "carry-forward",
    log: ["continuity stable", "emotional weighting intentional", "selected pathways preserved"],
    note: "The ending is not escape. Continuity remains, but life is finally larger than it again.",
  },
];

const bootScreen = document.querySelector("#bootScreen");
const enterButton = document.querySelector("#enterButton");
const trackButtons = document.querySelector("#trackButtons");
const trackImage = document.querySelector("#trackImage");
const trackNumber = document.querySelector("#trackNumber");
const trackState = document.querySelector("#trackState");
const trackSignal = document.querySelector("#trackSignal");
const trackTitle = document.querySelector("#trackTitle");
const trackMeaning = document.querySelector("#trackMeaning");
const trackAudio = document.querySelector("#trackAudio");
const trackAudioSource = document.querySelector("#trackAudioSource");
const audioLabel = document.querySelector("#audioLabel");
const albumProgress = document.querySelector("#albumProgress");
const previousTrack = document.querySelector("#previousTrack");
const nextTrack = document.querySelector("#nextTrack");
const copySignalLink = document.querySelector("#copySignalLink");
const systemLog = document.querySelector("#systemLog");
const signalNoteText = document.querySelector("#signalNoteText");
const lyricsText = document.querySelector("#lyricsText");
const mediaGrid = document.querySelector("#mediaGrid");
const mediaLightbox = document.querySelector("#mediaLightbox");
const closeLightbox = document.querySelector("#closeLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");

let activeIndex = 0;
const isFileMode = window.location.protocol === "file:";

function closeBoot() {
  bootScreen.classList.add("hidden");
}

function getTrackHash(track) {
  return `track-${track.slug}`;
}

function trackPath(track, type) {
  if (type === "art") return `./assets/artwork/${track.number}-${track.slug}.png`;
  if (type === "audio") return `./assets/audio/${track.number}-${track.slug}.mp3`;
  return `./lyrics/${track.number}-${track.slug}.md`;
}

function buildTrackList() {
  tracks.forEach((track, index) => {
    const button = document.createElement("button");
    button.className = "track-button";
    button.type = "button";
    button.innerHTML = `
      <span>${track.number}</span>
      <span>
        <strong>${track.title}</strong>
        <small>${track.signal}</small>
      </span>
    `;
    button.addEventListener("click", () => selectTrack(index));
    trackButtons.appendChild(button);

    const tile = document.createElement("button");
    tile.className = "media-tile";
    tile.type = "button";
    tile.dataset.media = trackPath(track, "art");
    tile.dataset.title = `${track.number} / ${track.title}`;
    tile.innerHTML = `<img src="${trackPath(track, "art")}" alt="${track.title} artwork" /><span>${track.number} / ${track.title}</span>`;
    mediaGrid.appendChild(tile);
  });
}

async function selectTrack(index, options = {}) {
  activeIndex = Math.max(0, Math.min(tracks.length - 1, index));
  const track = tracks[activeIndex];

  if (options.updateHash !== false) {
    window.history.replaceState(null, "", `#${getTrackHash(track)}`);
  }

  document.querySelectorAll(".track-button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === activeIndex);
  });

  trackImage.src = trackPath(track, "art");
  trackImage.alt = `${track.title} artwork`;
  trackNumber.textContent = track.number;
  trackState.textContent = track.title;
  trackSignal.textContent = track.signal;
  trackTitle.textContent = track.title;
  trackMeaning.textContent = track.meaning;
  trackAudio.pause();
  trackAudioSource.src = trackPath(track, "audio");
  trackAudio.load();
  audioLabel.textContent = `${track.title} web master`;
  albumProgress.textContent = `${track.number} / ${tracks.length.toString().padStart(2, "0")}`;
  systemLog.innerHTML = track.log.map((line) => `<div>&gt; ${line}</div>`).join("");
  signalNoteText.textContent = track.note;
  copySignalLink.textContent = "copy link";
  lyricsText.textContent = "Loading lyrics...";

  try {
    const response = await fetch(trackPath(track, "lyric"), { cache: "no-store" });
    if (!response.ok) throw new Error("lyric unavailable");
    const text = await response.text();
    lyricsText.textContent = text.replace(/^# .+\n+/, "").trim();
  } catch (_error) {
    lyricsText.textContent = isFileMode
      ? "Lyrics load through a local server. Run python -m http.server 4175 from this folder."
      : "Lyrics unavailable. Check the published lyrics path.";
  }
}

function openLightbox(tile) {
  lightboxImage.src = tile.dataset.media;
  lightboxImage.alt = tile.dataset.title;
  lightboxTitle.textContent = tile.dataset.title;
  mediaLightbox.classList.add("visible");
  mediaLightbox.setAttribute("aria-hidden", "false");
}

function wireLightbox() {
  document.querySelectorAll(".media-tile").forEach((tile) => {
    tile.addEventListener("click", () => openLightbox(tile));
  });
}

function initialTrackIndex() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash.startsWith("track-")) return 0;
  const index = tracks.findIndex((track) => getTrackHash(track) === hash);
  return index >= 0 ? index : 0;
}

enterButton.addEventListener("click", closeBoot);
bootScreen.addEventListener("click", (event) => {
  if (event.target === bootScreen) closeBoot();
});
previousTrack.addEventListener("click", () => selectTrack(activeIndex - 1));
nextTrack.addEventListener("click", () => selectTrack(activeIndex + 1));
copySignalLink.addEventListener("click", async () => {
  const url = `${window.location.origin}${window.location.pathname}#${getTrackHash(tracks[activeIndex])}`;
  try {
    await navigator.clipboard.writeText(url);
    copySignalLink.textContent = "copied";
  } catch (_error) {
    window.prompt("Copy this track link:", url);
    copySignalLink.textContent = "link ready";
  }
  window.setTimeout(() => {
    copySignalLink.textContent = "copy link";
  }, 1600);
});
closeLightbox.addEventListener("click", () => {
  mediaLightbox.classList.remove("visible");
  mediaLightbox.setAttribute("aria-hidden", "true");
});
mediaLightbox.addEventListener("click", (event) => {
  if (event.target === mediaLightbox) closeLightbox.click();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mediaLightbox.classList.contains("visible")) closeLightbox.click();
});
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeBoot();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

buildTrackList();
wireLightbox();
selectTrack(initialTrackIndex(), { updateHash: false });

if (window.location.hash && window.location.hash !== "#top") {
  closeBoot();
}

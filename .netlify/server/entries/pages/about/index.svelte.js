import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index-054dfab6.js";
import { ceasar } from "../../endpoints/about/cipher.ts.js";
/* empty css                                                                 */const format = "webp";
const width = 160;
const height = 160;
const space = "srgb";
const channels = 3;
const depth = "uchar";
const density = 72;
const chromaSubsampling = "4:2:0";
const isProgressive = false;
const hasProfile = false;
const hasAlpha = false;
const aspect = 1;
const src = "/_app/assets/portrait-7d04a58b.webp";
const image = {
  _readableState: {
    objectMode: false,
    highWaterMark: 16384,
    buffer: {
      head: null,
      tail: null,
      length: 0
    },
    length: 0,
    pipes: [],
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    constructed: true,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: true,
    destroyed: false,
    errored: null,
    closed: false,
    closeEmitted: false,
    defaultEncoding: "utf8",
    awaitDrainWriters: null,
    multiAwaitDrain: false,
    readingMore: false,
    dataEmitted: false,
    decoder: null,
    encoding: null
  },
  _events: {},
  _eventsCount: 0,
  _maxListeners: void 0,
  _writableState: {
    objectMode: false,
    highWaterMark: 16384,
    finalCalled: false,
    needDrain: false,
    ending: false,
    ended: false,
    finished: false,
    destroyed: false,
    decodeStrings: true,
    defaultEncoding: "utf8",
    length: 0,
    writing: false,
    corked: 0,
    sync: true,
    bufferProcessing: false,
    onwrite: void 0,
    writecb: null,
    writelen: 0,
    afterWriteTickInfo: null,
    buffered: [],
    bufferedIndex: 0,
    allBuffers: true,
    allNoop: true,
    pendingcb: 0,
    constructed: true,
    prefinished: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: true,
    errored: null,
    closed: false,
    closeEmitted: false
  },
  allowHalfOpen: true,
  options: {
    topOffsetPre: -1,
    leftOffsetPre: -1,
    widthPre: -1,
    heightPre: -1,
    topOffsetPost: -1,
    leftOffsetPost: -1,
    widthPost: -1,
    heightPost: -1,
    width: 160,
    height: 160,
    canvas: "crop",
    position: 0,
    resizeBackground: [
      0,
      0,
      0,
      255
    ],
    useExifOrientation: false,
    angle: 0,
    rotationAngle: 0,
    rotationBackground: [
      0,
      0,
      0,
      255
    ],
    rotateBeforePreExtract: false,
    flip: false,
    flop: false,
    extendTop: 0,
    extendBottom: 0,
    extendLeft: 0,
    extendRight: 0,
    extendBackground: [
      0,
      0,
      0,
      255
    ],
    withoutEnlargement: false,
    affineMatrix: [],
    affineBackground: [
      0,
      0,
      0,
      255
    ],
    affineIdx: 0,
    affineIdy: 0,
    affineOdx: 0,
    affineOdy: 0,
    affineInterpolator: "bilinear",
    kernel: "lanczos3",
    fastShrinkOnLoad: true,
    tintA: 128,
    tintB: 128,
    flatten: false,
    flattenBackground: [
      0,
      0,
      0
    ],
    negate: false,
    medianSize: 0,
    blurSigma: 0,
    sharpenSigma: 0,
    sharpenFlat: 1,
    sharpenJagged: 2,
    threshold: 0,
    thresholdGrayscale: true,
    trimThreshold: 0,
    gamma: 0,
    gammaOut: 0,
    greyscale: false,
    normalise: false,
    claheWidth: 0,
    claheHeight: 0,
    claheMaxSlope: 3,
    brightness: 1,
    saturation: 1,
    hue: 0,
    booleanBufferIn: null,
    booleanFileIn: "",
    joinChannelIn: [],
    extractChannel: -1,
    removeAlpha: false,
    ensureAlpha: -1,
    colourspace: "srgb",
    composite: [],
    fileOut: "",
    formatOut: "webp",
    streamOut: false,
    withMetadata: false,
    withMetadataOrientation: -1,
    withMetadataDensity: 0,
    withMetadataIcc: "",
    withMetadataStrs: {},
    resolveWithObject: false,
    jpegQuality: 80,
    jpegProgressive: false,
    jpegChromaSubsampling: "4:2:0",
    jpegTrellisQuantisation: false,
    jpegOvershootDeringing: false,
    jpegOptimiseScans: false,
    jpegOptimiseCoding: true,
    jpegQuantisationTable: 0,
    pngProgressive: false,
    pngCompressionLevel: 6,
    pngAdaptiveFiltering: false,
    pngPalette: false,
    pngQuality: 100,
    pngColours: 256,
    pngDither: 1,
    webpQuality: 80,
    webpAlphaQuality: 100,
    webpLossless: false,
    webpNearLossless: false,
    webpSmartSubsample: false,
    webpReductionEffort: 4,
    tiffQuality: 80,
    tiffCompression: "jpeg",
    tiffPredictor: "horizontal",
    tiffPyramid: false,
    tiffBitdepth: 8,
    tiffTile: false,
    tiffTileHeight: 256,
    tiffTileWidth: 256,
    tiffXres: 1,
    tiffYres: 1,
    heifQuality: 50,
    heifLossless: false,
    heifCompression: "av1",
    heifSpeed: 5,
    heifChromaSubsampling: "4:2:0",
    tileSize: 256,
    tileOverlap: 0,
    tileContainer: "fs",
    tileLayout: "dz",
    tileFormat: "last",
    tileDepth: "last",
    tileAngle: 0,
    tileSkipBlanks: -1,
    tileBackground: [
      255,
      255,
      255,
      255
    ],
    tileCentre: false,
    tileId: "https://example.com/iiif",
    linearA: 1,
    linearB: 0,
    debuglog: void 0,
    queueListener: void 0,
    input: {
      failOnError: true,
      limitInputPixels: 268402689,
      sequentialRead: false,
      file: "/vscode/frontend-masters-sveltekit/src/portrait.jpg"
    }
  }
};
var portrait = {
  format,
  width,
  height,
  space,
  channels,
  depth,
  density,
  chromaSubsampling,
  isProgressive,
  hasProfile,
  hasAlpha,
  aspect,
  src,
  image
};
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.portrait.svelte-191yj6c.svelte-191yj6c{border-radius:100%;float:left;margin-right:2em;margin-bottom:1em}.title.svelte-191yj6c h2.svelte-191yj6c{margin-bottom:0}.tagline.svelte-191yj6c.svelte-191yj6c{color:var(--color-text-300);margin-bottom:var(--line-space)}@media(max-width: 30rem){.portrait.svelte-191yj6c.svelte-191yj6c{display:block;float:none;margin-left:auto;margin-right:auto;margin-bottom:calc(0.5 * var(--line-space))}.title.svelte-191yj6c.svelte-191yj6c{text-align:center}}[slot="hidden"].svelte-191yj6c.svelte-191yj6c{cursor:pointer;background:var(--color-secondary-200);color:var(--color-secondary-200-text)}@-webkit-keyframes svelte-191yj6c-flash{from{background:var(--color-secondary-400);color:var(--color-secondary-400-text)}to{background:transparent;color:inherit}}@keyframes svelte-191yj6c-flash{from{background:var(--color-secondary-400);color:var(--color-secondary-400-text)}to{background:transparent;color:inherit}}[slot="visible"].svelte-191yj6c.svelte-191yj6c{-webkit-animation:svelte-191yj6c-flash 1s var(--standard-curve);animation:svelte-191yj6c-flash 1s var(--standard-curve);border:1px dashed var(--color-text-100)}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  ceasar("axeeh", 7) + "@" + ceasar("jhzz", -7) + "." + ceasar("fhx", 7);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About \xB7 Cassidy Bandy</title>`, ""}`, ""}

<article class="${"article"}"><h1>About</h1>
	<div class="${"profile-card"}"><img class="${"portrait svelte-191yj6c"}"${add_attribute("src", portrait.src, 0)} alt="${"Cassidy's portrait"}" style="${"width: " + escape(portrait.width) + "px; height: " + escape(portrait.height) + "px"}">
		<div class="${"title svelte-191yj6c"}"><h2 class="${"svelte-191yj6c"}">Cassidy Bandy</h2>
			<div class="${"tagline svelte-191yj6c"}">Full Stack Engineer, Designer</div></div>

		<p>Hi, I&#39;m Cassidy! Cassie works too, if we&#39;re friends. As a day job I&#39;m a
			full-stack engineer. I like to design things too, like this website. My
			pronouns are she/her.
		</p>

		<p>I grew up in a relatively small town in Sweden, called \xD6rebro. I went to
			school for computer science, and picked up web development there. It&#39;s
			been a passion since. \xD6rebro has a big medieval castle, but otherwise a
			pretty calm and normal Swedish set piece.
		</p>

		<p>At the end of 2020, I left the safe and calm life I was leading for
			something completely unknown. I moved to the US! Now I live and work here.
			It doesn&#39;t quite feel like my normal yet, but having every day be an
			adventure is fun too!
		</p>

		<p>In my free time I like to:</p>
		<ul class="${"list"}"><li>Draw! \u{1F58D}</li>
			<li>Play roguelikes (it&#39;s a kind of video game)</li>
			<li>Learn new web tech</li>
			<li>Study japanese <sup lang="${"jp"}">(\u306F\u3058\u3081\u307E\u3057\u3066)</sup></li>
			<li>Watch anime, read manga and visual novels
				<ul><li>I have <a href="${"https://anilist.co/user/whimzee/"}" target="${"_blank"}" rel="${"noopener"}" class="${"text-link"}">one of these</a> to track all of that
					</li></ul></li>
			<li>Participate in various open source projects</li></ul>

		<h3>Contact</h3>

		${`<noscript><blockquote>Contact info is not shown with JavaScript disabled. This is to prevent
					it from getting picked up by web scrapers. Sorry!
				</blockquote></noscript>`}</div>
</article>`;
});
export { About as default };

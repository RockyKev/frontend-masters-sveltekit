import { n as noop, a as safe_not_equal, b as subscribe, r as run_all, i as is_function, c as create_ssr_component, d as add_attribute, v as validate_component, t as tick } from "../../chunks/index-054dfab6.js";
import { n as navigating, p as page, g as getStores } from "../../chunks/stores-2f64c591.js";
import { L as Logo } from "../../chunks/Logo-44d34826.js";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
var Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'nav.svelte-1vlitnp{display:flex;align-items:center;margin:calc(1.5 * var(--line-space)) 0}.logo.svelte-1vlitnp .svg-icon{display:flex}.divider.svelte-1vlitnp{height:1em;width:1px;background:var(--color-text-200);margin:0 2em;flex-shrink:0}ul.svelte-1vlitnp{display:flex}li.svelte-1vlitnp{display:block;position:relative;cursor:pointer}li.svelte-1vlitnp:not(:last-of-type){margin-right:1.5em}.nav-link.svelte-1vlitnp{display:block;padding:0.5em 0;position:relative}.nav-link.svelte-1vlitnp::after{content:"";display:block;position:absolute;height:2px;width:0;bottom:0;background-color:var(--color-primary-400);transition:width 70ms var(--standard-curve)}.nav-link.svelte-1vlitnp:hover::after{width:33%}.nav-link[aria-current].svelte-1vlitnp::after,.nav-link.navigating-to.svelte-1vlitnp::after{width:100% !important}@-webkit-keyframes svelte-1vlitnp-load{0%{background-position:0% 0%}50%{background-position:100% 0%}100%{background-position:0% 0%}}@keyframes svelte-1vlitnp-load{0%{background-position:0% 0%}50%{background-position:100% 0%}100%{background-position:0% 0%}}.nav-link.navigating-to.svelte-1vlitnp::after{background:linear-gradient(\r\n				90deg,\r\n				var(--color-primary-400),\r\n				var(--color-primary-200),\r\n				var(--color-primary-400)\r\n			);background-size:300% 300%;-webkit-animation:1s infinite svelte-1vlitnp-load var(--deceleration-curve);animation:1s infinite svelte-1vlitnp-load var(--deceleration-curve)}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $home, $$unsubscribe_home;
  let $blog, $$unsubscribe_blog;
  let $work, $$unsubscribe_work;
  const compass = (pattern) => derived([navigating, page], ([$navigating, $page]) => ({
    isCurrent: !$navigating && pattern.test($page.url.pathname),
    navigatingTo: $navigating && pattern.test($navigating.to.path)
  }));
  const home = compass(/^\/$/);
  $$unsubscribe_home = subscribe(home, (value) => $home = value);
  const work = compass(/^\/work/);
  $$unsubscribe_work = subscribe(work, (value) => $work = value);
  const blog = compass(/^\/blog/);
  $$unsubscribe_blog = subscribe(blog, (value) => $blog = value);
  compass(/^\/about/);
  $$result.css.add(css$2);
  $$unsubscribe_home();
  $$unsubscribe_blog();
  $$unsubscribe_work();
  return `<nav role="${"navigation"}" class="${"svelte-1vlitnp"}"><a href="${"/"}" title="${"home"}" class="${"logo svelte-1vlitnp"}"${add_attribute("aria-current", $home.isCurrent ? "page" : void 0, 0)} sveltekit:prefetch>${validate_component(Logo, "Logo").$$render($$result, { size: "2em" }, {}, {})}</a>
	<div class="${"divider svelte-1vlitnp"}" aria-hidden="${"true"}"></div>
	<ul class="${"svelte-1vlitnp"}"><li class="${"svelte-1vlitnp"}"><a href="${"/blog"}" class="${["nav-link svelte-1vlitnp", $blog.navigatingTo ? "navigating-to" : ""].join(" ").trim()}"${add_attribute("aria-current", $blog.isCurrent ? "page" : void 0, 0)} sveltekit:prefetch>Notes
			</a></li>
		
		<li class="${"svelte-1vlitnp"}">
			<a href="${"https://www.heyitsrocky.com/"}" class="${["nav-link svelte-1vlitnp", $work.navigatingTo ? "navigating-to" : ""].join(" ").trim()}"${add_attribute("aria-current", $work.isCurrent ? "page" : void 0, 0)} sveltekit:prefetch>HeyItsRocky 
		</a></li>
		<li class="${"svelte-1vlitnp"}">
			<a href="${"https://til.heyitsrocky.com/"}" class="${["nav-link svelte-1vlitnp", $work.navigatingTo ? "navigating-to" : ""].join(" ").trim()}"${add_attribute("aria-current", $work.isCurrent ? "page" : void 0, 0)} sveltekit:prefetch>Today I learned 
		</a></li></ul>
</nav>`;
});
var _loadingBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loading-track.svelte-137jwhg{position:fixed;top:0;left:0;height:2px;width:0%;background:var(--color-primary-400);transition:width 7s cubic-bezier(0.05, 1, 0.22, 1)}.loading-track.finished.svelte-137jwhg{transition-duration:500ms;transition-timing-function:var(--standard-curve)}",
  map: null
};
const Loading_bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  const progress = writable(0);
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  let navigatingTimeout;
  let isVisible = false;
  let isVisibleTimeout;
  const navigatingDelayed = derived(navigating, (value, set) => {
    clearTimeout(navigatingTimeout);
    if (value) {
      navigatingTimeout = setTimeout(() => set(true), 200);
    } else {
      set(false);
    }
  });
  async function startLoading() {
    isVisible = true;
    clearTimeout(isVisibleTimeout);
    progress.set(0);
    await tick();
    await new Promise(requestAnimationFrame);
    progress.set(0.7);
  }
  function endLoading() {
    progress.set(1);
    clearTimeout(isVisibleTimeout);
    isVisibleTimeout = setTimeout(() => isVisible = false, 500);
  }
  navigatingDelayed.subscribe((isNavigating) => {
    if (isNavigating) {
      startLoading();
    } else {
      endLoading();
    }
  });
  $$result.css.add(css$1);
  $$unsubscribe_progress();
  return `${isVisible ? `<div class="${["loading-track svelte-137jwhg", $progress === 1 ? "finished" : ""].join(" ").trim()}"${add_attribute("style", `width: ${100 * $progress}%`, 0)} aria-hidden="${"true"}"></div>` : ``}`;
});
var reset = "";
var global = "";
var theme = "";
var code = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-pncc3n{max-width:60em;margin:0 auto}main.svelte-pncc3n{position:relative}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getStores();
  let element;
  $$result.css.add(css);
  return `

${validate_component(Loading_bar, "LoadingBar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-pncc3n"}"${add_attribute("this", element, 0)}>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	<main class="${"svelte-pncc3n"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export { _layout as default };

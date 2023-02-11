import { M as now, N as loop, S as SvelteComponent, i as init, s as safe_not_equal, k as element, D as svg_element, a as space, q as text, l as claim_element, m as children, E as claim_svg_element, h as detach, c as claim_space, r as claim_text, n as attr, p as set_style, b as insert_hydration, G as append_hydration, O as listen, u as set_data, C as noop, P as run_all, H as component_subscribe, x as create_component, Q as head_selector, y as claim_component, F as src_url_equal, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-d985765e.js";
import { w as writable } from "../../chunks/index-bb582736.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const Counter_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div2;
  let button0;
  let svg0;
  let path0;
  let t0;
  let div1;
  let div0;
  let strong0;
  let t1_value = Math.floor(
    /*$displayed_count*/
    ctx[1] + 1
  ) + "";
  let t1;
  let t2;
  let strong1;
  let t3_value = Math.floor(
    /*$displayed_count*/
    ctx[1]
  ) + "";
  let t3;
  let t4;
  let button1;
  let svg1;
  let path1;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      button0 = element("button");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      strong0 = element("strong");
      t1 = text(t1_value);
      t2 = space();
      strong1 = element("strong");
      t3 = text(t3_value);
      t4 = space();
      button1 = element("button");
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      button0 = claim_element(div2_nodes, "BUTTON", { "aria-label": true, class: true });
      var button0_nodes = children(button0);
      svg0 = claim_svg_element(button0_nodes, "svg", {
        "aria-hidden": true,
        viewBox: true,
        class: true
      });
      var svg0_nodes = children(svg0);
      path0 = claim_svg_element(svg0_nodes, "path", { d: true, class: true });
      children(path0).forEach(detach);
      svg0_nodes.forEach(detach);
      button0_nodes.forEach(detach);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      strong0 = claim_element(div0_nodes, "STRONG", { class: true, "aria-hidden": true });
      var strong0_nodes = children(strong0);
      t1 = claim_text(strong0_nodes, t1_value);
      strong0_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      strong1 = claim_element(div0_nodes, "STRONG", { class: true });
      var strong1_nodes = children(strong1);
      t3 = claim_text(strong1_nodes, t3_value);
      strong1_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      button1 = claim_element(div2_nodes, "BUTTON", { "aria-label": true, class: true });
      var button1_nodes = children(button1);
      svg1 = claim_svg_element(button1_nodes, "svg", {
        "aria-hidden": true,
        viewBox: true,
        class: true
      });
      var svg1_nodes = children(svg1);
      path1 = claim_svg_element(svg1_nodes, "path", { d: true, class: true });
      children(path1).forEach(detach);
      svg1_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M0,0.5 L1,0.5");
      attr(path0, "class", "svelte-y96mxt");
      attr(svg0, "aria-hidden", "true");
      attr(svg0, "viewBox", "0 0 1 1");
      attr(svg0, "class", "svelte-y96mxt");
      attr(button0, "aria-label", "Decrease the counter by one");
      attr(button0, "class", "svelte-y96mxt");
      attr(strong0, "class", "hidden svelte-y96mxt");
      attr(strong0, "aria-hidden", "true");
      attr(strong1, "class", "svelte-y96mxt");
      attr(div0, "class", "counter-digits svelte-y96mxt");
      set_style(div0, "transform", "translate(0, " + 100 * /*offset*/
      ctx[2] + "%)");
      attr(div1, "class", "counter-viewport svelte-y96mxt");
      attr(path1, "d", "M0,0.5 L1,0.5 M0.5,0 L0.5,1");
      attr(path1, "class", "svelte-y96mxt");
      attr(svg1, "aria-hidden", "true");
      attr(svg1, "viewBox", "0 0 1 1");
      attr(svg1, "class", "svelte-y96mxt");
      attr(button1, "aria-label", "Increase the counter by one");
      attr(button1, "class", "svelte-y96mxt");
      attr(div2, "class", "counter svelte-y96mxt");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, button0);
      append_hydration(button0, svg0);
      append_hydration(svg0, path0);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      append_hydration(div0, strong0);
      append_hydration(strong0, t1);
      append_hydration(div0, t2);
      append_hydration(div0, strong1);
      append_hydration(strong1, t3);
      append_hydration(div2, t4);
      append_hydration(div2, button1);
      append_hydration(button1, svg1);
      append_hydration(svg1, path1);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[4]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$displayed_count*/
      2 && t1_value !== (t1_value = Math.floor(
        /*$displayed_count*/
        ctx2[1] + 1
      ) + ""))
        set_data(t1, t1_value);
      if (dirty & /*$displayed_count*/
      2 && t3_value !== (t3_value = Math.floor(
        /*$displayed_count*/
        ctx2[1]
      ) + ""))
        set_data(t3, t3_value);
      if (dirty & /*offset*/
      4) {
        set_style(div0, "transform", "translate(0, " + 100 * /*offset*/
        ctx2[2] + "%)");
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      run_all(dispose);
    }
  };
}
function modulo(n, m) {
  return (n % m + m) % m;
}
function instance($$self, $$props, $$invalidate) {
  let offset;
  let $displayed_count;
  let count = 0;
  const displayed_count = spring();
  component_subscribe($$self, displayed_count, (value) => $$invalidate(1, $displayed_count = value));
  const click_handler = () => $$invalidate(0, count -= 1);
  const click_handler_1 = () => $$invalidate(0, count += 1);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      displayed_count.set(count);
    }
    if ($$self.$$.dirty & /*$displayed_count*/
    2) {
      $$invalidate(2, offset = modulo($displayed_count, 1));
    }
  };
  return [
    count,
    $displayed_count,
    offset,
    displayed_count,
    click_handler,
    click_handler_1
  ];
}
class Counter extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
const welcome = "" + new URL("../../assets/svelte-welcome-c18bcf5a.webp", import.meta.url).href;
const welcome_fallback = "" + new URL("../../assets/svelte-welcome-6c300099.png", import.meta.url).href;
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let meta;
  let t0;
  let section;
  let h1;
  let span;
  let picture;
  let source;
  let t1;
  let img;
  let img_src_value;
  let t2;
  let br;
  let t3;
  let t4;
  let h2;
  let t5;
  let strong;
  let t6;
  let t7;
  let counter;
  let current;
  counter = new Counter({});
  return {
    c() {
      meta = element("meta");
      t0 = space();
      section = element("section");
      h1 = element("h1");
      span = element("span");
      picture = element("picture");
      source = element("source");
      t1 = space();
      img = element("img");
      t2 = text("\n\n		to your new");
      br = element("br");
      t3 = text("SvelteKit app");
      t4 = space();
      h2 = element("h2");
      t5 = text("try editing ");
      strong = element("strong");
      t6 = text("src/routes/+page.svelte");
      t7 = space();
      create_component(counter.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-t32ptj", document.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      h1 = claim_element(section_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      picture = claim_element(span_nodes, "PICTURE", {});
      var picture_nodes = children(picture);
      source = claim_element(picture_nodes, "SOURCE", { srcset: true, type: true });
      t1 = claim_space(picture_nodes);
      img = claim_element(picture_nodes, "IMG", { src: true, alt: true, class: true });
      picture_nodes.forEach(detach);
      span_nodes.forEach(detach);
      t2 = claim_text(h1_nodes, "\n\n		to your new");
      br = claim_element(h1_nodes, "BR", {});
      t3 = claim_text(h1_nodes, "SvelteKit app");
      h1_nodes.forEach(detach);
      t4 = claim_space(section_nodes);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t5 = claim_text(h2_nodes, "try editing ");
      strong = claim_element(h2_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t6 = claim_text(strong_nodes, "src/routes/+page.svelte");
      strong_nodes.forEach(detach);
      h2_nodes.forEach(detach);
      t7 = claim_space(section_nodes);
      claim_component(counter.$$.fragment, section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Home";
      attr(meta, "name", "description");
      attr(meta, "content", "Svelte demo app");
      attr(source, "srcset", welcome);
      attr(source, "type", "image/webp");
      if (!src_url_equal(img.src, img_src_value = welcome_fallback))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Welcome");
      attr(img, "class", "svelte-19xx0bt");
      attr(span, "class", "welcome svelte-19xx0bt");
      attr(h1, "class", "svelte-19xx0bt");
      attr(section, "class", "svelte-19xx0bt");
    },
    m(target, anchor) {
      append_hydration(document.head, meta);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, section, anchor);
      append_hydration(section, h1);
      append_hydration(h1, span);
      append_hydration(span, picture);
      append_hydration(picture, source);
      append_hydration(picture, t1);
      append_hydration(picture, img);
      append_hydration(h1, t2);
      append_hydration(h1, br);
      append_hydration(h1, t3);
      append_hydration(section, t4);
      append_hydration(section, h2);
      append_hydration(h2, t5);
      append_hydration(h2, strong);
      append_hydration(strong, t6);
      append_hydration(section, t7);
      mount_component(counter, section, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(counter.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(counter.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      detach(meta);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(section);
      destroy_component(counter);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};

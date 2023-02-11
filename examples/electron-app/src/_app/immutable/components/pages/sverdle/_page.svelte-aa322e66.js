import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, e as empty, Q as head_selector, l as claim_element, h as detach, c as claim_space, m as children, r as claim_text, n as attr, R as toggle_class, G as append_hydration, b as insert_hydration, O as listen, T as action_destroyer, C as noop, U as destroy_each, P as run_all, H as component_subscribe, V as globals, p as set_style, W as is_function, u as set_data, X as prevent_default, Y as null_to_empty } from "../../../chunks/index-d985765e.js";
import { p as parse } from "../../../chunks/parse-a9b5aeea.js";
import { l as client } from "../../../chunks/singletons-0c6ee057.js";
import { r as readable } from "../../../chunks/index-bb582736.js";
const t = (t2, b2 = {}) => {
  w(b2);
  let { colors: k2 = ["#FFC700", "#FF0000", "#2E3191", "#41BBC7"], duration: W = 3500, force: S = 0.5, particleCount: G = 150, particleShape: X = "mix", particleSize: _ = 12, destroyAfterDone: C = true, stageHeight: z = 800, stageWidth: E = 1600 } = b2;
  !function(t3) {
    const e2 = f("style");
    e2.dataset.neoconfetti = "", e2.textContent = '@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}', h(document.head, e2);
  }(), t2.classList.add("fk9XWG_container"), t2.style.setProperty("--stage-height", z + "px");
  let P, A = p(G, k2), H = e(t2, A);
  function M(t3, e2) {
    const f2 = l(c() * (x - 1)), h2 = "rectangles" !== X && ("circles" === X || v(f2)), p2 = (e3, r2) => t3.style.setProperty(e3, r2 + "");
    p2("--x-landing-point", u(s(m(e2, 90) - 180), 0, 180, -E / 2, E / 2) + "px"), p2("--duration-chaos", W - l(1e3 * c()) + "ms");
    const b3 = c() < a ? g(c() * i, 2) : 0;
    p2("--x1", b3), p2("--x2", -1 * b3), p2("--x3", b3), p2("--x4", g(s(u(s(m(e2, 90) - 180), 0, 180, -1, 1)), 4)), p2("--y1", g(c() * n, 4)), p2("--y2", g(c() * S * (y() ? 1 : -1), 4)), p2("--y3", n), p2("--y4", g(d(u(s(e2 - 180), 0, 180, S, -S), 0), 4)), p2("--width", (h2 ? _ : l(4 * c()) + _ / 2) + "px"), p2("--height", (h2 ? _ : l(2 * c()) + _) + "px");
    const k3 = f2.toString(2).padStart(3, "0").split("");
    p2("--half-rotation", k3.map((t4) => +t4 / 2 + "")), p2("--rotation", k3), p2("--rotation-duration", g(c() * (o - r) + r) + "ms"), p2("--border-radius", h2 ? "50%" : 0);
  }
  for (const [t3, e2] of Object.entries(H))
    M(e2, A[+t3].degree);
  return Promise.resolve().then(() => P = setTimeout(() => C && (t2.innerHTML = ""), W)), { update(r2) {
    w(r2);
    const o2 = r2.particleCount ?? G, a2 = r2.colors ?? k2, i2 = r2.stageHeight ?? z;
    if (A = p(o2, a2), o2 === G && JSON.stringify(k2) !== JSON.stringify(a2))
      for (const [t3, { color: e2 }] of Object.entries(A))
        H[+t3].style.setProperty("--bgcolor", e2);
    o2 !== G && (t2.innerHTML = "", H = e(t2, A)), C && !r2.destroyAfterDone && clearTimeout(P), t2.style.setProperty("--stage-height", i2 + "px"), k2 = a2, W = r2.duration ?? W, S = r2.force ?? S, G = o2, X = r2.particleShape ?? X, _ = r2.particleSize ?? _, C = r2.destroyAfterDone ?? C, z = i2, E = r2.stageWidth ?? E;
  }, destroy() {
    clearTimeout(P);
  } };
};
function e(t2, e2 = []) {
  const r2 = [];
  for (const { color: o2 } of e2) {
    const e3 = f("div");
    e3.className = "fk9XWG_particle", e3.style.setProperty("--bgcolor", o2);
    const a2 = f("div");
    h(e3, a2), h(t2, e3), r2.push(e3);
  }
  return r2;
}
const r = 200, o = 800, a = 0.1, i = 0.3, n = 0.5, s = Math.abs, c = Math.random, l = Math.round, d = Math.max, f = (t2) => document.createElement(t2), h = (t2, e2) => t2.appendChild(e2), p = (t2, e2) => Array.from({ length: t2 }, (r2, o2) => ({ color: e2[o2 % e2.length], degree: 360 * o2 / t2 })), g = (t2, e2 = 2) => l((t2 + Number.EPSILON) * 10 ** e2) / 10 ** e2, u = (t2, e2, r2, o2, a2) => (t2 - e2) * (a2 - o2) / (r2 - e2) + o2, m = (t2, e2) => t2 + e2 > 360 ? t2 + e2 - 360 : t2 + e2, y = () => c() > 0.5, x = 6, v = (t2) => 1 !== t2 && y(), b = (t2) => void 0 === t2, k = (t2, e2) => {
  if (!b(t2) && Number.isSafeInteger(t2) && t2 < 0)
    throw new Error(e2 + " must be a positive integer");
}, w = ({ particleCount: t2, duration: e2, colors: r2, particleSize: o2, force: a2, stageHeight: i2, stageWidth: n2, particleShape: s2 }) => {
  if (k(t2, "particleCount"), k(e2, "duration"), k(o2, "particleSize"), k(a2, "force"), k(i2, "stageHeight"), k(n2, "stageWidth"), !b(s2) && !/^(mix|circles|rectangles)$/i.test(s2))
    throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');
  if (!b(r2) && !Array.isArray(r2))
    throw new Error("colors must be an array of strings");
  if (a2 > 1)
    throw new Error("force must be within 0 and 1");
};
client.disable_scroll_handling;
client.goto;
client.invalidate;
const invalidateAll = client.invalidateAll;
client.preload_data;
client.preload_code;
client.before_navigate;
client.after_navigate;
const applyAction = client.apply_action;
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data);
  }
  return parsed;
}
function enhance(form, submit = () => {
}) {
  const fallback_callback = async ({ action, result, reset }) => {
    if (result.type === "success") {
      if (reset !== false) {
        HTMLFormElement.prototype.reset.call(form);
      }
      await invalidateAll();
    }
    if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
      applyAction(result);
    }
  };
  async function handle_submit(event) {
    var _a, _b, _c;
    event.preventDefault();
    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      // We do cloneNode for avoid DOM clobbering - https://github.com/sveltejs/kit/issues/7593
      ((_a = event.submitter) == null ? void 0 : _a.hasAttribute("formaction")) ? (
        /** @type {HTMLButtonElement | HTMLInputElement} */
        event.submitter.formAction
      ) : (
        /** @type {HTMLFormElement} */
        HTMLFormElement.prototype.cloneNode.call(form).action
      )
    );
    const data = new FormData(form);
    const submitter_name = (_b = event.submitter) == null ? void 0 : _b.getAttribute("name");
    if (submitter_name) {
      data.append(submitter_name, ((_c = event.submitter) == null ? void 0 : _c.getAttribute("value")) ?? "");
    }
    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => cancelled = true;
    const callback = await submit({
      action,
      cancel,
      controller,
      data,
      form
    }) ?? fallback_callback;
    if (cancelled)
      return;
    let result;
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-sveltekit-action": "true"
        },
        cache: "no-store",
        body: data,
        signal: controller.signal
      });
      result = deserialize(await response.text());
      if (result.type === "error")
        result.status = response.status;
    } catch (error) {
      if (
        /** @type {any} */
        (error == null ? void 0 : error.name) === "AbortError"
      )
        return;
      result = { type: "error", error };
    }
    callback({
      action,
      data,
      form,
      update: (opts) => fallback_callback({ action, result, reset: opts == null ? void 0 : opts.reset }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }
  HTMLFormElement.prototype.addEventListener.call(form, "submit", handle_submit);
  return {
    destroy() {
      HTMLFormElement.prototype.removeEventListener.call(form, "submit", handle_submit);
    }
  };
}
const reduced_motion_query = "(prefers-reduced-motion: reduce)";
const get_initial_motion_preference = () => {
  return window.matchMedia(reduced_motion_query).matches;
};
const reduced_motion = readable(get_initial_motion_preference(), (set) => {
  {
    const set_reduced_motion = (event) => {
      set(event.matches);
    };
    const media_query_list = window.matchMedia(reduced_motion_query);
    media_query_list.addEventListener("change", set_reduced_motion);
    return () => {
      media_query_list.removeEventListener("change", set_reduced_motion);
    };
  }
});
const _page_svelte_svelte_type_style_lang = "";
const { document: document_1, window: window_1 } = globals;
function get_each_context(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i2];
  return child_ctx;
}
function get_each_context_1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i2];
  return child_ctx;
}
function get_each_context_2(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i2];
  child_ctx[9] = i2;
  const constants_0 = (
    /*row*/
    child_ctx[9] === /*i*/
    child_ctx[3]
  );
  child_ctx[16] = constants_0;
  return child_ctx;
}
function get_each_context_3(ctx, list, i2) {
  var _a, _b;
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i2];
  child_ctx[25] = i2;
  const constants_0 = (
    /*data*/
    (_a = child_ctx[0].answers[
      /*row*/
      child_ctx[9]
    ]) == null ? void 0 : _a[
      /*column*/
      child_ctx[25]
    ]
  );
  child_ctx[18] = constants_0;
  const constants_1 = (
    /*data*/
    ((_b = child_ctx[0].guesses[
      /*row*/
      child_ctx[9]
    ]) == null ? void 0 : _b[
      /*column*/
      child_ctx[25]
    ]) ?? ""
  );
  child_ctx[19] = constants_1;
  const constants_2 = (
    /*current*/
    child_ctx[16] && /*column*/
    child_ctx[25] === /*data*/
    child_ctx[0].guesses[
      /*row*/
      child_ctx[9]
    ].length
  );
  child_ctx[20] = constants_2;
  const constants_3 = (
    /*answer*/
    child_ctx[18] === "x"
  );
  child_ctx[21] = constants_3;
  const constants_4 = (
    /*answer*/
    child_ctx[18] === "c"
  );
  child_ctx[22] = constants_4;
  const constants_5 = (
    /*answer*/
    child_ctx[18] === "_"
  );
  child_ctx[23] = constants_5;
  return child_ctx;
}
function create_else_block_1(ctx) {
  let t2;
  return {
    c() {
      t2 = text("empty");
    },
    l(nodes) {
      t2 = claim_text(nodes, "empty");
    },
    m(target, anchor) {
      insert_hydration(target, t2, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t2);
    }
  };
}
function create_if_block_5(ctx) {
  let t2;
  return {
    c() {
      t2 = text("(absent)");
    },
    l(nodes) {
      t2 = claim_text(nodes, "(absent)");
    },
    m(target, anchor) {
      insert_hydration(target, t2, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t2);
    }
  };
}
function create_if_block_4(ctx) {
  let t2;
  return {
    c() {
      t2 = text("(present)");
    },
    l(nodes) {
      t2 = claim_text(nodes, "(present)");
    },
    m(target, anchor) {
      insert_hydration(target, t2, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t2);
    }
  };
}
function create_if_block_3(ctx) {
  let t2;
  return {
    c() {
      t2 = text("(correct)");
    },
    l(nodes) {
      t2 = claim_text(nodes, "(correct)");
    },
    m(target, anchor) {
      insert_hydration(target, t2, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t2);
    }
  };
}
function create_each_block_3(ctx) {
  let div;
  let t0_value = (
    /*value*/
    ctx[19] + ""
  );
  let t0;
  let t1;
  let span;
  let t2;
  let input;
  let input_disabled_value;
  let input_value_value;
  function select_block_type(ctx2, dirty) {
    if (
      /*exact*/
      ctx2[21]
    )
      return create_if_block_3;
    if (
      /*close*/
      ctx2[22]
    )
      return create_if_block_4;
    if (
      /*missing*/
      ctx2[23]
    )
      return create_if_block_5;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      span = element("span");
      if_block.c();
      t2 = space();
      input = element("input");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, t0_value);
      t1 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      if_block.l(span_nodes);
      span_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      input = claim_element(div_nodes, "INPUT", { name: true, type: true });
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "visually-hidden");
      attr(input, "name", "guess");
      input.disabled = input_disabled_value = !/*current*/
      ctx[16];
      attr(input, "type", "hidden");
      input.value = input_value_value = /*value*/
      ctx[19];
      attr(div, "class", "letter svelte-1pg2j5l");
      toggle_class(
        div,
        "exact",
        /*exact*/
        ctx[21]
      );
      toggle_class(
        div,
        "close",
        /*close*/
        ctx[22]
      );
      toggle_class(
        div,
        "missing",
        /*missing*/
        ctx[23]
      );
      toggle_class(
        div,
        "selected",
        /*selected*/
        ctx[20]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
      append_hydration(div, span);
      if_block.m(span, null);
      append_hydration(div, t2);
      append_hydration(div, input);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*value*/
      ctx2[19] + ""))
        set_data(t0, t0_value);
      if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(span, null);
        }
      }
      if (dirty & /*i*/
      8 && input_disabled_value !== (input_disabled_value = !/*current*/
      ctx2[16])) {
        input.disabled = input_disabled_value;
      }
      if (dirty & /*data*/
      1 && input_value_value !== (input_value_value = /*value*/
      ctx2[19])) {
        input.value = input_value_value;
      }
      if (dirty & /*data*/
      1) {
        toggle_class(
          div,
          "exact",
          /*exact*/
          ctx2[21]
        );
      }
      if (dirty & /*data*/
      1) {
        toggle_class(
          div,
          "close",
          /*close*/
          ctx2[22]
        );
      }
      if (dirty & /*data*/
      1) {
        toggle_class(
          div,
          "missing",
          /*missing*/
          ctx2[23]
        );
      }
      if (dirty & /*i, data*/
      9) {
        toggle_class(
          div,
          "selected",
          /*selected*/
          ctx2[20]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function create_each_block_2(ctx) {
  let h2;
  let t0;
  let t1_value = (
    /*row*/
    ctx[9] + 1 + ""
  );
  let t1;
  let t2;
  let div;
  let t3;
  let each_value_3 = Array(5);
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_3.length; i2 += 1) {
    each_blocks[i2] = create_each_block_3(get_each_context_3(ctx, each_value_3, i2));
  }
  return {
    c() {
      h2 = element("h2");
      t0 = text("Row ");
      t1 = text(t1_value);
      t2 = space();
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t3 = space();
      this.h();
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Row ");
      t1 = claim_text(h2_nodes, t1_value);
      h2_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      t3 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "visually-hidden");
      attr(div, "class", "row svelte-1pg2j5l");
      toggle_class(
        div,
        "current",
        /*current*/
        ctx[16]
      );
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
      append_hydration(h2, t0);
      append_hydration(h2, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
      append_hydration(div, t3);
    },
    p(ctx2, dirty) {
      if (dirty & /*data, i*/
      9) {
        each_value_3 = Array(5);
        let i2;
        for (i2 = 0; i2 < each_value_3.length; i2 += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block_3(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div, t3);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value_3.length;
      }
      if (dirty & /*i*/
      8) {
        toggle_class(
          div,
          "current",
          /*current*/
          ctx2[16]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(h2);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_else_block(ctx) {
  let div;
  let button0;
  let t0;
  let button0_disabled_value;
  let t1;
  let button1;
  let t2;
  let t3;
  let mounted;
  let dispose;
  let each_value = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let each_blocks = [];
  for (let i2 = 0; i2 < 3; i2 += 1) {
    each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
  }
  return {
    c() {
      div = element("div");
      button0 = element("button");
      t0 = text("enter");
      t1 = space();
      button1 = element("button");
      t2 = text("back");
      t3 = space();
      for (let i2 = 0; i2 < 3; i2 += 1) {
        each_blocks[i2].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", { "data-key": true, class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "enter");
      button0_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        "data-key": true,
        formaction: true,
        name: true,
        class: true
      });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "back");
      button1_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      for (let i2 = 0; i2 < 3; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button0, "data-key", "enter");
      button0.disabled = button0_disabled_value = !/*submittable*/
      ctx[6];
      attr(button0, "class", "svelte-1pg2j5l");
      toggle_class(
        button0,
        "selected",
        /*submittable*/
        ctx[6]
      );
      attr(button1, "data-key", "backspace");
      attr(button1, "formaction", "?/update");
      attr(button1, "name", "key");
      button1.value = "backspace";
      attr(button1, "class", "svelte-1pg2j5l");
      attr(div, "class", "keyboard svelte-1pg2j5l");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button0);
      append_hydration(button0, t0);
      append_hydration(div, t1);
      append_hydration(div, button1);
      append_hydration(button1, t2);
      append_hydration(div, t3);
      for (let i2 = 0; i2 < 3; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
      if (!mounted) {
        dispose = listen(button1, "click", prevent_default(
          /*update*/
          ctx[8]
        ));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*submittable*/
      64 && button0_disabled_value !== (button0_disabled_value = !/*submittable*/
      ctx2[6])) {
        button0.disabled = button0_disabled_value;
      }
      if (dirty & /*submittable*/
      64) {
        toggle_class(
          button0,
          "selected",
          /*submittable*/
          ctx2[6]
        );
      }
      if (dirty & /*classnames, data, i, description, update*/
      301) {
        each_value = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
        let i2;
        for (i2 = 0; i2 < 3; i2 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div, null);
          }
        }
        for (; i2 < 3; i2 += 1) {
          each_blocks[i2].d(1);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1(ctx) {
  let t0;
  let button;
  let t1_value = (
    /*won*/
    ctx[4] ? "you won :)" : `game over :(`
  );
  let t1;
  let t2;
  let if_block = !/*won*/
  ctx[4] && /*data*/
  ctx[0].answer && create_if_block_2(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      t0 = space();
      button = element("button");
      t1 = text(t1_value);
      t2 = text(" play again?");
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t0 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {
        "data-key": true,
        class: true,
        formaction: true
      });
      var button_nodes = children(button);
      t1 = claim_text(button_nodes, t1_value);
      t2 = claim_text(button_nodes, " play again?");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "data-key", "enter");
      attr(button, "class", "restart selected svelte-1pg2j5l");
      attr(button, "formaction", "?/restart");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, t1);
      append_hydration(button, t2);
    },
    p(ctx2, dirty) {
      if (!/*won*/
      ctx2[4] && /*data*/
      ctx2[0].answer) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*won*/
      16 && t1_value !== (t1_value = /*won*/
      ctx2[4] ? "you won :)" : `game over :(`))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(button);
    }
  };
}
function create_each_block_1(ctx) {
  let button;
  let t2;
  let button_class_value;
  let button_disabled_value;
  let button_aria_label_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t2 = text(
        /*letter*/
        ctx[12]
      );
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        "data-key": true,
        class: true,
        formaction: true,
        name: true,
        "aria-label": true
      });
      var button_nodes = children(button);
      t2 = claim_text(
        button_nodes,
        /*letter*/
        ctx[12]
      );
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        button,
        "data-key",
        /*letter*/
        ctx[12]
      );
      attr(button, "class", button_class_value = null_to_empty(
        /*classnames*/
        ctx[2][
          /*letter*/
          ctx[12]
        ]
      ) + " svelte-1pg2j5l");
      button.disabled = button_disabled_value = /*data*/
      ctx[0].guesses[
        /*i*/
        ctx[3]
      ].length === 5;
      attr(button, "formaction", "?/update");
      attr(button, "name", "key");
      button.value = /*letter*/
      ctx[12];
      attr(button, "aria-label", button_aria_label_value = /*letter*/
      ctx[12] + " " + /*description*/
      (ctx[5][
        /*letter*/
        ctx[12]
      ] || ""));
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t2);
      if (!mounted) {
        dispose = listen(button, "click", prevent_default(
          /*update*/
          ctx[8]
        ));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*classnames*/
      4 && button_class_value !== (button_class_value = null_to_empty(
        /*classnames*/
        ctx2[2][
          /*letter*/
          ctx2[12]
        ]
      ) + " svelte-1pg2j5l")) {
        attr(button, "class", button_class_value);
      }
      if (dirty & /*data, i*/
      9 && button_disabled_value !== (button_disabled_value = /*data*/
      ctx2[0].guesses[
        /*i*/
        ctx2[3]
      ].length === 5)) {
        button.disabled = button_disabled_value;
      }
      if (dirty & /*description*/
      32 && button_aria_label_value !== (button_aria_label_value = /*letter*/
      ctx2[12] + " " + /*description*/
      (ctx2[5][
        /*letter*/
        ctx2[12]
      ] || ""))) {
        attr(button, "aria-label", button_aria_label_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let div;
  let t2;
  let each_value_1 = (
    /*row*/
    ctx[9]
  );
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
    each_blocks[i2] = create_each_block_1(get_each_context_1(ctx, each_value_1, i2));
  }
  return {
    c() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t2 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "row svelte-1pg2j5l");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
      append_hydration(div, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*classnames, data, i, description, update*/
      301) {
        each_value_1 = /*row*/
        ctx2[9];
        let i2;
        for (i2 = 0; i2 < each_value_1.length; i2 += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block_1(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div, t2);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let p2;
  let t0;
  let t1_value = (
    /*data*/
    ctx[0].answer + ""
  );
  let t1;
  let t2;
  return {
    c() {
      p2 = element("p");
      t0 = text('the answer was "');
      t1 = text(t1_value);
      t2 = text('"');
    },
    l(nodes) {
      p2 = claim_element(nodes, "P", {});
      var p_nodes = children(p2);
      t0 = claim_text(p_nodes, 'the answer was "');
      t1 = claim_text(p_nodes, t1_value);
      t2 = claim_text(p_nodes, '"');
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t0);
      append_hydration(p2, t1);
      append_hydration(p2, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t1_value !== (t1_value = /*data*/
      ctx2[0].answer + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(p2);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let confetti_action;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      set_style(div, "position", "absolute");
      set_style(div, "left", "50%");
      set_style(div, "top", "30%");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = action_destroyer(confetti_action = t.call(null, div, {
          particleCount: (
            /*$reduced_motion*/
            ctx[7] ? 0 : void 0
          ),
          force: 0.7,
          stageWidth: window.innerWidth,
          stageHeight: window.innerHeight,
          colors: ["#ff3e00", "#40b3ff", "#676778"]
        }));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (confetti_action && is_function(confetti_action.update) && dirty & /*$reduced_motion*/
      128)
        confetti_action.update.call(null, {
          particleCount: (
            /*$reduced_motion*/
            ctx2[7] ? 0 : void 0
          ),
          force: 0.7,
          stageWidth: window.innerWidth,
          stageHeight: window.innerHeight,
          colors: ["#ff3e00", "#40b3ff", "#676778"]
        });
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let meta;
  let t0;
  let h1;
  let t1;
  let t2;
  let form_1;
  let a2;
  let t3;
  let t4;
  let div0;
  let t5;
  let div1;
  let t6;
  let if_block1_anchor;
  let mounted;
  let dispose;
  let each_value_2 = Array(6);
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_2.length; i2 += 1) {
    each_blocks[i2] = create_each_block_2(get_each_context_2(ctx, each_value_2, i2));
  }
  function select_block_type_1(ctx2, dirty) {
    if (
      /*won*/
      ctx2[4] || /*data*/
      ctx2[0].answers.length >= 6
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*won*/
    ctx[4] && create_if_block(ctx)
  );
  return {
    c() {
      meta = element("meta");
      t0 = space();
      h1 = element("h1");
      t1 = text("Sverdle");
      t2 = space();
      form_1 = element("form");
      a2 = element("a");
      t3 = text("How to play");
      t4 = space();
      div0 = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t5 = space();
      div1 = element("div");
      if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-18lvto8", document_1.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Sverdle");
      h1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      form_1 = claim_element(nodes, "FORM", { method: true, action: true, class: true });
      var form_1_nodes = children(form_1);
      a2 = claim_element(form_1_nodes, "A", { class: true, href: true });
      var a_nodes = children(a2);
      t3 = claim_text(a_nodes, "How to play");
      a_nodes.forEach(detach);
      t4 = claim_space(form_1_nodes);
      div0 = claim_element(form_1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t5 = claim_space(form_1_nodes);
      div1 = claim_element(form_1_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block0.l(div1_nodes);
      div1_nodes.forEach(detach);
      form_1_nodes.forEach(detach);
      t6 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      var _a;
      document_1.title = "Sverdle";
      attr(meta, "name", "description");
      attr(meta, "content", "A Wordle clone written in SvelteKit");
      attr(h1, "class", "visually-hidden");
      attr(a2, "class", "how-to-play svelte-1pg2j5l");
      attr(a2, "href", "/sverdle/how-to-play");
      attr(div0, "class", "grid svelte-1pg2j5l");
      toggle_class(div0, "playing", !/*won*/
      ctx[4]);
      toggle_class(
        div0,
        "bad-guess",
        /*form*/
        (_a = ctx[1]) == null ? void 0 : _a.badGuess
      );
      attr(div1, "class", "controls svelte-1pg2j5l");
      attr(form_1, "method", "POST");
      attr(form_1, "action", "?/enter");
      attr(form_1, "class", "svelte-1pg2j5l");
    },
    m(target, anchor) {
      append_hydration(document_1.head, meta);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, form_1, anchor);
      append_hydration(form_1, a2);
      append_hydration(a2, t3);
      append_hydration(form_1, t4);
      append_hydration(form_1, div0);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div0, null);
      }
      append_hydration(form_1, t5);
      append_hydration(form_1, div1);
      if_block0.m(div1, null);
      insert_hydration(target, t6, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      if (!mounted) {
        dispose = [
          listen(window_1, "keydown", keydown),
          action_destroyer(enhance.call(null, form_1, enhance_function))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      var _a;
      if (dirty & /*i, Array, data*/
      9) {
        each_value_2 = Array(6);
        let i2;
        for (i2 = 0; i2 < each_value_2.length; i2 += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block_2(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div0, null);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
      if (dirty & /*won*/
      16) {
        toggle_class(div0, "playing", !/*won*/
        ctx2[4]);
      }
      if (dirty & /*form*/
      2) {
        toggle_class(
          div0,
          "bad-guess",
          /*form*/
          (_a = ctx2[1]) == null ? void 0 : _a.badGuess
        );
      }
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div1, null);
        }
      }
      if (
        /*won*/
        ctx2[4]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      detach(meta);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(form_1);
      destroy_each(each_blocks, detaching);
      if_block0.d();
      if (detaching)
        detach(t6);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function keydown(event) {
  var _a;
  if (event.metaKey)
    return;
  (_a = document.querySelector(`[data-key="${event.key}" i]`)) == null ? void 0 : _a.dispatchEvent(new MouseEvent("click", { cancelable: true }));
}
const enhance_function = () => {
  return ({ update }) => {
    update({ reset: false });
  };
};
function instance($$self, $$props, $$invalidate) {
  let won;
  let i2;
  let submittable;
  let $reduced_motion;
  component_subscribe($$self, reduced_motion, ($$value) => $$invalidate(7, $reduced_motion = $$value));
  let { data } = $$props;
  let { form } = $$props;
  let classnames;
  let description;
  function update(event) {
    const guess = data.guesses[i2];
    const key = event.target.getAttribute("data-key");
    if (key === "backspace") {
      $$invalidate(0, data.guesses[i2] = guess.slice(0, -1), data);
      if (form == null ? void 0 : form.badGuess)
        $$invalidate(1, form.badGuess = false, form);
    } else if (guess.length < 5) {
      $$invalidate(0, data.guesses[i2] += key, data);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("form" in $$props2)
      $$invalidate(1, form = $$props2.form);
  };
  $$self.$$.update = () => {
    var _a;
    if ($$self.$$.dirty & /*data*/
    1) {
      $$invalidate(4, won = data.answers.at(-1) === "xxxxx");
    }
    if ($$self.$$.dirty & /*won, data*/
    17) {
      $$invalidate(3, i2 = won ? -1 : data.answers.length);
    }
    if ($$self.$$.dirty & /*data, i*/
    9) {
      $$invalidate(6, submittable = ((_a = data.guesses[i2]) == null ? void 0 : _a.length) === 5);
    }
    if ($$self.$$.dirty & /*data, classnames*/
    5) {
      {
        $$invalidate(2, classnames = {});
        $$invalidate(5, description = {});
        data.answers.forEach((answer, i22) => {
          const guess = data.guesses[i22];
          for (let i3 = 0; i3 < 5; i3 += 1) {
            const letter = guess[i3];
            if (answer[i3] === "x") {
              $$invalidate(2, classnames[letter] = "exact", classnames);
              $$invalidate(5, description[letter] = "correct", description);
            } else if (!classnames[letter]) {
              $$invalidate(2, classnames[letter] = answer[i3] === "c" ? "close" : "missing", classnames);
              $$invalidate(5, description[letter] = answer[i3] === "c" ? "present" : "absent", description);
            }
          }
        });
      }
    }
  };
  return [
    data,
    form,
    classnames,
    i2,
    won,
    description,
    submittable,
    $reduced_motion,
    update
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0, form: 1 });
  }
}
export {
  Page as default
};

import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, Q as head_selector, l as claim_element, h as detach, c as claim_space, m as children, r as claim_text, n as attr, G as append_hydration, b as insert_hydration, C as noop } from "../../../chunks/index-d985765e.js";
function create_fragment(ctx) {
  let meta;
  let t0;
  let div;
  let h1;
  let t1;
  let t2;
  let p0;
  let t3;
  let a0;
  let t4;
  let t5;
  let t6;
  let pre;
  let t7;
  let t8;
  let p1;
  let t9;
  let t10;
  let p2;
  let t11;
  let a1;
  let t12;
  let t13;
  return {
    c() {
      meta = element("meta");
      t0 = space();
      div = element("div");
      h1 = element("h1");
      t1 = text("About this app");
      t2 = space();
      p0 = element("p");
      t3 = text("This is a ");
      a0 = element("a");
      t4 = text("SvelteKit");
      t5 = text(" app. You can make your own by typing the\n		following into your command line and following the prompts:");
      t6 = space();
      pre = element("pre");
      t7 = text("npm create svelte@latest");
      t8 = space();
      p1 = element("p");
      t9 = text("The page you're looking at is purely static HTML, with no client-side interactivity needed.\n		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening\n		the devtools network panel and reloading.");
      t10 = space();
      p2 = element("p");
      t11 = text("The ");
      a1 = element("a");
      t12 = text("Sverdle");
      t13 = text(" page illustrates SvelteKit's data loading and form handling. Try\n		using it with JavaScript disabled!");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1ds1qyu", document.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About this app");
      h1_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "This is a ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "SvelteKit");
      a0_nodes.forEach(detach);
      t5 = claim_text(p0_nodes, " app. You can make your own by typing the\n		following into your command line and following the prompts:");
      p0_nodes.forEach(detach);
      t6 = claim_space(div_nodes);
      pre = claim_element(div_nodes, "PRE", {});
      var pre_nodes = children(pre);
      t7 = claim_text(pre_nodes, "npm create svelte@latest");
      pre_nodes.forEach(detach);
      t8 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t9 = claim_text(p1_nodes, "The page you're looking at is purely static HTML, with no client-side interactivity needed.\n		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening\n		the devtools network panel and reloading.");
      p1_nodes.forEach(detach);
      t10 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t11 = claim_text(p2_nodes, "The ");
      a1 = claim_element(p2_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t12 = claim_text(a1_nodes, "Sverdle");
      a1_nodes.forEach(detach);
      t13 = claim_text(p2_nodes, " page illustrates SvelteKit's data loading and form handling. Try\n		using it with JavaScript disabled!");
      p2_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "About";
      attr(meta, "name", "description");
      attr(meta, "content", "About this app");
      attr(a0, "href", "https://kit.svelte.dev");
      attr(a1, "href", "/sverdle");
      attr(div, "class", "text-column");
    },
    m(target, anchor) {
      append_hydration(document.head, meta);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t1);
      append_hydration(div, t2);
      append_hydration(div, p0);
      append_hydration(p0, t3);
      append_hydration(p0, a0);
      append_hydration(a0, t4);
      append_hydration(p0, t5);
      append_hydration(div, t6);
      append_hydration(div, pre);
      append_hydration(pre, t7);
      append_hydration(div, t8);
      append_hydration(div, p1);
      append_hydration(p1, t9);
      append_hydration(div, t10);
      append_hydration(div, p2);
      append_hydration(p2, t11);
      append_hydration(p2, a1);
      append_hydration(a1, t12);
      append_hydration(p2, t13);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      detach(meta);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
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

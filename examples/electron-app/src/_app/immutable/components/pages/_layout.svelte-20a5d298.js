import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, D as svg_element, q as text, l as claim_element, m as children, h as detach, c as claim_space, E as claim_svg_element, r as claim_text, F as src_url_equal, n as attr, b as insert_hydration, G as append_hydration, C as noop, H as component_subscribe, I as create_slot, x as create_component, y as claim_component, z as mount_component, J as update_slot_base, K as get_all_dirty_from_scope, L as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-d985765e.js";
import { p as page } from "../../chunks/stores-8cac4559.js";
const logo = "" + new URL("../../assets/svelte-logo-87df40b8.svg", import.meta.url).href;
const github = "" + new URL("../../assets/github-1ea8d62e.svg", import.meta.url).href;
const Header_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let header;
  let div0;
  let a0;
  let img0;
  let img0_src_value;
  let t0;
  let nav;
  let svg0;
  let path0;
  let t1;
  let ul;
  let li0;
  let a1;
  let t2;
  let li0_aria_current_value;
  let t3;
  let li1;
  let a2;
  let t4;
  let li1_aria_current_value;
  let t5;
  let li2;
  let a3;
  let t6;
  let li2_aria_current_value;
  let t7;
  let svg1;
  let path1;
  let t8;
  let div1;
  let a4;
  let img1;
  let img1_src_value;
  return {
    c() {
      header = element("header");
      div0 = element("div");
      a0 = element("a");
      img0 = element("img");
      t0 = space();
      nav = element("nav");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t1 = space();
      ul = element("ul");
      li0 = element("li");
      a1 = element("a");
      t2 = text("Home");
      t3 = space();
      li1 = element("li");
      a2 = element("a");
      t4 = text("About");
      t5 = space();
      li2 = element("li");
      a3 = element("a");
      t6 = text("Sverdle");
      t7 = space();
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      t8 = space();
      div1 = element("div");
      a4 = element("a");
      img1 = element("img");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      div0 = claim_element(header_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      img0 = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t0 = claim_space(header_nodes);
      nav = claim_element(header_nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      svg0 = claim_svg_element(nav_nodes, "svg", {
        viewBox: true,
        "aria-hidden": true,
        class: true
      });
      var svg0_nodes = children(svg0);
      path0 = claim_svg_element(svg0_nodes, "path", { d: true, class: true });
      children(path0).forEach(detach);
      svg0_nodes.forEach(detach);
      t1 = claim_space(nav_nodes);
      ul = claim_element(nav_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", { "aria-current": true, class: true });
      var li0_nodes = children(li0);
      a1 = claim_element(li0_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "Home");
      a1_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t3 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", { "aria-current": true, class: true });
      var li1_nodes = children(li1);
      a2 = claim_element(li1_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t4 = claim_text(a2_nodes, "About");
      a2_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      t5 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", { "aria-current": true, class: true });
      var li2_nodes = children(li2);
      a3 = claim_element(li2_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t6 = claim_text(a3_nodes, "Sverdle");
      a3_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      t7 = claim_space(nav_nodes);
      svg1 = claim_svg_element(nav_nodes, "svg", {
        viewBox: true,
        "aria-hidden": true,
        class: true
      });
      var svg1_nodes = children(svg1);
      path1 = claim_svg_element(svg1_nodes, "path", { d: true, class: true });
      children(path1).forEach(detach);
      svg1_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      t8 = claim_space(header_nodes);
      div1 = claim_element(header_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a4 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      img1 = claim_element(a4_nodes, "IMG", { src: true, alt: true, class: true });
      a4_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = logo))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "SvelteKit");
      attr(img0, "class", "svelte-1u9z1tp");
      attr(a0, "href", "https://kit.svelte.dev");
      attr(a0, "class", "svelte-1u9z1tp");
      attr(div0, "class", "corner svelte-1u9z1tp");
      attr(path0, "d", "M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z");
      attr(path0, "class", "svelte-1u9z1tp");
      attr(svg0, "viewBox", "0 0 2 3");
      attr(svg0, "aria-hidden", "true");
      attr(svg0, "class", "svelte-1u9z1tp");
      attr(a1, "href", "/");
      attr(a1, "class", "svelte-1u9z1tp");
      attr(li0, "aria-current", li0_aria_current_value = /*$page*/
      ctx[0].url.pathname === "/" ? "page" : void 0);
      attr(li0, "class", "svelte-1u9z1tp");
      attr(a2, "href", "/about");
      attr(a2, "class", "svelte-1u9z1tp");
      attr(li1, "aria-current", li1_aria_current_value = /*$page*/
      ctx[0].url.pathname === "/about" ? "page" : void 0);
      attr(li1, "class", "svelte-1u9z1tp");
      attr(a3, "href", "/sverdle");
      attr(a3, "class", "svelte-1u9z1tp");
      attr(li2, "aria-current", li2_aria_current_value = /*$page*/
      ctx[0].url.pathname.startsWith("/sverdle") ? "page" : void 0);
      attr(li2, "class", "svelte-1u9z1tp");
      attr(ul, "class", "svelte-1u9z1tp");
      attr(path1, "d", "M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z");
      attr(path1, "class", "svelte-1u9z1tp");
      attr(svg1, "viewBox", "0 0 2 3");
      attr(svg1, "aria-hidden", "true");
      attr(svg1, "class", "svelte-1u9z1tp");
      attr(nav, "class", "svelte-1u9z1tp");
      if (!src_url_equal(img1.src, img1_src_value = github))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "GitHub");
      attr(img1, "class", "svelte-1u9z1tp");
      attr(a4, "href", "https://github.com/sveltejs/kit");
      attr(a4, "class", "svelte-1u9z1tp");
      attr(div1, "class", "corner svelte-1u9z1tp");
      attr(header, "class", "svelte-1u9z1tp");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, div0);
      append_hydration(div0, a0);
      append_hydration(a0, img0);
      append_hydration(header, t0);
      append_hydration(header, nav);
      append_hydration(nav, svg0);
      append_hydration(svg0, path0);
      append_hydration(nav, t1);
      append_hydration(nav, ul);
      append_hydration(ul, li0);
      append_hydration(li0, a1);
      append_hydration(a1, t2);
      append_hydration(ul, t3);
      append_hydration(ul, li1);
      append_hydration(li1, a2);
      append_hydration(a2, t4);
      append_hydration(ul, t5);
      append_hydration(ul, li2);
      append_hydration(li2, a3);
      append_hydration(a3, t6);
      append_hydration(nav, t7);
      append_hydration(nav, svg1);
      append_hydration(svg1, path1);
      append_hydration(header, t8);
      append_hydration(header, div1);
      append_hydration(div1, a4);
      append_hydration(a4, img1);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$page*/
      1 && li0_aria_current_value !== (li0_aria_current_value = /*$page*/
      ctx2[0].url.pathname === "/" ? "page" : void 0)) {
        attr(li0, "aria-current", li0_aria_current_value);
      }
      if (dirty & /*$page*/
      1 && li1_aria_current_value !== (li1_aria_current_value = /*$page*/
      ctx2[0].url.pathname === "/about" ? "page" : void 0)) {
        attr(li1, "aria-current", li1_aria_current_value);
      }
      if (dirty & /*$page*/
      1 && li2_aria_current_value !== (li2_aria_current_value = /*$page*/
      ctx2[0].url.pathname.startsWith("/sverdle") ? "page" : void 0)) {
        attr(li2, "aria-current", li2_aria_current_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(header);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let header;
  let t0;
  let main;
  let t1;
  let footer;
  let p;
  let t2;
  let a;
  let t3;
  let t4;
  let current;
  header = new Header({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      div = element("div");
      create_component(header.$$.fragment);
      t0 = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      t1 = space();
      footer = element("footer");
      p = element("p");
      t2 = text("visit ");
      a = element("a");
      t3 = text("kit.svelte.dev");
      t4 = text(" to learn SvelteKit");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(header.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      main = claim_element(div_nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      footer = claim_element(div_nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      p = claim_element(footer_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "visit ");
      a = claim_element(p_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "kit.svelte.dev");
      a_nodes.forEach(detach);
      t4 = claim_text(p_nodes, " to learn SvelteKit");
      p_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "class", "svelte-8o1gnw");
      attr(a, "href", "https://kit.svelte.dev");
      attr(a, "class", "svelte-8o1gnw");
      attr(footer, "class", "svelte-8o1gnw");
      attr(div, "class", "app svelte-8o1gnw");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(header, div, null);
      append_hydration(div, t0);
      append_hydration(div, main);
      if (default_slot) {
        default_slot.m(main, null);
      }
      append_hydration(div, t1);
      append_hydration(div, footer);
      append_hydration(footer, p);
      append_hydration(p, t2);
      append_hydration(p, a);
      append_hydration(a, t3);
      append_hydration(p, t4);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(header);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};

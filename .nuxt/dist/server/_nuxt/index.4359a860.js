import { _ as _export_sfc, b as __nuxt_component_0$1 } from "../server.mjs";
import { useSSRContext, mergeProps, withCtx, createVNode, withAsyncContext, unref, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useFetch } from "./fetch.0ff1a470.js";
import "destr";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
import "ohash";
const ProductCard_vue_vue_type_style_index_0_scoped_72df2b6c_lang = "";
const _sfc_main$1 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card text-center" }, _attrs))} data-v-72df2b6c><img${ssrRenderAttr("src", __props.product.image)} alt="product thumb" class="button" data-v-72df2b6c><p class="font-bold text-gray-500 m-4 truncate" data-v-72df2b6c>${ssrInterpolate(__props.product.title)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/products/${__props.product.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="btn my-4" data-v-72df2b6c${_scopeId}>View Details </p>`);
          } else {
            return [
              createVNode("p", { class: "btn my-4" }, "View Details ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-72df2b6c"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://fakestoreapi.com/products", "$U48yGv7YOO")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-4 gap-5"><!--[-->`);
      ssrRenderList(unref(products), (p) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ProductCard, { product: p }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${p.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(p.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(p.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.4359a860.js.map

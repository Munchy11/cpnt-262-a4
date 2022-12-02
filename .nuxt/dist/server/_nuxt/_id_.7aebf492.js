import { ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, withAsyncContext, unref } from "vue";
import { u as useRoute } from "../server.mjs";
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
const _sfc_main$1 = {
  __name: "ProductDetails",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="card"><div class="grid grid-cols-2 gap-10"></div><div class="p-7"></div><img${ssrRenderAttr("src", __props.product.image)} alt="product image" class="mx-auto my-7 max-w-sm"></div><div class="p-7"><h2 class="text-4xl my-7">${ssrInterpolate(__props.product.title)}</h2><p class="text-xl my-7">Price - $${ssrInterpolate(__props.product.price)}</p><h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3><p class="mb-7">${ssrInterpolate(__props.product.description)}</p></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { id } = useRoute().params;
    const uri = "https://fakestoreapi.com/products/" + id;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(uri, { key: id }, "$H3OxYP9tuC")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductDetails = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ProductDetails, { product: unref(product) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_.7aebf492.js.map

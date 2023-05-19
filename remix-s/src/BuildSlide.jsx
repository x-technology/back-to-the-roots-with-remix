import { CodePane, Slide } from "spectacle";

export default () => (
  <Slide>
    <Box height="600px" overflow="auto">
      <CodePane language="jsx">
        {`
                // app/routes/posts/admin/new.tsx
                var new_exports = {};
                __export(new_exports, {
                  action: () => action,
                  default: () => NewPost
                });
                var import_react6 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
                var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"),
                  action = async ({ request }) => {
                  let title = (await request.formData()).get("title");
                  return title ? (await createPost({ title }), (0, import_node6.redirect)("/posts/admin")) : (0, import_node6.json)({ error: "Title is required" });
                };
                function NewPost() {
                  let transition = (0, import_react6.useTransition)(), isCreating = Boolean(transition.submission);
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, { method: "post", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
                      "Post Title:",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "title", className: inputClassName }, void 0, !1, {
                        fileName: "app/routes/posts/admin/new.tsx",
            `}
      </CodePane>
    </Box>
  </Slide>
);

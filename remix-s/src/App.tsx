import {
  Deck,
  Slide,
  SlideLayout,
  Heading,
  DefaultTemplate,
  FlexBox,
  Image,
  CodePane,
  Appear,
  Stepper,
  Text,
  Box,
  UnorderedList,
  ListItem,
} from "spectacle";

function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      <SlideLayout.Center>
        <Heading>Innovation in the Frontend</Heading>
        <Text>Back to the roots with Remix</Text>
      </SlideLayout.Center>
      <Slide>
        <Heading>About me</Heading>
        <Text>Pavlik Kiselev</Text>
        <Text>
          Software Engineer at ING by day, owner of a small development agency
          CodeVille.agency by night
        </Text>
      </Slide>
      <Slide>
        <Heading>Remix framework</Heading>
        <FlexBox alignItems="center">
          <iframe
            src="https://remix.run"
            width="800"
            height="400"
            frameBorder="0"
            scrolling="no"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>Rendering approaches</Heading>
        <FlexBox alignItems="center">
          {/*<Image src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/FZ7p6ZImdJbM82E0ZwMF.png?auto=format&w=1000" />*/}
          <Image src="/src/assets/foundation.png" />
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>Remix rendering approach</Heading>
        Small demo
      </Slide>
      <SlideLayout.List
        title="Remix rendering approaches"
        items={[
          "Server-side rendering + client-side hydration",
          "Pure server-side rendering",
        ]}
      />
      <Slide>
        <Heading>Remix blog tutorial</Heading>
        <FlexBox alignItems="center">
          <Image src="/src/assets/code-samples.png" width={800} />
        </FlexBox>
      </Slide>
      <Slide>
        <CodePane
          highlightRanges={[
            [2, 3],
            [5, 7],
            [9, 24],
          ]}
          language="jsx"
        >{`
            // https://github.com/remix-run/examples/blob/main/_official-blog-tutorial/app/routes/posts/index.tsx
            import { json } from "@remix-run/node"
            import { Link, useLoaderData } from "@remix-run/react"
            
            import { getPosts } from "~/models/post.server"

            export const loader = async () => json({ posts: await getPosts() })
            
            export default function Posts() {
              const { posts } = useLoaderData<typeof loader>()
              return (
                <main>
                  <h1>Posts</h1>
                  <Link to="admin" className="text-red-600 underline">Admin</Link>
                  <ul>
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <Link to={post.slug} className="text-blue-600 underline">{post.title}</Link>
                      </li>
                    ))}
                  </ul>
                </main>
              )
            }
        `}</CodePane>
      </Slide>
      <Slide>
        <Heading>Building</Heading>
        <FlexBox alignItems="center">
          <Image src="/src/assets/build.png" width={800} />
        </FlexBox>
      </Slide>
      <Slide>
        <CodePane language="jsx">
          {`
            // app/routes/posts/index.tsx
            var posts_exports = {};
            __export(posts_exports, {
              default: () => Posts,
              loader: () => loader5
            });
            var import_node7 = require("@remix-run/node"),
                import_react7 = require("@remix-run/react");
            var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"),
                loader5 = async () => (0, import_node7.json)({ posts: await getPosts() });
            function Posts() {
              let { posts } = (0, import_react7.useLoaderData)();
              return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Posts" }, void 0, !1, {
                  fileName: "app/routes/posts/index.tsx"
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "admin", ...
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: posts.map((post) => ...
                }, this) }, post.slug, !1, {
                  fileName: "app/routes/posts/index.tsx"
                ...
            }
          `}
        </CodePane>
      </Slide>
      <Slide>
        <Box height="600px" overflow="auto">
          <CodePane
            highlightRanges={[
              [18, 42],
              [5, 16],
            ]}
            language="jsx"
          >
            {`
                    import { Form, useTransition, useActionData } from "@remix-run/react"
                    import type { ActionArgs } from "@remix-run/node"
                    import { json, redirect } from "@remix-run/node"
                    
                    import { createPost } from "~/models/post.server"
                    
                    export const action = async ({ request }: ActionArgs) => {
                      const formData = await request.formData()
                    
                      const title = formData.get("title")
                      if (!title) return json({ error: "Title is required" })
                    
                      await createPost({ title })
                    
                      return redirect("/posts/admin")
                    };
                    
                    export default function NewPost() {
                      const transition = useTransition()
                      const isCreating = Boolean(transition.submission)
                    
                      return (
                        <Form method="post">
                          <label>
                            Post Title:{" "}<input type="text" name="title" />
                          </label>
                          <button type="submit" disabled={isCreating}>
                            {isCreating ? "Creating..." : "Create Post"}
                          </button>
                        </Form>
                      );
                    }
                `}
          </CodePane>
        </Box>
      </Slide>
      <Slide>
        <Heading>Remix routing</Heading>
        <CodePane language="text">
          {`
            app/
                ├── routes/
                │   ├── about.tsx           // route is based on the static path
                │   ├── blog/               // route has an additional "/blog" segment in the URL
                │   │   ├── $postId.tsx     // dynamic params
                │   │   ├── categories.tsx  // static segments
                │   │   └── index.tsx       // index of the "/blog" directory
                │   ├── $.tsx               // splat route (catch-all routes)
                │   ├── blog.authors.tsx    // dot delimiter
                │   ├── blog.tsx            // layout for a regular route
                │   └── index.tsx
                └── root.tsx
                
                + optional segments and pathless routes, that are you not reflected in the URL
              `}
        </CodePane>
      </Slide>
      {/*<Slide>*/}
      {/*  <Heading>NextJS routing</Heading>*/}
      {/*  <CodePane language="text">*/}
      {/*    {`*/}
      {/*      pages/index.js → /*/}
      {/*      pages/blog/index.js → /blog*/}
      {/*      pages/blog/first-post.js → /blog/first-post*/}
      {/*      pages/dashboard/settings/username.js → /dashboard/settings/username*/}
      {/*      pages/blog/[slug].js → /blog/:slug (/blog/hello-world)*/}
      {/*      pages/[username]/settings.js → /:username/settings (/foo/settings)*/}
      {/*      pages/post/[...all].js → /post/* (/post/2020/id/title)*/}
      {/*    `}*/}
      {/*  </CodePane>*/}
      {/*</Slide>*/}
      <Slide>
        <Heading>Waterfall loading (problem)</Heading>
        <Box height="600px" overflow="auto">
          <CodePane language="jsx">
            {`
                import { useParams } from "react-router";
    
                type useQueryType = { <T>(x: string): { data: T | null } };
                const useQuery: useQueryType = (type) => ({ data: null });
                
                type SalesType = { id: number; overdue: string; dueSoon: string };
                type InvoiceType = { id: number; user: string; value: string; details: string };
                
                // URL: /sales/invoices/1
                export const InvoicesPage = () => {
                  return (
                    <div>
                      <Invoices />
                    </div>
                  );
                };
                
                const Invoices = () => {
                  const { data: invoices } = useQuery<InvoiceType[]>("invoices");
                  if (!invoices) return null;
                  const { invoiceId } = useParams();
                  return (
                    <>
                        <ul>
                          {invoices.map((invoice: InvoiceType) => (
                            <li key={invoice.id}>
                              <a href={\`/invoices/\${invoice.id}\`}>{invoice.user} {invoice.value}</a>
                            </li>
                          ))}
                        </ul>
                        {invoiceId && <Invoice id={Number(invoiceId)} />}
                    </>
                  );
                };
                
                type InvoiceProps = { id: number };
                const Invoice = ({ id }: InvoiceProps) => {
                  const { data: invoice } = useQuery<InvoiceType>(\`invoices/\${id}\`);
                  if (!invoice) return null;
                  return (
                    <div>
                      {invoice.user}: {invoice.details}
                    </div>
                  );
                };
              `}
          </CodePane>
        </Box>
      </Slide>
      <Slide>
        <Heading>Waterfall loading (solution)</Heading>
        <FlexBox alignItems="center">
          <Image src="/src/assets/waterfall-solution.png" width={570} />
        </FlexBox>
      </Slide>
      <SlideLayout.List
        title="Other features"
        items={["Authentication", "SEO", "Error boundaries"]}
      />
      <SlideLayout.TwoColumn
        left={
          <>
            <Heading>Promises</Heading>
            <UnorderedList>
              <ListItem>Web standards</ListItem>
              <ListItem>Modern web app UX</ListItem>
              <ListItem>Better websites</ListItem>
            </UnorderedList>
          </>
        }
        right={
          <>
            <Heading>Results</Heading>
            <UnorderedList>
              <ListItem>Navigation input</ListItem>
              <ListItem>Form-based mutations</ListItem>
              <ListItem>Optimistic updates</ListItem>
              <ListItem>Good UX by default</ListItem>
            </UnorderedList>
          </>
        }
      />
      {/*<SlideLayout.TwoColumn*/}
      {/*  left={*/}
      {/*    <>*/}
      {/*      <Heading>Pros</Heading>*/}
      {/*      <UnorderedList>*/}
      {/*        <ListItem>Works w\o JavaScript</ListItem>*/}
      {/*        <ListItem>Documentation</ListItem>*/}
      {/*        <ListItem>Good UX by default</ListItem>*/}
      {/*      </UnorderedList>*/}
      {/*    </>*/}
      {/*  }*/}
      {/*  right={*/}
      {/*    <>*/}
      {/*      <Heading>Cons</Heading>*/}
      {/*      <UnorderedList>*/}
      {/*        <ListItem>No React Server Components</ListItem>*/}
      {/*        <ListItem>No JWT</ListItem>*/}
      {/*      </UnorderedList>*/}
      {/*    </>*/}
      {/*  }*/}
      {/*/>*/}
      <SlideLayout.List
        title="How to start"
        items={[
          "Do the tutorials (blog or jokes app)",
          "Deploy to vercel.com",
          "Write about it",
        ]}
      />
      <SlideLayout.Statement>
        Remix is cool but use it wisely
      </SlideLayout.Statement>
    </Deck>
  );
}

export default App;

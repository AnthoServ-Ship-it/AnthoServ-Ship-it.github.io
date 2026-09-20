import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza el portafolio profesional de AnthoServ", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>AnthoServ \| Java Software Developer<\/title>/i);
  assert.match(html, /Software empresarial/);
  assert.match(html, /con criterio técnico\./);
  assert.match(html, /JSF EL Navigator/);
  assert.match(html, /Experiencia que conecta negocio y código\./);
  assert.match(html, /Construyamos algo que valga la pena mantener\./);
  assert.match(html, /https:\/\/github\.com\/AnthoServ-Ship-it\/jsf-el-navigator/);
  assert.match(html, /https:\/\/informaticosistema\.wordpress\.com/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
});

test("genera una exportación estática preparada para GitHub Pages", async () => {
  const staticHtmlUrl = new URL("../dist/client/index.html", import.meta.url);
  const socialCardUrl = new URL("../dist/client/og.png", import.meta.url);
  const noJekyllUrl = new URL("../dist/client/.nojekyll", import.meta.url);

  await Promise.all([
    access(staticHtmlUrl),
    access(socialCardUrl),
    access(noJekyllUrl),
  ]);

  const html = await readFile(staticHtmlUrl, "utf8");
  assert.match(
    html,
    /property="og:image" content="https:\/\/anthoserv-ship-it\.github\.io\/og\.png"/,
  );
  assert.match(
    html,
    /name="twitter:image" content="https:\/\/anthoserv-ship-it\.github\.io\/og\.png"/,
  );
  assert.match(html, /href="\/_next\/static\/css\//);
  assert.match(html, /src="\/_next\/static\/chunks\//);
});

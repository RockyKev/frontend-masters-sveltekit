async function getWorks(host) {
  const url = new URL("work.json", "http://" + host).href;
  const res = await fetch(url);
  if (res.ok) {
    const { projects } = await res.json();
    const map = /* @__PURE__ */ new Map();
    for (const project of projects) {
      map.set(project.slug, project);
    }
    return map;
  } else {
    throw new Error("Failed to fetch " + url);
  }
}
export { getWorks as g };

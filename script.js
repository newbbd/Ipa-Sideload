const tools = [
  {
    name: "AltStore",
    type: "installer",
    risk: "safe",
    summary:
      "A popular sideloading app store with official downloads and clear setup docs. Good first option for most users.",
    tags: ["iOS", "macOS", "Windows", "Apple ID", "Refresh required"],
    url: "https://altstore.io/"
  },
  {
    name: "SideStore",
    type: "installer",
    risk: "medium",
    summary:
      "A community sideloading option based around on-device refreshing after setup. Best for users who understand the setup steps.",
    tags: ["iOS", "Open source", "No computer after setup", "WireGuard"],
    url: "https://sidestore.io/"
  },
  {
    name: "Apple Developer Program",
    type: "official",
    risk: "safe",
    summary:
      "Apple's official paid route for signing, testing, and distributing apps with developer certificates.",
    tags: ["Official", "Paid", "Developer signing", "Apple"],
    url: "https://developer.apple.com/programs/"
  },
  {
    name: "TestFlight",
    type: "official",
    risk: "safe",
    summary:
      "Apple's official beta testing platform for distributing app builds to testers before release.",
    tags: ["Official", "Beta testing", "Apple", "App Store Connect"],
    url: "https://developer.apple.com/testflight/"
  }
];

const toolGrid = document.querySelector("#toolGrid");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");

function formatType(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

function renderTools() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedType = typeFilter.value;

  const filteredTools = tools.filter((tool) => {
    const matchesType = selectedType === "all" || tool.type === selectedType;
    const searchableText = [tool.name, tool.type, tool.summary, ...tool.tags].join(" ").toLowerCase();
    const matchesQuery = searchableText.includes(query);

    return matchesType && matchesQuery;
  });

  if (!filteredTools.length) {
    toolGrid.innerHTML = '<p class="empty-state">No tools found. Try a different search or filter.</p>';
    return;
  }

  toolGrid.innerHTML = filteredTools
    .map(
      (tool) => `
        <article class="tool-card">
          <div class="tool-topline">
            <div>
              <h3>${tool.name}</h3>
              <span class="badge">${formatType(tool.type)}</span>
            </div>
            <span class="badge ${tool.risk}">${tool.risk === "safe" ? "Lower risk" : "Check setup"}</span>
          </div>
          <p>${tool.summary}</p>
          <div class="tags">
            ${tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <a class="tool-link" href="${tool.url}" target="_blank" rel="noopener noreferrer">Official link</a>
        </article>
      `
    )
    .join("");
}

searchInput.addEventListener("input", renderTools);
typeFilter.addEventListener("change", renderTools);

renderTools();

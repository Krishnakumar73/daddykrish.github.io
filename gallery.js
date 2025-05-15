const folderId = "1IA7OubhQzC3q0am9QtfypwfLlnsTjyfD"; // Krishna's public Drive folder ID
const apiKey = "AIzaSyCE_XUuNFNaWpMSHAiwbSPYG7CH8Szwm8I"; // Your Google API key

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.gap = "10px";
container.style.padding = "20px";
document.body.appendChild(container);

async function loadImages() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink,webContentLink)&pageSize=100`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.files || data.files.length === 0) {
    container.innerHTML = "No images found in the folder.";
    return;
  }

  data.files.forEach(file => {
    if (file.mimeType.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = file.thumbnailLink || file.webContentLink;
      img.alt = file.name;
      img.style.maxWidth = "200px";
      img.style.borderRadius = "12px";
      img.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
      container.appendChild(img);
    }
  });
}

loadImages().catch(err => {
  console.error("Failed to load images:", err);
  container.innerHTML = "Could not load gallery.";
});

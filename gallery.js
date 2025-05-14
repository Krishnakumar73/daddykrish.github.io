const folderId = "1IA7OubhQzC3q0am9QtfypwfLlnsTjyfD"; // Your Google Drive folder ID
const apiKey = "AIzaSyCE_XUuNFNaWpMSHAiwbSPYG7CH8Szwm8I"; // Your API key

const container = document.createElement('div');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.gap = "10px";
document.body.appendChild(container);

fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`)
  .then(res => res.json())
  .then(data => {
    data.files.forEach(file => {
      if (file.mimeType.startsWith("image/")) {
        const img = document.createElement('img');
        img.src = `https://drive.google.com/uc?id=${file.id}`;
        img.style.width = "300px";
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 0 10px #ccc";
        container.appendChild(img);
      }
    });
  })
  .catch(err => {
    console.error("Failed to load images:", err);
    container.innerHTML = "Could not load images. Check API key or folder access.";
  });

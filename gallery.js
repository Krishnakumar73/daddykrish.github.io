// Auto-loads image list from public Google Drive folder (via public JSON feed)
const folderId = "1IA7OubhQzC3q0am9QtfypwfLlnsTjyfD
"; // Replace this in Step 3.2.2
const container = document.createElement('div');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
document.body.appendChild(container);

fetch(`https://drive.google.com/embeddedfolderview?id=${folderId}#grid`)
  .then(() => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
    iframe.width = "100%";
    iframe.height = "600";
    iframe.frameBorder = "0";
    container.appendChild(iframe);
  })
  .catch(err => {
    console.error("Error loading Drive images", err);
    container.innerHTML = "Could not load gallery.";
  });


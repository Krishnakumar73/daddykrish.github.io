const folderId = "1IA7OubhQzC3q0am9QtfypwfLlnsTjyfD";
const gallery = document.getElementById("gallery");

async function loadImages() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=YOUR_API_KEY&fields=files(id,name,mimeType)`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.files) {
      gallery.innerHTML = "<p>Failed to load images.</p>";
      return;
    }

    data.files.forEach(file => {
      if (file.mimeType.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = `https://drive.google.com/uc?export=view&id=${file.id}`;
        img.className = "photo";
        gallery.appendChild(img);
      }
    });
  } catch (err) {
    console.error("Error loading images", err);
    gallery.innerHTML = "<p>Error loading gallery.</p>";
  }
}

loadImages();


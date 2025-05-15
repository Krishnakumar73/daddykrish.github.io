<style>
  body {
    background-color: #111;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    margin-top: 20px;
    color: #00ffff;
  }

  #gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
  }

  .image-box {
    margin: 10px;
    border: 2px solid #333;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .image-box:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #00ffff;
  }

  .image-box img {
    max-width: 250px;
    border-radius: 10px;
    cursor: pointer;
  }
</style>

function upDate(previewPic) 
{
  // 1) Change background image to hovered picture src
  document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;
  
  // 2) Change text to alt text of hovered image
  document.getElementById("image").innerText = previewPic.alt;
}

function unDo() {
  // 1) Reset background image to original (empty string, as per your CSS)
  document.getElementById("image").style.backgroundImage = "";
  
  // 2) Reset text to original prompt
  document.getElementById("image").innerText = "Hover over an image below to display here.";
}
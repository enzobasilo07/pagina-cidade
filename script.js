function changeImage(src, captionText) 
{
    document.getElementById('muralha-img').src = src;
    document.getElementById('muralha-img').alt = captionText;
    document.getElementById('caption').textContent = captionText;
}
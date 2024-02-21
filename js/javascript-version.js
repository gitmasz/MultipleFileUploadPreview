document.addEventListener('DOMContentLoaded', function () {
  const uploadInput = document.getElementById('upload-files')
      , uploadPreview = document.getElementById('upload-preview')

  uploadInput.addEventListener('change', previewUploadImages, false);

  function previewUploadImages(event) {
    uploadPreview.innerHTML = '';
    const uploadTotalFiles = uploadInput.files.length;

    if (!!uploadTotalFiles) {
      uploadPreview.classList.remove('hidden');
      const uploadPreviewTitle = document.createElement('div');
      uploadPreviewTitle.style.fontWeight = 'bold';
      const uploadPreviewTitleText = document.createTextNode('Selected images: ' + uploadTotalFiles + '/6');
      uploadPreviewTitle.appendChild(uploadPreviewTitleText);
      uploadPreview.appendChild(uploadPreviewTitle);
    }

    for (let i = 0; i < uploadTotalFiles; i++) {
      const uploadImg = document.createElement('img');
      uploadImg.src = URL.createObjectURL(event.target.files[i]);
      uploadImg.classList.add('img-preview-thumb');
      uploadPreview.appendChild(uploadImg);
    }
  }
})
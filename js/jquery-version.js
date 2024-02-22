$(document).ready(function () {
  $('#upload-files').on('change', function (event) {
    const uploadTotalFiles = event.target.files.length;
    $('#upload-preview').html('');
    if (!!uploadTotalFiles) {
      $('#upload-preview').removeClass('hidden');
      $('#upload-preview').append(`
        <div class="title">Selected images: ${uploadTotalFiles}/6</div>
      `);
    }
    for (let i = 0; i < uploadTotalFiles; i++) {
      $('#upload-preview').append(`
        <div class="image">
          <img
            src="${URL.createObjectURL(event.target.files[i])}"
            data-name="${event.target.files[i].name}"
            alt="Selected image no. ${(i + 1)}"
          />
          <span class="image-size">${((event.target.files[i].size / 1024) / 1024).toFixed(2)} MB</span>
        </div>
      `);
    }
  });
})
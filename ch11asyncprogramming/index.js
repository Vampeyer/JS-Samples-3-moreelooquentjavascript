document.getElementById('load-file').addEventListener('click', function() {
    const input = document.getElementById('file-input');
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('file-contents').innerHTML = e.target.result;
    };
    reader.readAsText(file);
  });
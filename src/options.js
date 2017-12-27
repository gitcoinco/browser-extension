function save_options() {
  var theme = document.getElementById('theme').value;
  window.chrome.storage.sync.set({
    theme: theme,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  window.chrome.storage.sync.get({
    theme: 'light',
  }, function(items) {
    document.getElementById('theme').value = items.theme;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
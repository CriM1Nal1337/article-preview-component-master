const share = document.getElementById('share');
const iconShare = document.getElementById('icon-share');
const shareActive = document.getElementById('share-active');

share.addEventListener("click", function() {
  hideAndShow();
});

iconShare.addEventListener("click", function() {
  hideAndShow();
});

function hideAndShow() {
  if (shareActive.classList.contains('hide')) {
    shareActive.classList.remove('hide');
    share.classList.add('icon-share-active')
  } else {
    shareActive.classList.add('hide');
    share.classList.remove('icon-share-active')
  }
}

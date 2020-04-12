import Swal from 'sweetalert2';

export function errorAlert(title, text) {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text
  });
}

export function successAlert(title, text) {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text
  });
}

export function confirmDialog(
  title,
  text,
  successTitle,
  successText,
  callback
) {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
  }).then(result => {
    if (result.value) {
      Swal.fire(successTitle, successText, 'success');
      callback();
    }
  });
}

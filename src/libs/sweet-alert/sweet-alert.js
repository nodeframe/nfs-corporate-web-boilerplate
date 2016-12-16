import swal from 'sweetalert';

export const ALERT_PRESET = {
  SUCCESS: {
    html: true,
    title: '<span id="swalSuccessTitle">Success</span>',
    text: 'Job done. Please continue!',
    type: 'success',
    confirmButtonText: 'Continue',
    confirmButtonClass: 'continueLoginBtn'
  },
  WARNING: {
    html: true,
    title: '<span id="swalWarningTitle">Warning</span>',
    text: 'Something might be not right, be careful!',
    type: 'warning',
    confirmButtonText: 'Close'
  },
  ERROR: {
    html: true,
    title: '<span id="swalErrorTitle">Error</span>',
    text: 'Unclassified error encountered!',
    type: 'error',
    confirmButtonText: 'Close'
  },
  INFO: {
    html: true,
    title: '<span id="swalTestTitle">Test</span>',
    text: 'Lorem ipsum dolor sit amet.',
    type: 'info',
    confirmButtonText: 'Close'
  },
  INPUT: {
    title: "An input!",
    text: "Write something interesting:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something"
  },
  function(inputValue){
    if (inputValue === false)
      return false;
    if (inputValue === "") {
      swal.showInputError("Input field is required");
      return false
    }
    swal("Nice!", "You wrote: " + inputValue, "success");
  }
}

export function sweetAlert(preset = ALERT_PRESET.INFO, options = {}, callback) {
  return swal({
      ...preset,
      ...options
    }, callback
  );
}

export function addListeners () {
  const inputCommand = document.getElementById('input-command')
  inputCommand?.focus()
  window.addEventListener('click', () => inputCommand?.focus())
}

export const prefix = 'temp@linux-desktop:~$ '

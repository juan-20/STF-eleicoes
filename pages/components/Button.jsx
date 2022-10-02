import React from 'react'

function refreshPage() {
  window.location.reload(false);
}

export default function Button() {
  return (
    <button onClick={refreshPage} className='refresh-button' type={'button'} alt='Atualizar página'>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z"></path></svg>
    </button>
  )
}

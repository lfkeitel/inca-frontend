export function stage_to_user_string(stage: string): string {
  switch (stage) {
    case 'idle':
      return 'Idle';
    case 'cleanup':
      return 'Clean up';
    case 'grabbing':
      return 'Grabbing';
    case 'loading-configuration':
      return 'Loading Configuration';
    case 'post-script':
      return 'Post Script';
    case 'pre-script':
      return 'Pre Script';
  }

  return 'Unknown';
}

export function device_status_to_string(status: number): string {
  switch (status) {
    case 0:
      return 'Ready';
    case 1:
      return 'Waiting';
    case 2:
      return 'Running';
    case 3:
      return 'Finished';
    case 4:
      return 'Failed';
  }
  return 'Unknown';
}

export function download(filename: string, text: string) {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

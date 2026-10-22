const LUMAX_REPO_URL = 'https://github.com/ErlichLiu/Lumax'

let _lumaxVersion = '0.0.0'

export function setLumaxVersion(version: string): void {
  _lumaxVersion = version
}

export function getLumaxVersion(): string {
  return _lumaxVersion
}

export function getLumaxUserAgent(version?: string): string {
  const v = version ?? _lumaxVersion
  return `Lumax/${v} (+${LUMAX_REPO_URL})`
}

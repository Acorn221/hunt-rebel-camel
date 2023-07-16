export default function DeltaFlyerPage() {
  const validCSPLink = `chrome-extension://${chrome.runtime.id}/sandboxes/British-Airways-flyer.html`;
  const invalidCSPLink = `chrome-extension://${chrome.runtime.id}/sandboxes/british-airways-flyer.html`;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>British Airways Flyer Tab</h2>

      <p>Try loading this page with: <a href={validCSPLink}>{validCSPLink}</a> and check the CSP</p>
      <p>Then try loading this page with <a href={invalidCSPLink}>{invalidCSPLink}</a> and see the CSP is not what was set in the manifest (sandbox allow-scripts; script-src 'self' https://apis.google.com)</p>
    </div>
  )
}

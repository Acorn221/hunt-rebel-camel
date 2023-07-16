const popup = () => {
	return (
		<div>
			<button type="button" onClick={() => chrome.tabs.create({url: `chrome-extension://${chrome.runtime.id}/sandboxes/british-airways-flyer.html`})}>Test Page</button>
		</div>
	)
};

export default popup;

export const addAsset = (asset) => {

    const assetContainer = document.createElement('div');
    assetContainer.setAttribute('class', 'asset');
    assetContainer.innerHTML = `<h2 class='asset-title'>${asset.asset_title}</h2>`;
    if (asset.asset_type === "display_asset") {
        if (asset.asset_content === "reflection") {
            assetContainer.innerHTML += `
            <p class="content">
                ${asset.display_asset_reflection}
            </p>
            `;
        }
        else if (asset.asset_content === "other") {
            let media;
            if(asset.display_asset_url)media = asset.display_asset_url;
            else if(asset.display_asset_image)media = asset.display_asset_image;
            else if(asset.display_asset_video)media = asset.display_asset_video;
            else media = asset.display_asset_docs;
            console.log(media)
            assetContainer.innerHTML += `
            <iframe src='${media}' class='media-content'></iframe>
            `
        }
    }
    else{
        if(asset.asset_content === 'tb'){
            assetContainer.innerHTML +=
            `
            <form method="post" action="#" onsubmit="return false" id="tb-form">
			<div class="thread-title-div">
				<div class="thread-collapse-button"><a class="fa fa-2x fa-angle-down" aria-hidden="true"></a></div>
				<h3 class="thread-title">Thread A</h3>
			</div>
			<div class="sub-thread">
				<div class="sub-thread-div">
					<p>Sub Thread 1</p>
					<textarea rows="5" placeholder="Enter text here"></textarea>
				</div>
				<div class="sub-thread-div">
					<p>Sub Interpretation 1</p>
					<textarea rows="5" placeholder="Enter text here"></textarea>
				</div>
			</div>
			<div class='sub-thread-option'>
				<img src="./static/img/bulb.png" class="icons" />
				<img src="./static/img/comment.png" class="icons" />
				<select class="dropdown">
					<option value="" disabled selected>Select Category</option>
				</select>
				<select class="dropdown">
					<option value="" disabled selected>Select Process</option>
				</select>
			</div>
			<div class='sub-thread-section'>
				<input type="submit" value="+ Sub Thread" />
				<div class="sub-thread-div">
					<p>Summary for Thread A</p>
					<textarea rows="5" placeholder="Enter text here"></textarea>
				</div>
				<div class='sub-thread-credit'>
					<button type="button">Thread Credit <i class="fa fa-edit"></i></button>
					<select class="dropdown">
						<option value="" disabled selected>Select Emotion</option>
					</select>
				</div>
				<input type="submit" value="+ New Thread" />
				<a href="#"><i class="fa fa-2x fa-floppy-o" aria-hidden="true"></i></a>
			</div>
		</form>`
        }
        else if(asset.asset_content === 'reflection'){
            assetContainer.innerHTML += `<textarea rows="8" placeholder="Reflect as per given guidelines" class='reflection-textarea thread-textarea'></textarea>`;
        }
        else if(asset.asset_content === 'eb'){
            assetContainer.innerHTML += `
            <form onsubmit="return false" id="eb-form">
			<div class="thread-title-div">
				<div class="thread-collapse-button"><a class="fa fa-2x fa-angle-down" aria-hidden="true"></a></div>
				<h3 class="thread-title">Introduction</h3>
			</div>
			<textarea rows="5" placeholder="Enter Introduction" class='thread-textarea'></textarea>
			<div class="thread-title-div">
				<div class="thread-collapse-button"><a class="fa fa-2x fa-angle-down" aria-hidden="true"></a></div>
				<h3 class="thread-title">Thread A</h3>
			</div>
			<div class='sub-thread-section'>
				<div class="sub-thread-div">
					<p>Example 1</p>
					<textarea rows="5" placeholder="Enter text here"></textarea>
				</div>
				<input type="submit" value="+ Example" />
				<div class="sub-thread-div">
					<p>Argument for Thread A</p>
					<textarea rows="5" placeholder="Enter text here"></textarea>
				</div>
				<input type="submit" value="+ New Thread" />
			</div>
			<div class="thread-title-div">
				<div class="thread-collapse-button"><a class="fa fa-2x fa-angle-down" aria-hidden="true"></a></div>
				<h3 class="thread-title">Conclusion</h3>
			</div>
			<textarea rows="5" placeholder="Enter conclusion" class='thread-textarea'></textarea>
			<a href="#" class='save-floppy'><i class="fa fa-2x fa-floppy-o" aria-hidden="true"></i></a>
		</form>
            `
        }
    }
    assetContainer.innerHTML += `<p class="collapse">${asset.asset_description}</p>`
	assetContainer.innerHTML += `<div class="collapse-button"><a class="fa fa-2x fa-angle-down" aria-hidden="true"></a></div>`
    return assetContainer;
}

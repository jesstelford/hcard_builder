(function(){
	"use strict";
	document.addEventListener('DOMContentLoaded',function(){
		//to automatically update the preview as the form is filled out
		let hcard_form=document.getElementById('hCardBuilderform');
		hcard_form.addEventListener('keyup',e=>{
			let preview_element_id=e.target.id + "_preview";
			if(preview_element_id){
				document.getElementById(preview_element_id).textContent=e.target.value;
			}
		},false);
		//preventing the submission of the form
		hcard_form.addEventListener('submit',e=>{
			e.preventDefault();
		},false);
	
		//for loading of preview image
		document.getElementById("files").onchange = function () {
		    let reader = new FileReader();
		    reader.onload = function (e) {
		    	console.log(e.target);
		        // get loaded data and render thumbnail.
		        document.getElementById("preview_img").src = e.target.result;
		    };
		    // read the image file as a data URL.
		    reader.readAsDataURL(this.files[0]);
		}
		
	});//end of DOMContentLoaded
	
})();
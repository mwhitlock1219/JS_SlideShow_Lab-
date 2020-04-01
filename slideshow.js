
//1. Create an empty property named playInterval
//2. A play() function that moves to the next photo ever 2000ms until the end.
//////Tip - use playInterval = setInterval(fn,ms).
//3. A pause() function that stops the slideshow
//////Tip - use clearInterval(playInterval)
//4. Automatically pause the slideshow if it gets to the end of the photolist while playing.


var slideshow = {

	photoList: ['Photo1','Photo2','Photo3'],

	currentPhotoIndex: 0,

	nextPhoto: function()
	{

		if (this.currentPhotoIndex < this.photoList.length)
		{
				console.log ("NextPhoto: " + this.photoList[this.currentPhotoIndex]);
				this.currentPhotoIndex++;

		} else {
			 	console.log('End of Slideshow');
			 	//4. Automatically pause the slideshow if it gets to the end of the photolist while playing.
			 	this.pause();
			   }
		},

	prevPhoto: function()
	{
		if (this.currentPhotoIndex > 0)
		{
				this.currentPhotoIndex--; 
				console.log ("PreviousPhoto: " + this.photoList[this.currentPhotoIndex]);
		} else {
			 	console.log('Start of Slideshow');
			   }
	},

	getCurrentPhoto: function()
	{
		console.log(' GetCurrent: ' + this.photoList[this.currentPhotoIndex]);
	},

//1. Create an empty property named playInterval
	playInterval: " ",

//2. A play() function that moves to the next photo ever 2000ms until the end.
//////Tip - use playInterval = setInterval(fn,ms).
    play: function() 
    {
        this.playInterval = setInterval(function(){slideshow.nextPhoto()}, 2000)
     
    },

 
//3. A pause() function that stops the slideshow
//////Tip - use clearInterval(playInterval)
    pause: function() 
    {
        clearInterval(this.playInterval);
   
    }
}




// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();

slideshow.play();
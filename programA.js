var foot = {
	kick: function () {
		this.yelp = "Ouch!";
		setImmediate( () => {
			console.log(this.yelp);
		});  // bind(this) or that = this
	}
};

foot.kick();
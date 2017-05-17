class program {
	void bump(){
		while (frontIsClear){
			move();
		}
	}

	void north(){
		while (notFacingNorth){
			turnleft();
		}
	}

	void south(){
		while (notFacingSouth){
			turnleft();
		}
	}

	void east(){
		while (notFacingEast){
			turnleft();
		}
	}

	void west(){
		while (notFacingWest){
			turnleft();
		}
	}

	void histogram(n){
		if (!iszero(n)){
			west();
			bump();
			south();
			bump();
			east();

			iterate(pred(n)){
				move();
			}

			north();
			while (nextToABeeper){
				move();
			}

			putbeeper();
		}
	}

	void copy(n){
		if (nextToABeeper){
			pickbeeper();
			copy(succ(n));
		} else {
			if (frontIsClear){
				move();
				copy(0);
			}

			histogram(n);
		}
	}

	program (){
		east();
		copy(0);
	}
}

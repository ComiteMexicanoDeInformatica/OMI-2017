class program {
	void turn(){
		turnleft();
		turnleft();
	}

	program (){
		while (iszero(0)){
			while (notNextToABeeper){
				move();
			}

			if (nextToABeeper){
				turn();
				move();
			}

			turnleft();
			move();
			if (nextToABeeper){
				turn();
				move();
				move();
				if (nextToABeeper){
					turn();
					move();
					turnoff();
				}
			}
		}
	}
}

class program {
	void go(k){
		if (nextToABeeper)
			turnoff();

		if (frontIsClear){
			move();
			if (iszero(k)){
				go(succ(k));
			} else { 
				go(pred(k));
			}
		} else {
			if (iszero(k)){
				turnleft();
			} else {
				turnleft();
				turnleft();
				turnleft();
			}

			go(1);
		}
	}

	program (){
		go(1);
	}
}

class program {
    void norte() {
    	while(notFacingNorth) turnleft();
    }
    void sur() {
    	while(notFacingSouth) turnleft();
    }
    void este() {
    	while(notFacingEast) turnleft();
    }
    void oeste() {
    	while(notFacingWest) turnleft();
    }
    void gira(a) {
    	iterate(a) turnleft();
    }
    
    void checa() {
    	if(frontIsClear) {
        	move();
            if(notNextToABeeper) {
            	solve();
            } else {
            	gira(2);
                move();
                gira(2);
            }
        }
    }
    
    void solve() {
    	while(frontIsClear && notNextToABeeper) move();
        if(nextToABeeper) {
        	gira(2);
            move();
            gira(2);
        }
        turnleft();
        checa();
        gira(2);
        checa();
        turnoff();
    }
    
    program () {
        solve();
        turnoff();
    }
}

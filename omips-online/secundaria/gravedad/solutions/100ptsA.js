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
    
    void tira() {
        if(nextToABeeper) {
            pickbeeper();
            if(frontIsClear) move();
            tira();
            putbeeper();
        } else {
            if(frontIsClear) {
                move();
                tira();
                if(nextToABeeper) move();
            } else {
                sur();
                while(frontIsClear) move();
                norte();
            }
        }
    }
    
    void solve() {
        norte();
        while(frontIsClear) move();
        sur();
        tira();
        sur();
        while(frontIsClear) move();
        este();
        if(frontIsClear) {
            move();
            solve();
        }
    }
    
    program () {
        sur();
        while(frontIsClear) move();
        oeste();
        while(frontIsClear) move();
        este();
        solve();
        turnoff();
    }
} 
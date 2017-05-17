iniciar-programa
	define-nueva-instruccion gira-derecha como inicio
    	repetir 3 veces inicio
        	gira-izquierda;
        fin;
    fin;
    
    define-nueva-instruccion busca-beeper como inicio
		mientras no-junto-a-zumbador y frente-libre hacer inicio
			avanza;
    	fin;
    fin;
    
    define-nueva-instruccion vacia-mochila como inicio
    	gira-izquierda;
        gira-izquierda;
        busca-beeper;
        si junto-a-zumbador entonces inicio
        	gira-izquierda;
            gira-izquierda;
            avanza;
        fin;
        mientras algun-zumbador-en-la-mochila hacer inicio
        	deja-zumbador;
        fin;
        mientras no orientado-al-norte hacer gira-izquierda;
        mientras junto-a-zumbador hacer avanza;
        
    fin;
    
    define-nueva-instruccion recoge-grupo como inicio
    	mientras junto-a-zumbador hacer inicio
        	coge-zumbador;
            si frente-libre entonces inicio
            	avanza;
            fin;
    	fin;
        si algun-zumbador-en-la-mochila entonces inicio
        	vacia-mochila;
        fin;
    fin;
    
    define-nueva-instruccion linea como inicio
    	mientras frente-libre hacer inicio
        	busca-beeper;
        	recoge-grupo;
        fin;
        gira-derecha;
        si frente-libre entonces inicio
        	avanza;
            gira-derecha;
            mientras frente-libre hacer avanza;
            gira-izquierda;
            gira-izquierda;
        fin;
    fin;
    
    

    inicia-ejecucion
    	mientras frente-libre hacer inicio
        	linea;
        fin;
        apagate;
    termina-ejecucion
finalizar-programa
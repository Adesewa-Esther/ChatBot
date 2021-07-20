function beanRacket(n) {
	//if n is even, Simba's best move will be to match Ali's moves - Simba will always win this way
	if(n % 4 === 0) {
return 0;
}
	//if n is odd, Simba has no moves after Ali
	else{
return 1;
	}
}

console.log(`n=4: ${ beanRacket(1) }
n=3: ${ beanRacket(2) }
n=2: ${ beanRacket(3) }
n=1: ${ beanRacket(4) }
`);



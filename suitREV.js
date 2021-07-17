function suit(player, comp) {
    // kalo sama, draw
    if (player === comp) return "draw"

    // kalo beda, ...
    else if (player === "gunting") {
        
        //  normal if-else
        if (comp === "kertas") return "player 1"
        else if (comp !== "kertas") return "computer"

        // ternary operator
        // return (comp === "kertas") ? "player 1" : "computer"
    }
    else if (player === "batu") {
        return comp === "kertas" ? "computer" : "player 1"
    }
    else if (player === "kertas") {
        return comp === "batu" ? "player 1" : "computer"
    }
}
console.log(suit("gunting", "batu"))
console.log(suit("gunting", "kertas"))
console.log(suit("gunting", "gunting"))

console.log(suit("batu", "batu"))
console.log(suit("batu", "kertas"))
console.log(suit("batu", "gunting"))

console.log(suit("kertas", "batu"))
console.log(suit("kertas", "kertas"))
console.log(suit("kertas", "gunting"))

// argument khusus PLAYER 1: gunting , batu, kertas
// PLAYER 2 random
function game(player1) {
	let pool = ["gunting", "batu", "kertas"];
	let rand =  Math.floor(Math.random() * pool.length);
	console.log("player1: ", player1, " vs com: ", pool[rand]);
	if (player1 == "gunting") {
		if (pool[rand] == player1) {
			return "draw";
		} else if (pool[rand] == "kertas") {
			return "player 1 win"
		} else if (pool[rand] == "batu") {
			return "com win"
		}
	} else if (player1 == "batu") {
		if (pool[rand] == player1) {
			return "draw";
		} else if (pool[rand] == "kertas") {
			return "com win"
		} else if (pool[rand] == "gunting") {
			return "player 1 win"
		}
	} else if (player1 == "kertas") {
		if (pool[rand] == player1) {
			return "draw";
		} else if (pool[rand] == "gunting") {
			return "com win"
		} else if (pool[rand] == "batu") {
			return "player 1 win"
		}
	}
}

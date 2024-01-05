S = 0;
M = 0;
H = 0;

function reloj() {
  console.log(H + ":" + M + ":" + S + ":");
  S = S + 1;
  if (S > 59) {
    S = 0;
    M += 1;
  }
  if (M > 59) {
    M = 0;
    H += 1;
  }
  if (H > 23) {
    H = 0;
    M = 0;
    S = 0;
  }
  setTimeout(() => {
    reloj();
  }, 1000); 
}

reloj();
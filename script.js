let player = "X";
// let player2 = 'Y'

let array = Array(9).fill(null);

// console.log(array)

function checkWinner() {
  if (
    (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
    (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
    (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
    (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
    (array[2] !== null && array[2] == array[4] && array[4] == array[6])
  ) {
    document.write(
      `Winner is ${player} <button onClick="location.reload()">Restart</button>`
    );
    pageReload();
  }

  if (!array.some((e) => e === null)) {
    document.write(`Draw!! <button onClick="location.reload()">Restart</button>`);
    return;
  }
}

function blockClick(el) {
  const id = Number(el.id);
  if (array[id] !== null) return;
  array[id] = player;
  console.log(array);
  el.innerText = player;
  checkWinner();
  player = player === "X" ? "0" : "X";

}

// 11. Default Parameter Values
function volume(l, w, h) {
    if (w === undefined)
        w = 3;
    if (h === undefined)
        h = 4;
    return l * w * h;
}
volume(2) //=>24
volume(2, 3, 4) //=>24



const volume = (l, w = 3, h = 4) => (l * w * h);

volume(2) //=>24
volume(2, 3) //=>24
volume(2, 3, 4) //=>24

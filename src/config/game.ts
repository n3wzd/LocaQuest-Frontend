const achievements: Achievement[] = [];

const init = (achvList: Achievement[]) => {
    achvList.sort((a, b) => Number(a.achvId) - Number(b.achvId));
    for(const achv of achvList) {
        achievements.push(achv);
    }
}

export default {
    ACHIEVEMENT: achievements,
    init: init,
}

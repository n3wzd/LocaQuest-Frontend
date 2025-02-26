import { Asset } from "expo-asset";

const getUri = (resource: any) => Asset.fromModule(resource).uri;

const achievements = [
    require('@/assets/achievements/0.png'),
    require('@/assets/achievements/1.png'),
    require('@/assets/achievements/2.png'),
    require('@/assets/achievements/3.png'),
    require('@/assets/achievements/4.png'),
    require('@/assets/achievements/5.png'),
    require('@/assets/achievements/6.png'),
    require('@/assets/achievements/7.png'),
    require('@/assets/achievements/8.png'),
    require('@/assets/achievements/9.png'),
    require('@/assets/achievements/10.png'),
    require('@/assets/achievements/11.png'),
    require('@/assets/achievements/12.png'),
    require('@/assets/achievements/13.png'),
    require('@/assets/achievements/14.png'),
    require('@/assets/achievements/15.png'),
    require('@/assets/achievements/16.png'),
    require('@/assets/achievements/17.png'),
    require('@/assets/achievements/18.png'),
    require('@/assets/achievements/19.png'),
    require('@/assets/achievements/20.png'),
    require('@/assets/achievements/21.png'),
    require('@/assets/achievements/22.png'),
    require('@/assets/achievements/23.png'),
    require('@/assets/achievements/24.png'),
    require('@/assets/achievements/25.png'),
    require('@/assets/achievements/26.png'),
].map(item => getUri(item));

const effect = {
    level: getUri(require('@/assets/level.png')),
    glow: getUri(require('@/assets/glow.png')),
}

const profile = {
    default: getUri(require('@/assets/profile/default.png')),
}

export default {
    achievements: achievements,
    effect: effect,
    profile: profile,
};

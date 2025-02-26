const protocol = 'http';

const API_BASE = {
    CORE: `${protocol}://` + (process.env.EXPO_PUBLIC_SERVER_CORE_URL ?? "") + ":" + (process.env.EXPO_PUBLIC_SERVER_CORE_PORT ?? ""),
    ACTIVITY: `${protocol}://` + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_URL ?? "") + ":" + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_HTTP_PORT ?? "")
};

const ASSET = {
    profile: '@/assets/profile/',
}

export default {
    API_BASE: API_BASE,
    ASSET: ASSET,
}

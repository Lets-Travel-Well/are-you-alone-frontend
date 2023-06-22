import { followInstance } from "./lib/index";


    function follow(comment, success, fail) {
    const api = followInstance();
    api.post(`/follow`, JSON.stringify(comment)).then(success).catch(fail);
    }


    function removeFollow(success, fail) {
    const api = followInstance();

    api.post(`/follow`).then(success).catch(fail);
    }

    function followCheck(followeeId, success, fail) {
        const api = followInstance();
        api.get(`/followcheck?followeeId=${followeeId}`, JSON.stringify(followeeId)).then(success).catch(fail);
    }

    function getFollowerCount(userId, success, fail){
        const api = followInstance();
        api.get(`/followeecount?userId=${userId}`).then(success).catch(fail);
    }
    function getFolloweeCount(userId, success, fail){
        const api = followInstance();
        api.get(`/followercount?userId=${userId}`).then(success).catch(fail);
    }


export {follow,removeFollow,followCheck,getFollowerCount, getFolloweeCount};
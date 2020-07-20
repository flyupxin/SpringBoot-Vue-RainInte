const store = new Vuex.Store({
    state: {
        sysInfo: {
            gameType: null
        },
        // 常量
        weapon: null,

        // 变量
        currentPlayer:null,
    },
    mutations: {

        setWeapon (state,_weapon) {
            state.weapon = _weapon
        },

        setCurrentPlayer (state,_currentPlayer) {
            state.currentPlayer = _currentPlayer
        },

        setSysInfo (state,_sysInfo) {
            state.sysInfo = _sysInfo
        },

    },
    actions: {
        setCurrentPlayer(context,_currentPlayer) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('setCurrentPlayer',_currentPlayer)
                    resolve()
                }, 1000)
            })

        }
    },
    getters: {
        /**
         * 判读是否为空
         */
        isImpty: (state, getters) => (value) => {
            if(value === undefined || value === null || value === '') {
                return true
            }else {
                return false
            }
        },
        /**
         * 从数组里随机获取元素
         */
        randomFromArr: (state, getters) => (value) => {
            return value[Math.round(Math.random()*(value.length-1))]
        },

    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Bytes: 0,
        totalB: 0,
        BperSec: 0,
        BperPrs: 1,
        n: 50,
        player: {
            name: "",
            level: 0,
            next: 50,
            increase: 2
        },
        powerUp: [],
        update: [{
                name: 'Observator',
                cost: 25,
                increase: 1,
                BperSec: 0.1,
                quantity: 1,
                unlocklvl: 0
            },
            {
                name: 'Stagiaire',
                cost: 50,
                increase: 1.3,
                BperSec: 0.5,
                quantity: 0,
                unlocklvl: 1
            },
            {
                name: 'Intern',
                cost: 100,
                increase: 1.5,
                BperSec: 1,
                quantity: 0,
                unlocklvl: 3
            },
            {
                name: 'Tester',
                cost: 200,
                increase: 1.7,
                BperSec: 1.5,
                quantity: 0,
                unlocklvl: 6
            },
            {
                name: 'Project Manager',
                cost: 700,
                increase: 1.9,
                BperSec: 2,
                quantity: 0,
                unlocklvl: 10
            },
            {
                name: 'Marketing Manager',
                cost: 700,
                increase: 1.9,
                BperSec: 2,
                quantity: 0,
                unlocklvl: 10
            },
            {
                name: 'Front-end Dev',
                cost: 1000,
                increase: 2.3,
                BperSec: 10,
                quantity: 0,
                unlocklvl: 16
            },
            {
                name: 'Back-end Dev',
                cost: 1000,
                increase: 2.3,
                BperSec: 10,
                quantity: 0,
                unlocklvl: 16
            },
            {
                name: 'Database Manager',
                cost: 1000,
                increase: 2.3,
                BperSec: 10,
                quantity: 0,
                unlocklvl: 16
            },
            {
                name: 'IOT Dev',
                cost: 1500,
                increase: 70,
                BperSec: 15,
                quantity: 0,
                unlocklvl: 23
            },
            {
                name: 'Full-stack Dev',
                cost: 3000,
                increase: 80,
                BperSec: 10,
                quantity: 0,
                unlocklvl: 20
            },
            {
                name: 'Ethical Hacker',
                cost: 1800,
                increase: 70,
                BperSec: 20,
                quantity: 0,
                unlocklvl: 23
            },
            {
                name: 'MERN-stack Dev',
                cost: 2000,
                increase: 1000,
                BperSec: 30,
                quantity: 0,
                unlocklvl: 25
            },
        ]
    },
    mutations: {
        incrementB(state, increment) {
            state.Bytes += increment
            state.totalB += increment
        },
        levelUp(state) {
            state.n *= 1.2
            state.player.next += state.n
            state.player.level++;
        },
        buyUpgrade(state, { index, amount }) {
            let WorkPost = state.update[index]
            if (state.Bytes >= WorkPost.cost) {
                state.Bytes -= WorkPost.cost
                WorkPost.quantity += amount
                if (WorkPost.increase > 70) {
                    WorkPost.cost += WorkPost.increase
                } else {
                    WorkPost.cost = Math.round(WorkPost.cost * WorkPost.increase)
                }
            } else {
                alert('You need more Money')
            }
        },
        BperSecs(state) {
            state.BperSec = 0
            state.update.forEach(update => {
                state.BperSec += (update.BperSec * update.quantity)
                state.Bytes += (update.BperSec * update.quantity) / 60
                state.totalB += (update.BperSec * update.quantity) / 60
            })
        },
        AvailaibleBuy(state) {
            state.update.filter(upgrade => {
                if (state.Bytes >= upgrade.cost) {
                    upgrade.buyable = false
                } else {
                    upgrade.buyable = true
                }
            })
        }
    },
    getters: {
        nextLvl: state => {
            return Math.round(state.player.next - state.totalB)
        },
        AvailaibleUpdate: state => {
            return state.update.filter(upgrade => {
                if (upgrade.unlocklvl <= state.player.level) {
                    upgrade.disabled = false
                    return upgrade
                } else {
                    upgrade.disabled = true
                    return upgrade
                }
            })
        },
    }
})
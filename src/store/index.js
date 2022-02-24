import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        playUrl: '',
        playPic: '',
        playName: '',
        playSinger: ''
    },
    getters: {
        getplayUrl: state => {
            return state.playUrl
        },
        getplayPic: state => {
            return state.playPic
        },
        getplayName: state => {
            return state.playName
        },
        getplaySinger: state => {
            return state.playSinger
        }
    },
    actions: {

    },
    mutations: {
        setplayUrl(state, url) {
            state.playUrl = url
        },
        setplayPic(state, Pic) {
            state.playPic = Pic
        },
        setplayName(state, Name) {
            state.playName = Name
        },
        setplaySinger(state, Singer) {
            state.playSinger = Singer
        }
    }
})
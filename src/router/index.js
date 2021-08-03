import VueRouter from "vue-router"

import Home from '../pages/Home'
import Main from '../pages/Main'
import Playlist from '../pages/Playlist'
import Playmv from '../pages/Playmv'
import Search from '../pages/Search'

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "",
                    component: Main,
                    name: "Home"
                },
                {
                    path: "Playlist",
                    component: Playlist,
                    name: Playlist
                },
                {
                    path: "Playmv",
                    component: Playmv,
                    name: Playmv
                }, {
                    path: "Search",
                    component: Search,
                    name: Search
                }
            ]
        }
    ],
    mode: 'history'
})

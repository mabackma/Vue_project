import { createRouter, createWebHistory } from 'vue-router'
import PublicationViewAll from './components/publication/PublicationViewAll.vue'
import UsersView from './components/user/UsersView.vue'
import PublicationCreate from './components/publication/PublicationCreate.vue'
import PublicationViewDetails from './components/publication/PublicationViewDetails.vue'
import RegistrationView from './components/registration/RegistrationView.vue'
import AccountView from './components/account/AccountView.vue'
import ModifyImageView from './components/account/ModifyImageView.vue'
import { isAuth } from './store'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Julkaisut",
            component: PublicationViewAll
        },
        {
            path: "/users",
            name: "Käyttäjät",
            component: UsersView
        },
        {
            path: "/create",
            name: "Uusi postaus",
            component: PublicationCreate
        },
        {
            path: "/publication/:publicationId",
            name: "Yksittäinen postaus",
            component: PublicationViewDetails,
            props: true  
        },
        {
            path: "/register",
            name: "Rekisteröityminen",
            component: RegistrationView
        },
        {
            path: "/account",
            name: "Omat tiedot",
            component: AccountView
        },
        {
            path: "/modifyImage",
            name: "Kuvan muokkaus",
            component: ModifyImageView
        }
    ],
    scrollBehavior(){
        document.getElementById('app').scrollIntoView()
    }
})

router.beforeEach((to, from, next)=>{
    window.scrollTo(0, 0)
    if(to.path === '/users' && !isAuth.value){
        next('/')
    } else {
        next()
    }
})

import { createRouter, createWebHistory } from 'vue-router'


import Dashboard from './components/Contents/DashBoard.vue'
import Pos from './components/Contents/Pos.vue'
import Employee from './components/Contents/others/Employee'
import Suppliers from './components/Contents/others/Suppliers'
import Category from './components/Contents/others/Category'
import Products from './components/Contents/others/Products'
import Expense from './components/Contents/others/Expense'
import Costumers from './components/Contents/others/Costumers'
import Salary from './components/Contents/others/Salary'
import Orders from './components/Contents/others/Orders'
import NotFound from './components/Contents/NotFound.vue'



const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path:'/', redirect:'/dashboard'},
        {path:'/dashboard', component: Dashboard},
        {path:'/pos', component: Pos},
        {path:'/employee', component: Employee},
        {path:'/suppliers', component: Suppliers},
        {path:'/category', component: Category},
        {path:'/products', component: Products},
        {path:'/expense', component: Expense},
        {path:'/costumers', component: Costumers},
        {path:'/salary', component: Salary},
        {path:'/orders', component: Orders},
        {path:'/:pathMatch(.*)*', component: NotFound},
    ]
})
export default router;
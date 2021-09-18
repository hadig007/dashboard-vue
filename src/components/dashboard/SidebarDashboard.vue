<template>
    <div>
        <!-- account sidebar  -->
        <account></account>
        <ul>
            <dash-board></dash-board>
            <pos-dashboard></pos-dashboard>
        </ul>
        <h4>Others</h4>
        <ul>
            <employee></employee>
            <suppliers></suppliers>
            <category></category>
            <products></products>
            <expense></expense>
            <costumers></costumers>
            <salary></salary>
            <order></order>
            
        </ul>
    </div>
</template>
<script>
import Account from './sidebar/Account.vue'
import DashBoard from './sidebar/DashBoard.vue'
import Category from './sidebar/others/Category.vue'
import Costumers from './sidebar/others/Costumers.vue'
import Employee from './sidebar/others/Employee.vue'
import Expense from './sidebar/others/Expense.vue'
import Order from './sidebar/others/Order.vue'
import Products from './sidebar/others/Products.vue'
import Salary from './sidebar/others/Salary.vue'
import Suppliers from './sidebar/others/Suppliers.vue'
import PosDashboard from './sidebar/PosDashboard.vue'

export default {
    components:{
        Account,
        DashBoard,
        Category,
        Costumers,
        Employee,
        Expense,
        Order,
        Products,
        Salary,
        Suppliers,
        PosDashboard
    }
}
</script>

<style scoped>
ul{
    background-color: rgb(228, 228, 228);
    margin: 0;
    padding: 5px 25px ;
}
h4{
    background-color: rgb(209, 209, 209);
    text-align: center;
    color: grey;
    margin: 0;
    padding: 5px;
    font-size: 1.2rem;
    /* border-bottom: grey solid 3px; */
}
</style>
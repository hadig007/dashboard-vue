<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <!-- header -->
                <header-dashboard></header-dashboard>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <!-- sidebar -->
                    <div class="sidebar">
                        <sidebar-dashboard></sidebar-dashboard>
                    </div>
                </div>
                <div class="col-md-9">
                    <!-- router-view -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import HeaderDashboard from './HeaderDashboard.vue'
import SidebarDashboard from './SidebarDashboard.vue'
export default {
    components: { HeaderDashboard, SidebarDashboard},
    
}
</script>

<style scoped>
    .row>*{
        padding: 0;
    }
    .sidebar{
        background-color: rgb(196, 196, 196);
        min-width: 100%;
        height: 100vw;
        padding: 0;
    }
</style>
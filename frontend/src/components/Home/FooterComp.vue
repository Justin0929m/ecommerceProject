<template>
    <div>
        <footer>
            <div class="container">
                <h1 class="display-6 text-center py-5">THRIFT STORE</h1>
                <nav class="navbar navbar-expand-lg">
                    <ul class="navbar-nav d-flex justify-content-center w-100">
                        <router-link to="/" class="nav-link">Home</router-link>
                        <router-link to="/" class="nav-link">Contact Us</router-link>
                        <router-link to="/" class="nav-link">Clothing</router-link>
                        <router-link to="/" class="nav-link">Home Appliances</router-link>
                    </ul>
                </nav>
                <p class="text-center py-5">© Justin 2023</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
footer{
    background-color: #c6c6c6;
    height: 100%;
    width: 100%;
    margin-top: 5rem;
    border: 1px solid #c6c6c6;
}
</style>
<template>
    <div>
        <nav class="navbar navbar-expand-lg px-md-5 bg-body-tertiary position-fixed w-100" style="z-index: 2">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Thrift Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">HOME</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link">CONTACT US</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/products" class="nav-link">CLOTHING</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/appliances" class="nav-link">HOME APPLIANCES</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="home-banner">
            <img src="https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                class="home-img w-100" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-img {
    aspect-ratio: 21 / 9;
    object-fit: cover;
    max-width: 100%;
    margin-bottom: 2rem;
}
</style>
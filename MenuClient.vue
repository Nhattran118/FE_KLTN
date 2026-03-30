<template>
    <div class="container-fluid">
        <div class="card mt-1">
            <div class="card-body">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded">
                    <div class="container-fluid">
                        <router-link to="/" class="navbar-brand">
                            DZFullStack
                        </router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2"
                            aria-expanded="false" aria-label="Toggle navigation"> <span
                                class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#"><i
                                            class="bx bx-home-alt me-1"></i>Home</a>
                                </li>
                                <li class="nav-item"> <a class="nav-link" href="#"><i
                                            class="bx bx-user me-1"></i>About</a>
                                </li>
                                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Another action</a>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <button class="btn btn-dark me-3 radius-30 px-4" type="button"><i
                                        class="bx bx-lock"></i> Login</button>
                                <button class="btn btn-light radius-30 px-4" type="button"><i class="bx bx-user"></i>
                                    Register</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>
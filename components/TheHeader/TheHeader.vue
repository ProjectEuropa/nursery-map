<template>
    <header>
        <div class="pure-menu pure-menu-horizontal header-menu">
            <a href="/" class="pure-menu-heading"><i class="fas fa-search-plus"></i>保育園簡易MAP β版</a>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link pure-menu-disabled"><i class="fab fa-neos"></i>お知らせ</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link pure-menu-disabled"><i class="fas fa-map-pin"></i>都道府県選択</a>
                </li>
                <li class="pure-menu-item">
                    <a href="/help" class="pure-menu-link"><i class="far fa-question-circle"></i>ヘルプ</a>
                </li>
            </ul>
        </div>
    </header>
</template>


<style scoped>
    header {
        background-color: #2a2a2a;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search-content {
        margin-top: 10px;
    }

    main {
        margin-top: 30px;
    }

    footer{
        background-color: #2a2a2a;
    }

    footer {
        height: 50px;
        margin-top: 15px;
        padding-top: 15px;
        color: #bfbfbf;
        
    }

    .pure-menu-link,
    .pure-menu-heading {
        color: #ffffff;
    }

    .pure-menu-link:hover {
        color: #2a2a2a;
    }
</style>

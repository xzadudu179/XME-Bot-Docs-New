<template>
    <div class="bg">
        <div class="content">
            <img src="https://image.179.life/images/desert1.webp" alt="">
            <h1>404 NOT FOUND</h1>
            <p>汪？这是什么地方 xwx</p>
            <p>现在还不是探险的时候呢...我们回去吧 ovo</p>
            <a href="/">返回主页</a>
        </div>
    </div>

</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
}

h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 50px;
}

a {
    padding: 10px 35px;
    margin: 15px;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 9999px;
    display: block;
    color: var(--vp-c-brand-1);
}

a:hover {
    color: var(--vp-c-brand-2);
    border-color: var(--vp-c-brand-2);
}

img {
    max-width: 800px;
    width: 80%;
    border-radius: 30px;
    margin-bottom: 50px;
}
</style>
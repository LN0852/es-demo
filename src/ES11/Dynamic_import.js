const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    import('./matchAll.js').then(res => {
        console.log(res)
    })
})
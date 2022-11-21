document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.names-block__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tabs-content__block').forEach(function (tabsContent) {
                tabsContent.classList.remove('active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('active')
        })
    })
    document.querySelectorAll('.names-block__btn').forEach(function(tabsColor) {
        tabsColor.addEventListener('click', function(ev) {
            const path1 = ev.currentTarget.dataset.path1
            document.querySelectorAll('.names-block__btn').forEach(function (tabsColorChange) {
                tabsColorChange.classList.remove('tabs-color')
            })
            document.querySelector(`[data-path1="${path1}"]`).classList.add('tabs-color')
        })
    })
})
(function(){
    const closebanners = document.querySelectorAll(".c-banner__close");
    // هنا استدعينا الايكون بتاعت الاكس بس باستخدام دالة بتدورلي علي اي حاجة عندها الكلاس دي في الصفحات كلها الللي عندي
    closebanners.forEach(closebanner => {
        closebanner.addEventListener("click", event => {
            const banner = event.target.parentNode;
            banner.classList.add("collapse");
            // كدة الدالة دي ضفناها عشان تضيف الكلاس ده
            banner.addEventListener("transitionend", function(event) {
                if (event.target === this) {
                  this.remove();
                }
            });
            // وهنا الدالة دي عشان بعد ما الترانزيشن يخلص خالص من البانر عايزين البانر يتمسح خالص عشان مايسيبش مكان ليه بعد مايتشال
        })
    })
})();
// دي اسمها دالة ذاتية التشغيل او iife
// بتعمل بمجرد انها تتعرف او يعلن عنها
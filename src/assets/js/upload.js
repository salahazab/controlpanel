(function(){
    const uploaders= document.querySelectorAll(".js-upload");
    Array.from(uploaders, uploader => {
        const upload     = uploader.querySelector(".js-upload-value"),
              placeholder= uploader.querySelector(".js-upload-placeholder"),
              remove     = uploader.querySelector(".js-upload-remove");
    
        upload.addEventListener("change", function(event){
            // وهنا ضفنا حدث لما نجي نعمل تغيير لقيمة ال انبوت يعني ضف فايل مثلا عايز يحصل دالة معينة
            const img= this.files[0];
            // وهنا كل الفايلز بتكون موجودة في مصفوفة معينة وهنا كدة كدة مفيش الا فايل واحد بس وهو الصورة فحددناها باستخدام ال 0 وخزناها في الثابت ده
            let reader= new FileReader();
            //   وهنا عملنا نسخة من الكلاس فايل ليدر اللي موجود في جافا سكربت ومسؤل عن القراءة والتعامل مع ملفات النظام اي (الكمبيوتر) في المتصفح
            reader.readAsDataURL(img);
            // وهنا الكلاس اللي خزناه في المتغير ده حنستخدم علية الدالة دي ونحددله الصورة او الفايل اللي المستخدم اختاره عشان يقراها
            // والدالة دي بردو فايدتها انها بتقرا محتوي الصورة من الجهاز وتحوله الي تراميز base64
            // بحيث يكون ملف الصورة المستدعاه نصي قابل القراءة بدلا من البايناري غير المقرؤ
            reader.onloadend= () => {
            // وهنا قولناله اول ما القراءه بتاعت الصورة دي تتم بالكامل عشان هي بتاخد وقت فلازم نحدد بعد تمام التحميل عشان ينفذ الامر اللي بعد كدة اللي هو الدالة اللي ادناهاله
                uploader.classList.add("has-image");
            // وهنا ضيفنا كلاس للديف الكبيرة كلها عشان نعلمها ان في الوقت اللي الصورة موجودة فيه او متحملة او مرفوعة علي الموقع الكلاس ده يكون موجود وبالتالي نقدر نستغل ان في حالة وجود الكلاس ده ندي تنسيقات معينة لأي عنصر في الديف
                placeholder.src= reader.result;
            // وهنا ضفنا السورس بتاع الصورة للصورة بتاعتنا 
            }
        })        

        remove.addEventListener("click", e => {
            upload.value= null;
            // هنا عايز لما ادوس علي زرار الريموف يشيل الصورة خالص اللي رفتها يشيلها من الانبوت يعني اخلي قيمة الانبوت فاضيه
            uploader.classList.remove("has-image");
            // ونشيل الكلاس اللي ضفناه للديف الكبيرة
            placeholder.src= "";
            // ونخلي مصدر الصورة فاضي
        })

    });
})();
function updatePage() {
    // تحديث محتوى الصفحة
    // ...
  
    // إعادة تحميل الصفحة
    location.reload(index.html);
  }
  
  // إضافة مستمع على حدث التعديل
  document.addEventListener('change', updatePage);
  